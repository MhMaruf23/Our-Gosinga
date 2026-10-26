# গোসিংগা ইউনিয়ন ওয়েবসাইট — কাজের অবস্থা

## বাংলা ইউনিয়ন তথ্যসাইট ও পেজ কাঠামো
- [x] গাজীপুর জেলার শ্রীপুর উপজেলার গোসিংগা ইউনিয়নকে কেন্দ্র করে পূর্ণাঙ্গ বাংলা তথ্য ও নাগরিক সেবা ওয়েবসাইট তৈরি হবে।
- [x] বাংলা হোমপেজে ইউনিয়নের সংক্ষিপ্ত পরিচিতি, গুরুত্বপূর্ণ তথ্য, পরিসংখ্যান এবং প্রধান বিভাগের দ্রুত প্রবেশপথ থাকবে।
- [x] ওয়েবসাইটে পরিচিতি, গ্রাম/ওয়ার্ড, জনপ্রতিনিধি, প্রতিষ্ঠান, সেবা, দর্শনীয় স্থান, গ্যালারি, মানচিত্র, নোটিশ ও যোগাযোগের তথ্য বিভাগভিত্তিকভাবে সাজানো হবে।
- [x] কনটেন্টে গবেষণায় সংগৃহীত তথ্য থাকবে; অসম্পূর্ণ, যাচাইাধীন বা অনিশ্চিত তথ্যকে নিশ্চিত বলে দেখানো হবে না।

## হোমপেজের ফিচার্ড ছবি ও অবদানকারী
- [x] হোমপেজের ডান পাশে বড় স্থান/এলাকার ছবি দেখানোর একটি ফিচার্ড ছবি কার্ড থাকবে।
- [x] সম্মতি-সহ নতুন ছবি জমা হলে তা Admin অনুমোদনের আগ পর্যন্ত public হবে না। Admin অনুমোদন করলে গ্যালারিতে যোগ হবে; Admin “অনুমোদন ও ফিচার” দিলে হোমপেজের feature card-এ ছবি, uploader-এর profile photo, নাম ও লোকেশন দেখাবে। Approval editorial review, ছবির স্থান-তথ্যের স্বাধীন সত্যতা-যাচাই নয়।
- [x] হোমপেজের ছবিগুলো carousel/slider-এ দেখাবে; স্বয়ংক্রিয়ভাবে slide হবে এবং previous/next button, touch swipe ও explicit pause/play button দিয়ে চালানো যাবে। যে ছবি slide-এ থাকবে তার uploader-এর profile photo ও নাম, ছবির স্থান, লোকেশন, জমার তারিখ এবং Admin approval/যাচাই-অবস্থা দেখা যাবে।
- [x] ছবির কার্ডে স্পষ্ট ও সুন্দর “সব ছবি দেখুন” button থাকবে, যা সম্পূর্ণ gallery page-এ নিয়ে যাবে।
- [x] carousel mouse hover-এ pause করবে এবং explicit pause/play button থাকবে; reduced-motion পছন্দ থাকলে auto-slide বন্ধ থাকবে এবং পছন্দটি page খোলা থাকা অবস্থায় বদলালেও সঙ্গে সঙ্গে তা মানবে। কোনো community photo না থাকলে কেবল উৎস-ক্রেডিটসহ সরকারি নমুনা ছবি দেখাবে, ভুয়া uploader details নয়।
- [x] প্রতিটি ছবির পাশে/নিচে লোকেশন এবং তথ্যসূত্র/যাচাই অবস্থা থাকবে। সরকারি নমুনা ছবির ক্ষেত্রে বাস্তব আপলোডকারীর ভুয়া নাম বা ছবি দেখানো হবে না।
- [x] হোমপেজের ইউনিয়ন পরিষদ ভবনের fallback ছবিতে সরকারি ফটো গ্যালারির source link ও পুনঃপ্রকাশ-অনুমতির caveat থাকবে; place-strip-এ নদী/রিসোর্টের সরকারি পর্যটন পাতা ও কর্ণপুর দীঘির মূল ভিডিওর source link এবং permission caveat থাকবে।

