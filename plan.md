# Our Gosinga | গোসিংগা ইউনিয়ন — implementation plan

## Product goal

“Our Gosinga” হবে গাজীপুরের শ্রীপুর উপজেলার গোসিংগা ইউনিয়নের বাংলা community-information site। বাসিন্দারা এখানে ইউনিয়নের পরিচিতি, ১৯টি গ্রাম, জনপ্রতিনিধি, শিক্ষা ও স্বাস্থ্যসেবা, বাজার, আর্থিক সেবা, দর্শনীয় স্থান, ছবি এবং নাগরিক সেবার তথ্য পাবেন। প্রতিটি claim-এর পাশে source, research/verification date ও confidence status থাকবে; অজানা তথ্য নিশ্চিত বলে দেখানো হবে না।

## Implementation approach

- Existing React/Wouter/tRPC/Express/Drizzle/MySQL app, managed database, photo upload flow and route structure reuse হবে। User ZIP-এর official logo header/footer, favicon, Open Graph image ও platform metadata-তে use হবে। Site title, description ও share metadata “Our Gosinga” হবে।
- User-supplied video-র মূল file অপরিবর্তিত রেখে silent, web-optimized copy managed object storage-এ রাখা হবে। Homepage hero-তে `<video muted loop playsInline>` background, poster fallback ও contrast overlay থাকবে; `prefers-reduced-motion` preference চলমান অবস্থায় বদলালেও video ও carousel autoplay দুটোই সঙ্গে সঙ্গে বন্ধ হবে এবং preference বদলে আবার অনুমতি দিলে video আবার চলবে। Video ব্যর্থ হলে static poster দেখা যাবে।
- জনপ্রতিনিধি পৃষ্ঠায় সরকারি page 1 ও page 2-র মোট ১৩টি record—১ চেয়ারম্যান, ৯টি numbered ward member এবং সরকারি code 123/456/789-সহ আরও ৩ member—নাম, প্রকাশিত ফোন-লিংক ও roster code-সহ থাকবে। এই তিন code-এর reserved-seat/ward mapping স্বাধীনভাবে নিশ্চিত নয়। কার্যকাল ও phone-এর বর্তমান সচলতা নিশ্চিত নয়—এ কথা পাশে থাকবে।
- শিক্ষা ডিরেক্টরিতে ৩০টি distinct record থাকবে—১৭ primary, ৫ secondary, ৫ madrasa, ২ kindergarten/academy ও ১ technical institution। ইউনিয়ন roster, DPE iPEMIS এবং শিক্ষা বোর্ডে পাওয়া তথ্য মিলিয়ে duplicate/variant row একবার, spelling/address conflict note-সহ দেখানো হবে; official code/EIIN এবং per-record source link যেখানে আছে থাকবে। Street address, registry code বা institution identity বানানো হবে না।
- স্বাস্থ্য ডিরেক্টরিতে DGHS-এ পাওয়া ৪টি community clinic ও ইউনিয়ন পোর্টালের ১টি health-and-family-welfare center—মোট ৫টি—official facility code ও যে সীমায় address প্রকাশিত আছে সেই অনুযায়ী থাকবে। আলাদা উৎসে প্রমাণিত না হলে clinic-কে EPI session point হিসেবে দেখানো হবে না।
- “সেবা” পৃষ্ঠায় প্রথমে যাচাইকৃত সরকারি স্বাস্থ্যকেন্দ্র ও জানা EPI টিকাস্থল, পরে ইউনিয়ন পরিষদের সেবা, তারপর স্থানীয় ভূমি অফিসের profile এবং জাতীয় ভূমি-মন্ত্রণালয়ের online service links থাকবে। ইউনিয়ন profile-এ যে land-office officer/contact/address/service নেই তা ঘাটতি হিসেবে দেখানো হবে; জাতীয় e-Namjari, land-development-tax, record-room এবং land-map links-কে স্থানীয় অফিসের সুনির্দিষ্ট সেবা/সুবিধা বলে মিশিয়ে দেওয়া হবে না।
- Official union-map page-এর ৬৪২×৩৫০ sourced image map page-এ responsiveভাবে থাকবে। পাশে কেবল দৃশ্যমান village/market labels ও map limitations বিশ্লেষণ করা হবে। এটি ২০১৪-তে হালনাগাদ সরকারি portal page-এর illustrative map; legend, scale, ward boundary বা legal parcel status নেই। User ZIP-এ আলাদা map file না থাকায় এটি সাময়িক সরকারি বিকল্প, user-supplied map নয়।
- “সেবাদানকারী প্রতিষ্ঠান” নামে primary navigation/home shortcut ও `/providers` page থাকবে। Source-backed data-তে Agrani Bank PLC Gosinga branch এবং Bank Asia Gosinga agent outlet address/phone/official links-সহ দেখানো হবে; NGO office/branch-এর নির্ভরযোগ্য local address না পাওয়া গেলে অনুপস্থিতিকে “কোনো NGO নেই” বলা হবে না, বরং inventory incomplete হিসেবে চিহ্নিত করা হবে।
- দর্শনীয় স্থান কার্ডে exact-location image ও source attribution থাকবে: সরকারি tourist page-এর Shitalakhya River ও Diamond Resort/Lake photo; Karnapur Boro Dighi-র জন্য ২০২২ drone-video thumbnail ও linked source; Flood Dighi-র পৃথক verified photo না থাকায় unrelated image নয়, community upload invitation ও missing-photo note থাকবে। Leisure Marina Sports Village-কে Sreepur/Gazipur-এর সম্ভাব্য প্রকল্প হিসেবে দেখানো হবে; exact Gosinga boundary, current visitor access, operation ও booking নিশ্চিত নয়। Rights/permission অজানা হলে তা বলা হবে।
- নতুন photo submission-এ contributor-এর public-display consent, valid upload tickets ও metadata সংরক্ষণের পরে status `pending` হবে। Admin approval না হওয়া পর্যন্ত image public gallery/homepage/API-তে থাকবে না। Admin “অনুমোদন” দিলে gallery-তে এবং “অনুমোদন ও ফিচার” দিলে gallery ও homepage feature-এ দেখা যাবে; submission যেন আগের featured picture সরিয়ে না দেয়। Approved carousel photo-তে name, profile photo, place, contributor-supplied location, date ও editorial-review-vs-factual-verification status থাকবে।
- School card-এ exact-campus photo কেবল source-backed image থাকলে; otherwise clear no-photo status ও school/location-prefilled upload link থাকবে। ৩০টি official school page-এ photo gallery, school-level phone/website পাওয়া যায়নি; stock/generated image নয়। Click করলে modal-এ school type, village/address, identifier, official source, available verified contact, profile excerpt/updated date ও uncertainty note থাকবে।
- প্রত্যেক village button click করলে source data-র সঙ্গে মেলা school, health facility, market/place record দেখা যাবে। School-to-ward/member/chowkidar mapping official source-এ না থাকলে জুড়ে দেওয়া হবে না; পূর্ণ “ইউপি সদস্যবৃন্দ” তালিকায় পথ থাকবে।
- Home photo card-এর উপরে “গোসিংগার সৌন্দর্য তুলে ধরুন” callout ও “ছবি আপলোড করুন” button থাকবে; button upload form-এ `placeName`/`location` prefill করবে। Navigation-এর “মানুষ” label “ইউপি সদস্যবৃন্দ” হবে। Consent copy approval timing ও EXIF/privacy caveat স্পষ্ট করবে।
- Admin photo panel-এ pending এবং approved/public photos থাকবে। Authorized admin “অনুমোদন” বা “অনুমোদন ও ফিচার” করে pending submission public করতে পারবেন; public photo-র “ওয়েবসাইট থেকে সরান” নিশ্চিত করলে record rejected/hidden হবে, তাই public gallery, homepage feature ও public API থেকে photo আর আসবে না। Runtime API physical storage object delete করতে পারে না; UI এই সীমা জানাবে এবং removal confirmation নেবে।
- Whole-site “Gosinga River Dusk” premium theme—deep teal/navy, river cyan ও muted copper/amber—accessible contrast, rounded cards, refined borders, hover/focus effects ও reduced-motion safe animation-সহ থাকবে।

