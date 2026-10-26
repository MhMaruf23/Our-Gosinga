import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Building2, Camera, ExternalLink, MapPin, Phone, Search, ShieldCheck, X } from "lucide-react";
import { Link } from "wouter";
import { schools } from "@/lib/unionData";
import type { EducationInstitution } from "@/lib/educationInstitutions";
import { trpc } from "@/lib/trpc";
import { schoolPortalProfiles } from "@/lib/schoolPortalProfiles";

const educationCategories = ["সব", "প্রাথমিক", "মাধ্যমিক", "মাদ্রাসা", "কিন্ডারগার্টেন/একাডেমি", "কারিগরি"] as const;

function educationCategory(type: string) {
  if (type.includes("কিন্ডারগার্টেন") || type.includes("একাডেমি")) return "কিন্ডারগার্টেন/একাডেমি";
  if (type.includes("প্রাথমিক")) return "প্রাথমিক";
  if (type.includes("মাদ্রাসা")) return "মাদ্রাসা";
  if (type.includes("কারিগরি")) return "কারিগরি";
  return "মাধ্যমিক";
}

function schoolUploadHref(school: EducationInstitution) {
  const placeName = encodeURIComponent(school.name);
  const location = encodeURIComponent(`${school.village}, গোসিংগা ইউনিয়ন, শ্রীপুর, গাজীপুর`);
  return `/upload?placeName=${placeName}&location=${location}`;
}

function normalized(value: string) {
  return value.trim().normalize("NFC").toLocaleLowerCase();
}

function sourceName(url: string) {
  if (url.includes("ipemis.dpe.gov.bd")) return "DPE প্রাথমিক শিক্ষা রেজিস্ট্রি";
  if (url.includes("dhakaeducationboard.gov.bd")) return "ঢাকা শিক্ষা বোর্ড";
  if (url.includes("bmeb.ebmeb.gov.bd") || url.includes("efiling.ebmeb.gov.bd")) return "বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ড";
  return "সহায়ক সরকারি রেকর্ড";
}