## দর্শনার্থীর ছবি জমা ও নিরাপদ সংরক্ষণ
- [x] দর্শনার্থীর জন্য স্থানের ছবি জমা দেওয়ার ফর্ম এবং স্পষ্ট আপলোড বাটন থাকবে।
- [x] ফর্মে স্থান/এলাকার ছবি, আপলোডকারীর নাম, আপলোডকারীর প্রোফাইল ছবি এবং স্থানের লোকেশন দেওয়ার সুবিধা থাকবে; ঐচ্ছিক ক্যাপশন যোগ করা যাবে।
- [x] ফাইলগুলো server-side যাচাইয়ের পরে managed object storage-এ স্থায়ীভাবে থাকবে এবং submission metadata ডেটাবেজে সংরক্ষিত হবে।
- [x] নতুন ছবি upload server-এ সফল, দুই image ticket বৈধ এবং public display consent সংরক্ষিত হলে submission `pending` হবে; Admin অনুমোদনের আগে gallery/homepage/public API-তে দেখা যাবে না। Admin “অনুমোদন” করলে gallery-তে যাবে, “অনুমোদন ও ফিচার” করলে একই সঙ্গে homepage feature হবে; pending submission পুরোনো featured ছবি সরাবে না।
- [x] ফর্ম স্পষ্টভাবে জানাবে যে ছবি, নাম, profile ও location Admin approval-এর পর সবার জন্য public হবে; submission-এর পর থেকেই অনুমোদনের জন্য পর্যালোচনা হতে পারে। স্থান/বর্ণনা স্বাধীনভাবে সত্যতা-যাচাই নাও পেতে পারে; EXIF/GPS metadata নিজে মুছতে হতে পারে।
- [x] আগে review-policy-তে জমা হওয়া pending submission-গুলো `/admin`-এ থাকবে; সর্বশেষ নীতি অনুযায়ী নতুন upload-ও একই protected Admin review queue-তে যাবে। অনুমোদন ছাড়া কোনো নতুন photo auto-publish হবে না।
- [x] অবশিষ্ট legacy admin moderation শুধুমাত্র অনুমোদিত admin role-এর জন্য সুরক্ষিত থাকবে।

## ইউনিয়নের পরিচিতি, গ্রাম ও ওয়ার্ড
- [x] ইউনিয়নের পরিচিতি, ইতিহাস, আয়তন, জনসংখ্যা, গ্রাম/মৌজা-সংক্রান্ত প্রাপ্য পরিসংখ্যান ও উৎস দেখানো হবে।
- [x] ১৯টি গ্রাম সরকারি পোর্টালে পাওয়া বানান ও ক্রমে দেখানো হবে।
- [x] ওয়ার্ডভিত্তিক গ্রাম-সীমানা নির্ভরযোগ্যভাবে না পাওয়া গেলে তা স্পষ্টভাবে যাচাই-অপেক্ষমাণ দেখানো হবে; কোনো সীমানা অনুমান করা হবে না।
- [x] পুরোনো জনগণনা/শিক্ষার হার বর্তমান হিসেবে প্রকাশ করা হবে না; পরিসংখ্যানের পাশে উৎস ও তারিখ থাকবে।

## জনপ্রতিনিধি, প্রতিষ্ঠান, বাজার, দর্শনীয় স্থান ও সেবা
- [x] জনপ্রতিনিধিদের নাম, পদবি, এলাকা এবং প্রাপ্য অফিসিয়াল যোগাযোগ দেখানো হবে; বর্তমান পদ/যোগাযোগ পুনঃনিশ্চিতকরণ বাকি থাকলে তা প্রকাশ্য থাকবে।
- [x] শিক্ষা ও স্বাস্থ্য প্রতিষ্ঠানের পাওয়া নাম/তালিকা দেখানো হবে; অসম্পূর্ণ তালিকাকে সম্পূর্ণ বলে দাবি করা হবে না।
- [x] বাজার, ধর্মীয় ও সরকারি প্রতিষ্ঠান, দর্শনীয় স্থান, নাগরিক সেবা ও যোগাযোগের তথ্য শ্রেণিভিত্তিক ডিরেক্টরিতে সাজানো হবে।
- [x] প্রাপ্য নাগরিক সেবা ও জরুরি নম্বর প্রকাশিত হবে; অযাচাইকৃত ফি, সময় বা ফোন নম্বর উদ্ভাবন করা হবে না।