## Project structure

- `client/src/App.tsx`: page routes ও lazy loading; `/providers` route এখানে।
- `client/src/pages/Home.tsx`: video hero, latest community-photo carousel, beauty/upload callout, homepage highlights ও provider shortcut।
- `client/src/pages/InfoPages.tsx`: পরিচিতি, village, representative, institution, service, map/places, gallery ও contact pages।
- `client/src/pages/ProvidersPage.tsx`: NGO/bank/agent-outlet directory page।
- `client/src/components/EducationDirectory.tsx`, `VillageDirectory.tsx`: school cards/details/photos এবং clickable village details।
- `client/src/components/SiteLayout.tsx`: branding, navigation/footer, route metadata।
- `client/src/pages/UploadPage.tsx`: immediate-public-consent flow; query-prefilled location fields।
- `client/src/pages/AdminPage.tsx`, `server/routers.ts`, `server/db.ts`: authorized legacy moderation and published-photo removal/hidden status; DB schema remains unchanged.
- `client/src/lib/unionData.ts`, `educationInstitutions.ts`, `schoolPortalProfiles.ts`: source-backed union, school and official portal profile records; audited bank/agent details are currently page-local in `ProvidersPage.tsx`.
- `client/public/manus-routes.json`: declared routes synchronized with `App.tsx`.
- `client/public/images/`, `assets/`: supplied logo/poster, checked-in official map copy and source backup; the large background video uses a managed `/manus-storage/...` path.
- `server/`, `drizzle/`: existing trusted upload validation, consent and database access; protected photo removal reuses rejected/hidden status, without schema migration or physical object-storage deletion.
- `OUR_GOSINGA_SOURCE_NOTES.md`, `ASSET_SOURCES.md`: source/date/cross-check records, map interpretation, and photo attribution/reuse caveats.

