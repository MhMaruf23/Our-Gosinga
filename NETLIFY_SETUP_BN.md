# Our Gosinga — Netlify deploy ও Admin setup

এই সংস্করণটি Netlify static hosting + Netlify Functions + Netlify Blobs ব্যবহার করে। আগের Manus OAuth/MySQL photo-admin backend বদলে secret-protected email/password admin login দেওয়া হয়েছে। Netlify-তে deploy না করা পর্যন্ত API এবং admin চালু হবে না।

## ১. ZIP-এর root directory ঠিক রাখুন

ZIP extract করলে `OurGosinga/` directory-র ভেতরে `package.json`, `pnpm-lock.yaml`, `netlify.toml` এবং `netlify/functions/api.mjs` থাকতে হবে। Netlify-তে Git repository import করলে এই directory-কে **Base directory** দিন: `OurGosinga` (অথবা project root যদি এর content সরাসরি root-এ থাকে)। Build command ও publish directory `netlify.toml`-এ দেওয়া।

## ২. Netlify environment variables সেট করুন

Netlify dashboard → Site configuration → Environment variables-এ নিচের variables যোগ করুন, production/deploy-preview scope প্রয়োজনমতো নির্বাচন করে:

- `ADMIN_EMAIL`: যে email দিয়ে একমাত্র admin sign in করবেন।
- `ADMIN_PASSWORD`: অন্তত ১৬ অক্ষরের, অনন্য ও শক্তিশালী password।
- `ADMIN_SESSION_SECRET`: অন্তত ৩২ অক্ষরের আলাদা random secret। উদাহরণ secret বানাতে: `openssl rand -base64 48`। Secret-টি কাউকে বা public Git repository-তে দেবেন না।

এগুলো frontend environment variable হিসেবে `VITE_` prefix দিয়ে দেবেন না। Function secret শুধু server-side রাখতে হবে।

## ৩. Deploy

Git repository-টি Netlify-তে connect করে deploy করুন। Build সফল হলে `https://আপনার-সাইট/api/health` খুলে `{"status":"ok"}` দেখুন। Netlify Functions/Blobs account plan এবং site context-এ উপলভ্য থাকতে হবে।

## ৪. Admin login

সাইটের সম্পাদকীয় প্রবেশ পেজে গিয়ে `ADMIN_EMAIL` ও `ADMIN_PASSWORD` দিয়ে login করুন। সফল login হলে HttpOnly, Secure cookie সেট হয়; admin API প্রতিটি request-এ cookie যাচাই করে। Password frontend-এ embed করা হয়নি।

## ৫. ছবি upload পরীক্ষা

Netlify buffered function request-এর binary payload সীমা প্রায় ৪.৫ MB। তাই submission form-এর ছবির সর্বোচ্চ আকার ৩ MB করা আবশ্যক। দুই ছবি upload করে form submit করুন। Admin panel-এ pending submission দেখা, approve/feature/reject করা এবং প্রকাশিত ছবি সরানো পরীক্ষা করুন।

## গুরুত্বপূর্ণ সীমাবদ্ধতা

- এই migration Netlify Blobs ব্যবহার করে; আগের MySQL-এর user/account, photo metadata বা uploaded photo স্বয়ংক্রিয়ভাবে এখানে আসে না। নতুন Netlify storage শুরুতে খালি থাকবে।
- পুরোনো Manus OAuth login আর ব্যবহার হয় না; admin login এখন `ADMIN_EMAIL` + `ADMIN_PASSWORD`।
- Blobs app-এর ছবির bytes ও JSON metadata রাখে। বড় বা উচ্চ traffic-এর gallery, advanced search বা relational reporting দরকার হলে managed SQL/object storage বিবেচনা করুন।
- `Netlify Blobs` persistent store `netlify dev` স্থানীয় server-এ স্বয়ংক্রিয়ভাবে পাওয়া নাও যেতে পারে; hosted deploy-এ smoke test করুন.
- ZIP upload කරන Netlify UI-তে build plugins/functions build support enabled কি না plan/account-এ 확인 করুন; Git deploy is recommended.

## Troubleshooting

- `/api/health` 404: `netlify.toml`-এর `functions = "netlify/functions"` এবং Base directory পরীক্ষা করে redeploy করুন।
- login 503: `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET` ঠিক scope-এ দেওয়া আছে কি না দেখুন; environment variable বদলালে নতুন deploy করুন।
- admin 401: আবার login করুন; cookie/domain HTTPS বাধা দিচ্ছে কি না দেখুন।
- ছবি 413: file ৩ MB-এর নিচে নামিয়ে চেষ্টা করুন।
- ছবি/তথ্য save হচ্ছে না: Netlify Functions log খুলে Blobs permission/plan error পরীক্ষা করুন।