## যাচাই-অবস্থা, উৎস, ছবি ও মানচিত্র
- [x] প্রতিটি তথ্যের যাচাই অবস্থা—যাচাইকৃত সরকারি উৎস, যাচাইাধীন, অসম্পূর্ণ বা অজানা—স্পষ্টভাবে দেখাতে হবে।
- [x] সম্ভব হলে প্রতিটি তথ্যের উৎস-লিংক এবং সর্বশেষ প্রকাশ/হালনাগাদের তারিখ দেখানো হবে।
- [x] ছবি গ্যালারিতে প্রকাশিত ছবির অবস্থান/ক্যাপশন/উৎস থাকবে এবং পুনঃপ্রকাশের অনুমতি না জানা থাকলে উৎস-লিংক দেওয়া হবে।
- [x] মানচিত্র ও স্থান-তথ্য দেখানো হবে; যাচাই না হওয়া সীমানা বা স্থানাঙ্ককে নির্ভুল হিসেবে চিহ্নিত করা যাবে না।

## ছবি-আপলোডের নিরাপত্তা ও সম্মতি
- [x] ছবি file type/signature ও ৮ MB সীমা server-এ যাচাই হবে; public endpoint প্রতি IP-তে এক ঘণ্টায় সর্বোচ্চ ১২ image upload মেনে নেবে।
- [x] Submit metadata-তে server-issued, ৩০ মিনিটের one-use image ticket-দুটি আবশ্যক; client শুধু নিজে বানানো storage key দিয়ে submission তৈরি করতে পারবে না।
- [x] Public display-এর consent boolean, server timestamp ও approval-policy version DB-তে সংরক্ষিত হবে; নতুন upload `autoPublished=false` থাকবে এবং approval না হলে public data-তে যাবে না; reviewer identity/time কেবল সত্যিকারের Admin approval-এর পর লেখা হবে।
- [x] admin access protected `ADMIN_EMAIL` configuration-এ নির্ধারিত verified Manus OAuth email এবং/অথবা বিদ্যমান admin role দিয়ে সীমিত থাকবে; reviewer identity ও সময় moderation record-এ থাকবে।
- [x] প্রতিস্থাপনযোগ্য সরকারি নমুনা ছবির উৎস/সংগ্রহ-তারিখ নথিবদ্ধ; পুনঃপ্রকাশের অনুমতি নিশ্চিত নয় বলে তা স্পষ্টভাবে জানানো হবে।

## “Our Gosinga” ব্র্যান্ড, লোগো ও ভিডিও হোমপেজ
- [x] ওয়েবসাইটের নাম “Our Gosinga” হবে; ব্যবহারকারীর ZIP-এ দেওয়া logo header/footer, favicon/social preview ও site branding-এ ব্যবহার হবে।
- [x] ব্যবহারকারীর দেওয়া video website-এর homepage hero background হিসেবে চলবে; muted, loop এবং inline playback থাকবে যাতে শব্দ নিজে থেকে না বাজে। পড়ার contrast-এর overlay থাকবে, poster fallback থাকবে এবং reduced-motion preference-এ auto-play বন্ধ থাকবে; page খোলা থাকা অবস্থায় preference বদলালেও সঙ্গে সঙ্গে video ও carousel তা মেনে চলবে। মূল video file অক্ষত থাকবে।

## জনপ্রতিনিধি ও ওয়ার্ড সদস্যদের পূর্ণ প্রকাশিত রোস্টার
- [x] সরকারি পোর্টালের page 1 ও page 2 মিলিয়ে ১৩টি entry-ই থাকবে: চেয়ারম্যান, ওয়ার্ড ১–৯-এর সাধারণ সদস্য এবং code 123/456/789-সহ আরও ৩ সদস্য; code-গুলোর reserved-seat category/ward mapping অনুমান করা হবে না; প্রতিটি প্রকাশিত phone tap-to-call হবে।
- [x] সরকারি তালিকার বাইরে নাম বা ফোন যোগ করা হবে না; কার্যকাল, incumbency ও phone-এর বর্তমান সচলতা নিশ্চিত নয় বলে source link/date-সহ জানাতে হবে।

