# Our Gosinga — asset sources and use notes

## User-provided identity and video

- `client/public/images/our-gosinga-logo.png` is the 640×640 logo supplied in `2365.zip`. It is shown in the site header/footer, favicon, Open Graph/Twitter share preview and project-level Manus branding; the project branding uses the same supplied image via a public CDN URL.
- The original MP4 extracted from the user ZIP was preserved separately. The website uses a silent, optimized 1280×720 H.264/30 fps copy at `/manus-storage/our-gosinga-background-720p_2041576c.mp4` (about 20.3 MB, approximately 80 seconds) with poster `client/public/images/our-gosinga-video-poster.jpg`. It is muted, inline and looped; users with `prefers-reduced-motion: reduce` see the poster instead of autoplay.

## Real local-place images

The following exact place images come from the official Gosinga Union tourist directory. Source credit is visible on the Places page and the homepage place strip links to the tourist directory or original video. The directory does not state a separate republication licence; credit is not permission. Obtain permission from the Union/rights holder before public production, or replace with owned/permission-cleared photos.

- Union Parishad building fallback: `client/public/images/gosinga-up-building.jpg`, sourced from the [official Union photo gallery](https://gosingaup.gazipur.gov.bd/pages/photo-galleries/%E0%A6%97%E0%A7%8B%E0%A6%B8%E0%A6%BF%E0%A6%82%E0%A6%97%E0%A6%BE-%E0%A6%87%E0%A6%89%E0%A6%A8%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%A8-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%B7%E0%A6%A6-e3fcf3-69956573c4774958d7c8cb37). Used only if there are no community uploads; the homepage displays the source and notes that reuse permission was not confirmed.

- Shitalakkhya River: [official source image](https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-gosingaup-gazipur/2024/12/986c9ab193fe4c8694c5352cc5449c02.jpg)
- Diamond Resort and Lake, Matiagora: [official source image](https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-gosingaup-gazipur/2024/12/f9a2ff2b7ee149e8a43facf6451fae84.jpg)
- Karnapur Boro Dighi: image preview is the [2022 Karnapur Dighi drone video's YouTube thumbnail](https://www.youtube.com/watch?v=4mAofbFURBc); the video identifies the place as Gosinga, Sreepur, Gazipur. Its reuse licence was not confirmed.
- Karnapur Flood Dighi: no distinct, reliable photo was found in the checked sources. The site deliberately does not relabel the Boro Dighi image as Flood Dighi; it invites a correctly identified visitor photo instead.

The Union tourist directory is [https://gosingaup.gazipur.gov.bd/pages/tourist-spot](https://gosingaup.gazipur.gov.bd/pages/tourist-spot). Last site update shown there: 18 August 2026; reviewed 20 October 2026.

## School photo gap and Leisure Marina media

- Batch review of all 30 individual school profile links on the official Union education directory found `ফটোগ্যালারি: (নেই)` and no school-campus image, school-level phone number or school-owned website link on those profiles. The website shows a clearly labelled no-photo placeholder and per-school upload link until exact, permission-cleared images are supplied; unrelated stock images are not substituted.
- Leisure Marina Sports Village has no verified recent venue photo in the checked source set. Its attraction card links to the [Marina Sports City brand video page](https://www.facebook.com/LMarinaSportsCity/videos/leisure-marina/1032729481689793/) and the [Daily Sun report](https://www.daily-sun.com/post/97584/%E2%80%9CLeisure-Marina-Sports-Village%E2%80%9D-Changing-the-land-retail-concept); it does not copy/republish a third-party venue image. Location is labelled Sreepur, Gazipur, while exact Gosinga Union boundary and public access remain unverified.


## Official Gosinga Union map reference

- `assets/gosinga-union-official-map.jpg` and `client/public/images/gosinga-union-map.jpg` are the 642×350 JPEG copied from the official Union map page; the public static copy keeps it renderable in both Preview and the production bundle. Source page: https://gosingaup.gazipur.gov.bd/pages/static-pages/6995691735ce18e1c0778953 ; source image: https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-gosingaup-gazipur/2024/12/9b0e5eff751c41b5a451d3a5577fa3d1.jpg . The official map-page update date is 3 March 2014. Visible labels include Gosinga, Karnapur Bazar, Bauni Edga/Matt Bazar and Hatkerchala Bazar. The image has no scale, legend, ward boundary or cadastral/legal status. The site uses it as a dated indicative reference, not an exact boundary or the user's own map. Reuse permission was not separately confirmed; retain the source credit and replace with a user-owned/permission-cleared map if supplied.