## Design system

- **Design Movement:** user-supplied “Our Gosinga” emblem-কে visual reference ধরে স্থানীয় heritage editorial site।
- **Core Principles:** স্থানীয় পরিচয়, সবার জন্য readable তথ্য, source-first factual honesty, দ্রুত mobile-first use।
- **Color Philosophy:** “Gosinga River Dusk”—শীতলক্ষ্যার গভীর নীল-সবুজ ও নদীর আলোকে deep petrol/navy, river-cyan এবং সংযত copper/amber accent-এ রূপ দেওয়া; pale porcelain background ও dark ink-এ দীর্ঘ বাংলা লেখা readable রাখা।
- **Layout Paradigm:** বড় hero-র পেছনে atmospheric landscape video; পাশে/সামনে পরিষ্কার headline ও user photo card; তারপর editorial photo directory, grouped records ও stacked civic sections।
- **Signature Elements:** supplied emblem, ছবিতে source/location strips, copper-accent verification/status badges এবং location-aware school/provider cards।
- **Interaction Philosophy:** keyboard-accessible links, village buttons and school detail dialogs, large telephone links, source-to-original navigation, photo removal confirmation এবং school-specific upload CTA।
- **Animation:** muted video loop; live reduced-motion preference-এ video ও carousel autoplay দুটোই বন্ধ; poster fallback, soft fade, gentle card lift/CTA sheen; carousel hover-এ pause এবং explicit pause/play; no rapid motion that obscures text.
- **Typography System:** Hind Siliguri body/UI এবং Noto Serif Bengali headings—বাংলায় readability এবং editorial tone।
- **Brand Essence:** “Our Gosinga — নিজের ইউনিয়নের তথ্য, ছবি ও পরিচিত মুখ, উৎসসহ”; বৈশিষ্ট্য: স্থানীয়, নির্ভরযোগ্য, অংশগ্রহণমূলক।
- **Brand Voice:** সংক্ষিপ্ত, সম্মানজনক ও স্থানীয়; “Our Gosinga—আমাদের এলাকার কথা” / “নাম ও নম্বর সরকারি তালিকা থেকে; বর্তমানতা যাচাই করুন।”
- **Wordmark & Logo:** user-provided emblem-এর সঙ্গে English “Our Gosinga”; Bangla “গোসিংগা ইউনিয়ন · শ্রীপুর · গাজীপুর” সহায়ক subtitle।
- **Signature Brand Color:** “River Teal” `#087C87`, deep navy `#0B3347` ও restrained copper `#D69B4F`-এর নিজস্ব brand triad.