## পূর্ণ শিক্ষা ডিরেক্টরি
- [x] ৩০টি distinct শিক্ষা প্রতিষ্ঠান—বর্তমান যাচাই করা তালিকায় ১৭টি primary, ৫টি secondary, ৫টি madrasa, ২টি kindergarten/academy ও ১টি technical institution—নাম, type, প্রাপ্য গ্রাম/ঠিকানা, যাচাইকৃত school code/EIIN ও source link-সহ থাকবে।
- [x] সরকারি roster-এর duplicate/variant row merge হবে; বেড়াবাড়ী পূর্ব বনাম নারায়নপুর, নিজখোজেখানী/৪৯নং গোসিংগা, দড়িখোজেখানীর ownership/type এবং অন্য spelling/address conflict স্পষ্ট নোটে থাকবে; অনুপস্থিত registration ID বা street address বানানো হবে না।

## পূর্ণ ইউনিয়ন স্বাস্থ্যসেবা ও ঠিকানা
- [x] DGHS registry-তে পাওয়া বাউনী, লতিফপুর, পেলাইদ ও বেড়াবাড়ী/Verabari-এর চারটি Community Clinic, plus খোজেখানী গ্রামের ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র—সব ৫টি facility দেখাতে হবে।
- [x] প্রতিটি entry-তে official facility code/source এবং পাওয়া village/Union-level address থাকবে। DGHS record-এ street/holding address না থাকলে “পূর্ণ ঠিকানা সরকারি রেকর্ডে প্রকাশিত নয়” বলতে হবে; ফোন বা hours অনুমান করা যাবে না।

## দর্শনীয় স্থানের বাস্তব ছবি
- [x] Shitalakshya River, Diamond Resort/Lake ও Karnapur Dighi-এর নির্দিষ্ট বাস্তব স্থান-ছবি এবং source/credit থাকবে; ছবি যে নির্দিষ্ট স্থানকে দেখায় তা আলাদা করে label হবে।
- [x] Flood Dighi-র পৃথক নির্ভরযোগ্য ছবি না পাওয়া গেলে অন্য জায়গার photo তার নামে ব্যবহার করা যাবে না; missing-photo status ও community photo upload path দেখাতে হবে। ছবি-অনুমতি অজানা হলে তা স্পষ্ট থাকবে।

## নতুন অনুরোধ: শিক্ষা প্রতিষ্ঠানের ছবি ও বিস্তারিত প্রোফাইল
- [ ] ৩০টি শিক্ষা প্রতিষ্ঠান/মাদ্রাসার প্রত্যেক নামের পাশে ওই নির্দিষ্ট প্রতিষ্ঠানের আসল ছবি থাকবে। সরকারি Union portal-এর ৩০টি individual profile ২০ অক্টোবর ২০২৬-এ দেখা হয়েছে: সবগুলোতে “ফটোগ্যালারি: (নেই)” এবং কোনো campus photo element পাওয়া যায়নি। অতএব যতদিন source-backed প্রতিষ্ঠানভিত্তিক ছবি পাওয়া না যায়, অন্য প্রতিষ্ঠানের, stock বা কৃত্রিম ছবি ওই প্রতিষ্ঠানের নামে দেখানো হবে না; প্রতিটি missing state ও per-school image-upload path-কে actual school photo হিসেবে ভুল বোঝানো যাবে না।
- [x] কোনো স্কুলের card/details খুললে প্রতিষ্ঠানের নাম, ধরন, গ্রাম/ঠিকানা, roster/registration identifier, উপলব্ধ সরকারি source এবং website/যোগাযোগ নম্বর দেখাবে। ৩০টি checked Union profile-এ school-level phone বা website প্রকাশিত হয়নি; সংশ্লিষ্ট field-এ “সরকারি উৎসে প্রকাশিত নয়” থাকবে, ভবিষ্যৎ verified information যোগ হলে exact sourceসহ প্রকাশ হবে।
- [x] কোনো প্রতিষ্ঠানের নামে exact match থাকা Admin-approved community photo থাকলে তা “অবদানকারীর ছবি · স্বাধীনভাবে যাচাই হয়নি” হিসেবে card/profile-এ দেখাবে; exact-name match না হলে অন্য photo যুক্ত হবে না। প্রতিটি স্কুলের upload button school name ও village prefill করে Admin approval-required upload form খুলবে।