export default function EducationDirectory() {
  const [activeEducationCategory, setActiveEducationCategory] = useState<string>("সব");
  const [educationSearch, setEducationSearch] = useState("");
  const [selectedSchool, setSelectedSchool] = useState<EducationInstitution | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const galleryQuery = trpc.photos.gallery.useQuery(undefined, { retry: false });
  const communityPhotos = galleryQuery.data ?? [];
  const searchText = educationSearch.trim().toLocaleLowerCase();

  const matchingCommunityPhoto = (school: EducationInstitution) => communityPhotos.find(photo => normalized(photo.placeName) === normalized(school.name));
  const visibleSchools = schools.filter(school => {
    const categoryMatches = activeEducationCategory === "সব" || educationCategory(school.type) === activeEducationCategory;
    const searchable = [school.name, school.latinName, school.type, school.village, school.address, school.identifier, school.addressNote, school.note].join(" ").toLocaleLowerCase();
    return categoryMatches && (!searchText || searchable.includes(searchText));
  });
  const educationCount = (category: string) => category === "সব" ? schools.length : schools.filter(school => educationCategory(school.type) === category).length;
  const selectedCommunityPhoto = selectedSchool ? matchingCommunityPhoto(selectedSchool) : undefined;
  const selectedPortalProfile = selectedSchool ? schoolPortalProfiles[selectedSchool.name] : undefined;

  useEffect(() => {
    if (!selectedSchool) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedSchool(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    closeButtonRef.current?.focus();
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedSchool]);

  return <div className="directory-section education-directory">
    <div className="directory-title"><span className="directory-icon"><Building2 size={20} /></span><div><h2>শিক্ষাপ্রতিষ্ঠান ও মাদ্রাসা</h2><p>৩০টি পৃথক রেকর্ড · প্রাথমিক ১৭ · মাধ্যমিক ৫ · মাদ্রাসা ৫ · কিন্ডারগার্টেন/একাডেমি ২ · কারিগরি ১।</p></div><span className="education-count-pill">{schools.length}টি</span></div>
    <div className="education-audit-note" role="note"><ShieldCheck size={18} /><p>সরকারি ইউনিয়ন পোর্টালের ৩০টি পৃথক প্রতিষ্ঠানের প্রোফাইল দেখা হয়েছে—সবগুলোতেই “ফটোগ্যালারি: (নেই)”; কোনো প্রতিষ্ঠানের নিজস্ব ফোন বা ওয়েবসাইটও সেখানে প্রকাশিত নয়। তাই অন্য স্কুলের, স্টক বা অনুমাননির্ভর ছবি/যোগাযোগ ব্যবহার করা হয়নি। অনুমতিসহ নির্দিষ্ট স্কুলের ছবি জমা হলে Admin অনুমোদনের পর প্রকাশিত হবে; অবদানকারীর দেওয়া location স্বাধীনভাবে যাচাই করা নয়।</p></div>
    <div className="education-tools"><label className="education-search"><Search size={17} /><input type="search" value={educationSearch} onChange={event => setEducationSearch(event.target.value)} placeholder="নাম, গ্রাম, ধরন বা EIIN দিয়ে খুঁজুন" aria-label="শিক্ষাপ্রতিষ্ঠানের নাম, গ্রাম, ধরন বা পরিচিতি নম্বর দিয়ে খুঁজুন" /></label><div className="education-filter-list" role="group" aria-label="শিক্ষাপ্রতিষ্ঠানের ধরন বেছে নিন">{educationCategories.map(category => <button type="button" className={`education-filter${activeEducationCategory === category ? " is-active" : ""}`} aria-pressed={activeEducationCategory === category} onClick={() => setActiveEducationCategory(category)} key={category}><span>{category === "সব" ? "সব প্রতিষ্ঠান" : category}</span><strong>{educationCount(category)}</strong></button>)}</div><span className="education-count">দেখানো হচ্ছে {visibleSchools.length} / {schools.length}টি রেকর্ড</span></div>
    <div className="institution-grid">{visibleSchools.map(school => {
      const index = schools.findIndex(entry => entry.name === school.name);
      const contribution = matchingCommunityPhoto(school);
      const imageUrl = school.imageUrl || contribution?.placeImagePath;
      const isContribution = !school.imageUrl && Boolean(contribution);
      return <article className="institution-card education-card" key={school.name}>
        <div className="school-card-heading">
          <div className={`school-thumb${imageUrl ? " has-image" : " is-empty"}`}>
            {imageUrl ? <img src={imageUrl} alt={`${school.name}—${isContribution ? "অবদানকারীর ছবি" : "ক্যাম্পাসের ছবি"}`} loading="lazy" decoding="async" /> : <><Building2 size={24} /><span>ছবি পাওয়া যায়নি</span></>}
          </div>
          <div className="school-heading-copy"><span className="school-category">{school.type}</span><h3>{school.name}</h3><span className="institution-num">{String(index + 1).padStart(2, "0")}</span>{imageUrl && <small className="school-photo-caption">{isContribution ? "অবদানকারীর ছবি · যাচাই হয়নি" : "উৎসসহ প্রতিষ্ঠান-ছবি"}</small>}</div>
        </div>
        <p className="school-address"><MapPin size={13} /><span>{school.address}</span></p>
        <div className="school-meta"><span>{school.village} গ্রাম</span><span className="school-id">{school.identifier}</span></div>
        {school.addressNote && <small className="school-note">{school.addressNote}</small>}{school.note && <small className="school-note">{school.note}</small>}
        <div className="school-card-actions"><button type="button" className="school-details-button" onClick={() => setSelectedSchool(school)}>বিস্তারিত দেখুন <ArrowRight size={14} /></button><Link href={schoolUploadHref(school)} className="school-upload-button" aria-label={`${school.name} এর ছবি আপলোড করুন`}><Camera size={14} /> ছবি দিন</Link></div>
        <a className="school-source" href={school.sourceUrl} target="_blank" rel="noreferrer">মূল রেকর্ড দেখুন <ExternalLink size={12} /></a>
      </article>;
    })}</div>
    {visibleSchools.length === 0 && <div className="education-empty">এই নাম বা শ্রেণির সঙ্গে মেলে এমন কোনো রেকর্ড পাওয়া যায়নি।</div>}

    {selectedSchool && <div className="school-modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setSelectedSchool(null); }}>
      <section className="school-modal" role="dialog" aria-modal="true" aria-labelledby="school-profile-title">
        <div className="school-modal-top"><span className="section-label">প্রতিষ্ঠানের বিস্তারিত</span><button ref={closeButtonRef} type="button" className="school-modal-close" aria-label="বিস্তারিত বন্ধ করুন" onClick={() => setSelectedSchool(null)}><X size={19} /></button></div>
        <div className="school-modal-title-row"><div className="school-modal-mark">{selectedCommunityPhoto ? <img src={selectedCommunityPhoto.placeImagePath} alt={`${selectedSchool.name} এর অবদানকারীর ছবি`} /> : selectedSchool.imageUrl ? <img src={selectedSchool.imageUrl} alt={`${selectedSchool.name} এর ক্যাম্পাস`} /> : <Building2 size={26} />}</div><div><span className="school-category">{selectedSchool.type}</span><h2 id="school-profile-title">{selectedSchool.name}</h2><span className="school-modal-village"><MapPin size={14} />{selectedSchool.village} গ্রাম</span></div></div>
        <div className="school-profile-grid"><div><span>ঠিকানা</span><strong>{selectedSchool.address}</strong></div><div><span>পরিচিতি নম্বর</span><strong>{selectedSchool.identifier || "সরকারি উৎসে প্রকাশিত নয়"}</strong></div><div><span>ফোন নম্বর</span>{selectedSchool.phone ? <a href={`tel:${selectedSchool.phone}`}><Phone size={14} />{selectedSchool.phone}</a> : <strong className="missing-detail">সরকারি প্রোফাইলে প্রকাশিত নয়</strong>}</div><div><span>ওয়েবসাইট</span>{selectedSchool.websiteUrl ? <a href={selectedSchool.websiteUrl} target="_blank" rel="noreferrer">ওয়েবসাইট খুলুন <ArrowUpRight size={14} /></a> : <strong className="missing-detail">সরকারি প্রোফাইলে প্রকাশিত নয়</strong>}</div></div>
        <div className="school-modal-note"><ShieldCheck size={17} /><p>যাচাই: {selectedSchool.verification}. সরকারি প্রোফাইলে স্কুলের ছবির গ্যালারি, ফোন বা ওয়েবসাইট পাওয়া যায়নি; তাই কোনো তথ্য অনুমান করে পূরণ করা হয়নি.{selectedCommunityPhoto ? " এই ছবি একজন স্থানীয় অবদানকারী দিয়েছেন; স্থান ও ছবির সত্যতা স্বাধীনভাবে যাচাই করা হয়নি।" : ""}</p></div>
        {selectedPortalProfile?.details && <section className="school-portal-profile"><h3><Building2 size={16} /> সরকারি পোর্টালে প্রকাশিত সংক্ষিপ্ত বিবরণ</h3><p>{selectedPortalProfile.details}{/[।.!?…]$/.test(selectedPortalProfile.details) ? "" : " …"}</p><small>{selectedPortalProfile.updatedAt ? `পোর্টালে সর্বশেষ হালনাগাদ: ${selectedPortalProfile.updatedAt}।` : "পোর্টালের হালনাগাদের তারিখ পাওয়া যায়নি।"} এই বিবরণ পুরোনো হতে পারে; বর্তমান অবস্থা পুনরায় যাচাই করা হয়নি। পূর্ণ রেকর্ডের লিংক নিচে রয়েছে।</small></section>}
        {selectedSchool.addressNote && <p className="school-modal-extra">{selectedSchool.addressNote}</p>}{selectedSchool.note && <p className="school-modal-extra">{selectedSchool.note}</p>}
        <div className="school-modal-links"><a href={selectedSchool.sourceUrl} target="_blank" rel="noreferrer">সরকারি স্কুল প্রোফাইল <ExternalLink size={14} /></a>{selectedPortalProfile?.sourceUrl && selectedPortalProfile.sourceUrl !== selectedSchool.sourceUrl && <a href={selectedPortalProfile.sourceUrl} target="_blank" rel="noreferrer">অতিরিক্ত সরকারি বিবরণের উৎস <ExternalLink size={14} /></a>}{selectedSchool.secondarySources.map((url, index) => <a key={url} href={url} target="_blank" rel="noreferrer">{sourceName(url)}{index > 0 ? " · সহায়ক উৎস" : ""} <ExternalLink size={14} /></a>)}</div>
        <Link href={schoolUploadHref(selectedSchool)} className="button button-primary school-modal-upload"><Camera size={17} /> এই স্কুলের ছবি দিন <ArrowUpRight size={15} /></Link>
      </section>
    </div>}
  </div>;
}
