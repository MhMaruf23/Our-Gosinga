import { PageShell, OFFICIAL_PORTAL } from "./PageShell";

// Published roster from the official union portal (snapshot: 20 Oct 2026).
// Codes 123/456/789 are shown verbatim; their seat meaning is not verified.
const representatives = [
  ["জনাব মোঃ ছাইদুর রহমান", "চেয়ারম্যান", "০১৭৩০১৯১৯১১"],
  ["মাহাবুবা আলম লাভলী", "সদস্য (code 123)", "০১৭২০২০৭৯৭৭"],
  ["খাদিজা আক্তার", "সদস্য (code 456)", "০১৭৬২৩৮২৮৩৯"],
  ["রেহেনা আক্তার", "সদস্য (code 789)", "০১৭১৬৮৯৪১৭৬"],
  ["সোমন মিয়া", "সদস্য, ওয়ার্ড ১", "০১৭১৭৬৪৩৯৫৯"],
  ["ফারুক আহম্মেদ", "সদস্য, ওয়ার্ড ২", "০১৭৩৯৫১২৪৩২"],
  ["মোঃ তাজ উদ্দিন", "সদস্য, ওয়ার্ড ৩", "০১৭১৮১৯৫৮১২"],
  ["মোঃ আসাদুজ্জামান বাবু", "সদস্য, ওয়ার্ড ৪", "০১৭১৬৬৪৪০৯৯"],
  ["মোঃ আসাদুজ্জামান (সবুজ)", "সদস্য, ওয়ার্ড ৫", "০১৭৪৮২৯৭৯৮৩"],
  ["মোঃ খোরশীদ আলম", "সদস্য, ওয়ার্ড ৬", "০১৯১৬০৬১৩১৩"],
  ["মোঃ রফিকুল ইসলাম", "সদস্য, ওয়ার্ড ৭", "০১৭৫৪২৩৮৮৪৫"],
  ["মোঃ ইসমাইল হোসেন", "সদস্য, ওয়ার্ড ৮", "০১৬৮২৫৫৭৮৯৫"],
  ["মোঃ কবির হোসেন শেখ", "সদস্য, ওয়ার্ড ৯", "০১৭২০০৯৭৩১৯"],
];

export function AboutPage() {
  return <PageShell eyebrow="পরিচিতি" title="গোসিংগা ইউনিয়ন" intro="গাজীপুর জেলার শ্রীপুর উপজেলার একটি ইউনিয়ন। ইতিহাস, অবস্থান ও সরকারি উৎসসহ পরিসংখ্যান।">
    <figure className="map-block"><img src="/images/gosinga-up-building.jpg" alt="গোসিংগা ইউনিয়ন পরিষদ ভবন" loading="lazy"/></figure>
  </PageShell>;
}

export function VillagesPage() {
  return <PageShell eyebrow="গ্রাম ও ওয়ার্ড" title="গ্রাম ও ওয়ার্ড" intro="গোসিংগা ইউনিয়নের গ্রামসমূহ এবং ওয়ার্ড-সীমানার যাচাই-অবস্থা।"/>;
}

export function RepresentativesPage() {
  return <PageShell eyebrow="ইউপি সদস্যবৃন্দ" title="ইউনিয়ন পরিষদের জনপ্রতিনিধি" intro="সরকারি রোস্টারের ১৩টি রেকর্ড ও প্রকাশিত ফোন নম্বর। ফোন নম্বর বর্তমানে সচল কি না স্বাধীনভাবে যাচাই করা হয়নি।">
    <div className="table-wrap"><table><thead><tr><th>নাম</th><th>পদ</th><th>ফোন</th></tr></thead><tbody>
      {representatives.map(([name, role, phone]) => <tr key={name}><td>{name}</td><td>{role}</td><td>{phone}</td></tr>)}
    </tbody></table></div>
    <p className="source">উৎস: <a href={OFFICIAL_PORTAL} target="_blank" rel="noreferrer">গোসিংগা ইউনিয়ন সরকারি পোর্টাল</a></p>
  </PageShell>;
}

export function InstitutionsPage() {
  return <PageShell eyebrow="প্রতিষ্ঠান" title="শিক্ষা ও স্বাস্থ্য প্রতিষ্ঠান" intro="গোসিংগা ইউনিয়নের শিক্ষা-প্রতিষ্ঠান ও স্বাস্থ্যকেন্দ্রের তথ্য ও উৎস।"/>;
}

export function ServicesPage() {
  return <PageShell eyebrow="নাগরিক সেবা" title="নাগরিক সেবা" intro="ইউনিয়ন পরিষদের সেবা নির্দেশনা। জাতীয় জরুরি সেবা: ৯৯৯।"/>;
}

export function PlacesPage() {
  return <PageShell eyebrow="দর্শনীয় স্থান" title="দর্শনীয় স্থান" intro="শীতলক্ষ্যা নদী, ডায়মন্ড রিসোর্ট, কর্নপুরের দীঘি এবং Leisure Marina Sports Village।"/>;
}

export function GalleryPage() {
  return <PageShell eyebrow="গ্যালারি" title="ছবির গ্যালারি" intro="এলাকাবাসীর পাঠানো ছবি Admin অনুমোদনের পর এখানে প্রকাশিত হয়।"/>;
}

export function ContactPage() {
  return <PageShell eyebrow="যোগাযোগ" title="যোগাযোগ ও সংশোধন" intro="গোসিংগা ইউনিয়ন পরিষদের প্রকাশিত যোগাযোগ সরকারি পোর্টালে পাওয়া যাবে।"/>;
}