## নতুন অনুরোধ: ক্লিকযোগ্য গ্রাম এবং স্থানীয় তথ্য
- [x] সরকারি তালিকার ১৯টি গ্রামের প্রতিটি নাম button/link হিসেবে click/tap করা যাবে; click করলে সেই গ্রামের পরিচিত school, health facility ও নাম-সম্মত market/place থাকলে source-aware detail দেখাবে।
- [x] গ্রামের সঙ্গে নির্দিষ্ট ইউপি সদস্য বা চৌকিদারের নাম/নম্বর কেবল verified village-to-ward mapping থাকলে যুক্ত হবে। বর্তমান সরকারি record-এ এই mapping অনুপস্থিত; তাই নাম/নম্বর বানিয়ে জুড়ে না দিয়ে missing status, “ইউপি সদস্যবৃন্দ” রোস্টার link এবং তথ্য সংশোধনের যোগাযোগ দেখাতে হবে।

## নতুন অনুরোধ: homepage CTA, navigation ও premium visual refresh
- [x] Homepage photo carousel card-এর লাল চিহ্নিত/উপরের অংশে “গোসিংগার সৌন্দর্য তুলে ধরুন” লেখা একটি সুন্দর callout box থাকবে; effectable “ছবি আপলোড করুন” button click করলে ছবি জমার জায়গায় যাবে এবং page-এ `placeName` ও `location` prefill করা যাবে।
- [x] Header-এর “মানুষ” button-এর নাম হবে “ইউপি সদস্যবৃন্দ” এবং বর্তমান representatives page-এ link থাকবে।
- [x] পুরো website-এর palette আরও unique/premium হবে; border, card depth, hover, focus ও interaction effect smart/consistent হবে, mobile-এ readable থাকবে এবং reduced-motion accessibility নষ্ট হবে না।

## নতুন অনুরোধ: Leisure Marina Sports Village
- [x] “Leisure Marina Sports Village” দর্শনীয় স্থানের তালিকায় যুক্ত হবে। Source-backed description-এ Sreepur/Gazipur ও Shitalakshya riverbank-এর উল্লেখ থাকবে; exact Gosinga Union boundary, current visitor access/operation ও booking status নিশ্চিত নয় বলে card-এ তা স্পষ্ট থাকবে।
- [x] কোনো ২০২৪ social-page phone-কে current visitor number বলা হবে না; যদি দেখানো হয়, তা project/sales inquiry number হিসেবে dated/source-linked এবং currentness caveat-সহ থাকবে।

## নতুন অনুরোধ: ইউনিয়ন মানচিত্র ও ভূমি অফিস
- [ ] ব্যবহারকারীর দেওয়া মানচিত্রটি বিশ্লেষণ করে সুন্দরভাবে সাইটে বসাতে হবে। `2365.zip`-এ কেবল logo ও video আছে, আলাদা map file নেই; আপাতত সরকারি ইউনিয়ন পোর্টালের ৬৪২×৩৫০ মানচিত্রটি source link ও caveat-সহ বসানো হয়েছে, কিন্তু সেটিকে ব্যবহারকারীর map বা আইনগত সীমানার প্রমাণ বলা হয়নি। ব্যবহারকারীর screenshot-এ website preview-ই আছে; actual user-owned map asset পাওয়া যায়নি, তাই তা দিলে যাচাই করে প্রতিস্থাপন বাকি।
- [x] দৃশ্যমান সরকারি মানচিত্রের পাশে পাওয়া গ্রাম/বাজারের নাম ব্যাখ্যা করা হয়েছে; map-এ scale, legend ও ward boundary অনুপস্থিত—এই সীমা দেখানো হয়েছে এবং কোনো স্থানাঙ্ক/সীমানা অনুমান করা হয়নি।
- [x] “গোসিংগা ইউনিয়ন ভূমি অফিস” profile ও সেবা বিভাগ রাখা হয়েছে। সরকারি স্থানীয় profile-এ পদধারী/ফোন/ইমেইল/নির্দিষ্ট ঠিকানা/সেবা তালিকা “নেই”; স্থানীয় অফিসের তথ্য হিসেবে কিছু বানানো হয়নি।
- [x] জাতীয় ভূমি পোর্টালের source-linked e-Namjari, land-development-tax, record-room/খতিয়ান ও land-map entry রাখা হয়েছে; এগুলো জাতীয় online service, স্থানীয় অফিসের onsite service হিসেবে গুলিয়ে ফেলা হয়নি। ১৬১২২-কে জাতীয় ভূমিসেবা সহায়তার প্রকাশিত hotline হিসেবে দেখানো হয়েছে; বর্তমান fee/time অনুমান করা হয়নি।

