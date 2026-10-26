# Our Gosinga — কাস্টম ডোমেইনে Hosting Guide

এই archive-টি **checkpoint `76b103e`** থেকে তৈরি source bundle। এতে React/Express application, বাংলা union-directory content, static logo/map/place assets, checked-in database migrations, Dockerfile ও pnpm lockfile আছে। Homepage-এর optimized 720p background video-টিও স্থানীয় `client/public/media/` asset হিসেবে যোগ করা হয়েছে। Original user video 1.8 GB-এর বেশি হওয়ায় সেটি নয়—ওয়েব-উপযোগী optimized copy আছে।

## আগে গুরুত্বপূর্ণ সীমাবদ্ধতা বুঝুন

এটি static HTML নয়; photo upload, admin approval/removal, login ও database-backed gallery চালাতে **Node.js 22/Docker server** এবং **MySQL-compatible database** দরকার। শুধু সাধারণ cPanel/static FTP-তে ফাইল তুললে backend চলবে না।

বর্তমান application Manus OAuth এবং Manus storage/service API ব্যবহার করে। ZIP-এ কোনো secret বা `.env` নেই। আলাদা hosting-এ চালাতে hosting provider-এর secure environment/secrets-এ প্রয়োজনীয় project credentials দিতে হবে এবং Manus OAuth service-এ `https://YOUR_DOMAIN/api/oauth/callback` redirect URI গ্রহণযোগ্য কি না নিশ্চিত করতে হবে। `MANUS_API_URL`/`MANUS_API_KEY` না থাকলে community image upload ও storage-photo proxy কাজ করবে না; Manus service ব্যবহার না করলে storage ও OAuth adapter নিজস্ব provider অনুযায়ী বদলাতে হবে। এই bundle-এ storage proxy route অন্তর্ভুক্ত, যাতে valid Manus API credentials থাকলে host থেকে `/manus-storage/...` asset signed CDN URL-এ redirect করা যায়।

ZIP-এ **কোনো live database dump, user account, submitted community photo বা photo-submission metadata নেই**। এগুলো private database/object storage-এ থাকে এবং নিরাপত্তার কারণে source bundle-এ export করা হয়নি। Fresh database-এ migration চালালে static union directory থাকবে, কিন্তু পূর্ববর্তী community gallery records থাকবে না।

## ZIP-এ কী আছে

- Application source, public routes manifest, Bengali officials/institutions/services data, maps, source notes ও asset attributions
- Logo, favicon, static union map, fallback photos এবং optimized homepage video
- `Dockerfile`, pinned `pnpm-lock.yaml`, Drizzle schema এবং migrations
- `.env.example` (সব value placeholder/খালি; কোনো credential নয়)

## নিজের Docker host/VPS-এ চালানো

1. ZIP extract করুন এবং Docker-capable hosting নিন। Domain-এর DNS/HTTPS ব্যবস্থা hosting provider-এর নির্দেশমতো এই server-এ point করুন।
2. MySQL database/credential তৈরি করুন। Provider SSL/TLS চায় কি না নিশ্চিত করে সেই অনুযায়ী `DATABASE_URL` দিন।
3. `.env.example` কপি করে `.env` করুন, তারপর host-এর secret manager বা local private environment file-এ প্রয়োজনীয় value দিন। `.env` কখনো ZIP, Git বা public repository-তে রাখবেন না। Variable-গুলোর অর্থ নিচের তালিকায় আছে।
4. Archive root-এ চালান:

   ```bash
   docker build -t our-gosinga:latest .
   docker run --rm --env-file .env --entrypoint pnpm our-gosinga:latest db:migrate
   docker run -d --name our-gosinga --restart unless-stopped \
     --env-file .env -e PORT=3000 -p 127.0.0.1:3000:3000 our-gosinga:latest
   ```

   Migration সফল হওয়ার পর app container চালু করুন। Docker host-এ reverse proxy (যেমন আপনার provider-নির্বাচিত proxy) দিয়ে HTTPS traffic `127.0.0.1:3000`-এ পাঠান। App health URL: `/api/health`।

5. Hosting provider-এর DNS panel-এ তাদের দেওয়া `A`, `AAAA` বা `CNAME` record বসান; HTTPS certificate চালু করুন। HTTPS live হলে `https://YOUR_DOMAIN/api/health` থেকে `{"status":"ok"}` পাওয়া উচিত। OAuth login-এর জন্য exact HTTPS callback `https://YOUR_DOMAIN/api/oauth/callback` Manus OAuth redirect policy-তে গ্রহণযোগ্য হতে হবে।
6. Admin permission পেতে OAuth account-এর verified email `ADMIN_EMAIL`-এ নির্দিষ্ট করুন, অথবা project-এর উপযুক্ত owner identity `OWNER_OPEN_ID` হিসেবে সুরক্ষিতভাবে দিন। `MANUS_JWT_SECRET` এবং অন্য secret কখনো frontend code-এ বসাবেন না।
7. Database backup, uploaded community-photo objects এবং domain/SSL নবায়নের দায়িত্ব hosting setup-এর। নতুন host-এ ব্যবহারকারীর পুরোনো ছবি/record আনতে চাইলে আলাদা অনুমোদিত database/object-storage migration লাগবে।

## `.env.example` variables

- `PORT`: HTTP port; Docker default `3000`।
- `DATABASE_URL`: MySQL connection string; provider প্রয়োজন করলে TLS query options দিন।
- `MANUS_PROJECT_ID`, `MANUS_OAUTH_PORTAL_URL`, `MANUS_OAUTH_API_URL`, `MANUS_JWT_SECRET`: existing app-এর Manus OAuth/session integration। OAuth URL ও session secret project-এর সঠিক মানে সেট করতে হবে।
- `MANUS_API_URL`, `MANUS_API_KEY`: photo upload ও storage redirect-এর server-side Manus service credentials। Secret manager-এ রাখুন।
- `MANUS_API_BROWSER_KEY`: browser-safe key; private server key নয়।
- `ADMIN_EMAIL` অথবা `OWNER_OPEN_ID`: সাইটের অনুমোদিত admin পরিচয়; যথাযথভাবে সীমিত রাখুন।
- `NODE_ENV`: production host-এ `production`।

## Custom domain যদি Manus-এ host করেন

এই ZIP source backup/transfer-এর জন্যও ব্যবহার করা যাবে; Manus-managed hosting-এ project চালালে platform নিজেই database, OAuth ও stable media routing দেয়। Custom domain যুক্ত করার নির্দিষ্ট DNS record আপনার domain provider এবং hosting dashboard-এর দেওয়া তথ্য থেকে নিন—এই bundle কোনো domain registrar বা DNS change নিজে করে না।

## যদি fully independent hosting চান

Manus login/storage/API-র পরিবর্তে নিজের authentication provider, object storage (S3-compatible ইত্যাদি) এবং app-compatible environment/configuration লাগবে। Domain provider/cPanel/VPS/Render/Railway—কোন hosting ব্যবহার করবেন জানালে সেই platform অনুযায়ী আলাদা deployment recipe বা service-adapter পরিবর্তন নির্দিষ্ট করে দেওয়া যাবে।