## Material constraints and delivery

- Site verification date: ২০ অক্টোবর ২০২৬; user-এর নতুন map/সরকারি ভূমি ও bank sources যাচাই: ২১ অক্টোবর ২০২৬। সরকারি portal-এর publication/update date আলাদা করে দেখানো হবে। Phone numbers official sources থেকে; current reachability call দিয়ে যাচাই করা হয়নি।
- School address যেখানে official sources দেয় সেখানেই; discrepancy note visible। ৩০টি distinct school পাওয়া গেছে; raw roster row-কে distinct প্রতিষ্ঠানের সমার্থক বলা হবে না।
- ৩০টি official school profile-এর batch audit-এ “ফটোগ্যালারি: (নেই)” এবং কোনো school phone/website পাওয়া যায়নি। Genuine school-campus photos এখনও missing; per-school upload path দেওয়া, substitute imagery নয়।
- DGHS/Union health records-এর exact street/holding addresses নেই। Community clinic-এর গ্রাম/union-level address এবং “পূর্ণ ঠিকানা সরকারি রেকর্ডে প্রকাশিত নয়” থাকবে। Union clinic page EPI service উল্লেখ করে, কিন্তু পৃথক session-center/location/day/time list দেয় না।
- Official Gosinga land-office page ২২ জুন ২০১৪-তে updated; সেখানে service list, officeholder, phone, email ও specific street/village address নেই। National land-service links generic government platforms; Sreepur parcel-map availability national map portal-এ নিশ্চিত নয়।
- Bank research presently verifies two source-backed outlets: Agrani Gosinga branch and Bank Asia Gosinga agent outlet. Local NGO office-address inventory remains unconfirmed; do not claim that no NGO exists. Agrani’s exact cadastral pin and Bank Asia outlet phone are unavailable.
- Official union map page ৩ মার্চ ২০১৪-তে updated; attached image has no scale/legend/ward boundary and is not legal cadastral evidence. User’s ZIP contains logo/video but no separate user map. A map supplied later should replace this temporary official map after identity/source check.
- Tourist-page photo reuse permission is not clear; source link/credit and rights caveat stay visible. Flood Dighi and Leisure Marina have no verified recent venue photo in checked sources.
- Photo removal changes application status to rejected/hidden so the picture disappears from the site; object bytes remain in managed storage because the runtime storage API has no deletion endpoint.
- The Service page displays all five source-backed health facilities and the sole source-described EPI service location (Khojekhani Health & Family Welfare Centre), but clearly states that no separate village session-centre/day/time list was published. It then presents Union Parishad services followed by the local land-office profile and generic national land-service portals/hotline.
- The `/providers` directory links Agrani Bank PLC's Gosinga branch and Bank Asia's Gosinga agent outlet with dates/sources and available contact. NGO-office coverage remains incomplete rather than a claim of absence.
- The official 2014 union map image is integrated on the Places page and credited. The image in the earlier user attachment was a website screenshot, and the supplied ZIP had no separate user map; replace the official reference only after a standalone user-owned map is supplied.
- Current project config has `auto_publish=true`; pushing canonical `main` automatically submits publication. Do not call Publish separately; provide a public URL only after Dashboard confirms completion.