## নতুন অনুরোধ: স্বাস্থ্যকেন্দ্র, EPI ও ইউনিয়ন পরিষদ সেবা
- [x] “সেবা” পৃষ্ঠায় সব ৫টি source-verified সরকারি স্বাস্থ্যসেবা facility-এর নাম, পাওয়া village-level address, code/source ও missing full-address note রয়েছে।
- [x] নির্দিষ্টভাবে source-এ পাওয়া EPI/টিকাদান point এবং তার ঠিকানা দেখানো হয়েছে। সরকারি ইউনিয়ন পৃষ্ঠায় EPI service আছে, কিন্তু পৃথক village-session centre, day/time বা full schedule তালিকা নেই—অজানা schedule বা অন্যান্য clinic-কে vaccination site বলা হয়নি; এই limitation ও source link দেখানো হয়েছে।
- [x] স্বাস্থ্য/টিকাদান অংশের পরে “ইউনিয়ন পরিষদের সেবাসমূহ” এবং তার নিচে “ইউনিয়ন ভূমি অফিসের সেবাসমূহ” ক্রমানুসারে রয়েছে; application, fee বা time source-এ না থাকলে অনুমান করা হয়নি।

## নতুন অনুরোধ: সেবাদানকারী প্রতিষ্ঠান
- [x] Header/home-এ “সেবাদানকারী প্রতিষ্ঠান” নামে সহজে পাওয়া button/link রয়েছে এবং নিজস্ব provider directory page খোলে।
- [ ] সরকারি/প্রাতিষ্ঠানিক source-এ পাওয়া সরকারি-বেসরকারি bank/agent outlet ও NGO office-এর নাম, category, ঠিকানা, phone/site (যেখানে প্রকাশিত), source link ও verification status দেওয়া হবে।
- [ ] বর্তমান source-backed findings-এ Agrani Bank PLC—Gosinga branch ও Bank Asia—Gosinga agent outlet পাওয়া গেছে; প্রথমটির প্রকাশিত phone থাকবে, দ্বিতীয়টির phone unavailable হিসেবে থাকবে। নির্ভরযোগ্য local address/source না থাকা NGO office-কে তালিকায় নিশ্চিত বলে দেখানো যাবে না; এ কারণে complete NGO inventory open থাকবে।

## নতুন অনুরোধ: Admin approval ও প্রকাশিত ছবি সরানো
- [x] Authenticated Admin panel-এ নতুন ও পুরোনো pending submission-গুলো review queue-তে দেখা যায়; Admin “অনুমোদন” করলে gallery-তে, “অনুমোদন ও ফিচার” করলে gallery ও homepage-এ প্রকাশ হয়। Pending ছবি আগে public gallery/homepage/API-তে থাকে না। Admin panel-এ public/approved photos-ও দেখা যায়; “ওয়েবসাইট থেকে সরান” নির্বাচন করলে confirmation-এর পর ছবিটি public gallery, homepage feature এবং public API থেকে বাদ যায়।
- [x] Removal existing protected admin permission/status transition reuse করে; remove action-এর পর website cache/query invalidation হয়। Runtime object-storage API file bytes physically delete করতে পারে না—admin UI-তে এই সীমা স্পষ্ট; image storage-এ থাকলেও site-এর public index-এ থাকে না।

## যাচাই ও handoff
- [x] site route manifest, TypeScript diagnostics, application checks ও build সম্পন্ন হবে।
- [x] canonical main-এ checkpoint সংরক্ষিত; project-এর চালু auto_publish সেটিংয়ে publication স্বয়ংক্রিয়ভাবে জমা হয়েছে। আলাদা Publish call করা হয়নি; completion/URL Dashboard-এ নিশ্চিত করতে হবে।
