import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, MapPin, Menu, X } from "lucide-react";

const links = [
  ["পরিচিতি", "/about"],
  ["গ্রাম ও ওয়ার্ড", "/villages"],
  ["ইউপি সদস্যবৃন্দ", "/representatives"],
  ["প্রতিষ্ঠান", "/institutions"],
  ["সেবাদানকারী প্রতিষ্ঠান", "/providers"],
  ["সেবা", "/services"],
  ["দর্শনীয় স্থান", "/places"],
  ["গ্যালারি", "/gallery"],
];
const pageMeta: Record<string, [string, string]> = {
  "/": ["Our Gosinga | গোসিংগা ইউনিয়ন", "Our Gosinga—গাজীপুরের শ্রীপুর উপজেলার গোসিংগা ইউনিয়নের তথ্য, প্রতিনিধি, প্রতিষ্ঠান, সেবা ও এলাকার ছবি।"],
  "/about": ["পরিচিতি | Our Gosinga", "গোসিংগা ইউনিয়নের ইতিহাস, অবস্থান ও সরকারি উৎসসহ পরিসংখ্যান। অনিশ্চিত তথ্য যাচাইাধীন হিসেবে চিহ্নিত।"],
  "/villages": ["গ্রাম ও ওয়ার্ড | Our Gosinga", "গোসিংগা ইউনিয়নের ১৯টি গ্রামের clickable তালিকা; সংশ্লিষ্ট শিক্ষা ও স্বাস্থ্যসেবা এবং ওয়ার্ড-সীমানার যাচাই-অবস্থা দেখুন।"],
  "/representatives": ["ইউপি সদস্যবৃন্দ | Our Gosinga", "সরকারি রোস্টারের ১৩টি রেকর্ড ও প্রকাশিত ফোন নম্বর; সরকারি code-গুলোর আসন/ওয়ার্ডের অর্থ স্বাধীনভাবে যাচাই করা হয়নি।"],
  "/institutions": ["শিক্ষা ও স্বাস্থ্য প্রতিষ্ঠান | Our Gosinga", "গোসিংগা ইউনিয়নের ৩০টি শিক্ষা-প্রতিষ্ঠান ও পাঁচটি স্বাস্থ্যকেন্দ্র; প্রতিষ্ঠানের তথ্য, উৎস এবং অনুপস্থিত ছবি/যোগাযোগ স্পষ্টভাবে দেখুন।"],
  "/services": ["নাগরিক সেবা | Our Gosinga", "গোসিংগা ইউনিয়নের সেবা নির্দেশনা এবং জাতীয় জরুরি নম্বর। অনিশ্চিত ফি বা সময় অনুমান করে দেখানো হয় না।"],
  "/providers": ["সেবাদানকারী প্রতিষ্ঠান | Our Gosinga", "গোসিংগা ইউনিয়নে উৎসে পাওয়া ব্যাংক ও এজেন্ট আউটলেট এবং যাচাই-সীমাসহ NGO তথ্য।"],
  "/places": ["দর্শনীয় স্থান ও ছবি | Our Gosinga", "শীতলক্ষ্যা নদী, ডায়মন্ড রিসোর্ট, কর্নপুরের দীঘি এবং Leisure Marina Sports Village—উৎস ও অনিশ্চয়তাসহ।"],
  "/gallery": ["ছবির গ্যালারি | Our Gosinga", "গোসিংগার ব্যবহারকারীর ছবি Admin অনুমোদনের পর প্রকাশিত হয়; স্থান ও বর্ণনা স্বাধীনভাবে যাচাই করা নয়।"],
  "/upload": ["এলাকার ছবি জমা দিন | Our Gosinga", "Admin review-এর জন্য ছবি, নাম, profile photo ও location জমা দিন; অনুমোদনের পর public হবে।"],
  "/contact": ["যোগাযোগ | Our Gosinga", "গোসিংগা ইউনিয়ন পরিষদের প্রকাশিত যোগাযোগ এবং ওয়েবসাইটের তথ্য সংশোধনের পথ।"],
  "/admin": ["ছবি অনুমোদন ও পরিচালনা | Our Gosinga", "নতুন ও অপেক্ষমাণ কমিউনিটি ছবি অনুমোদন, ফিচার, বাতিল বা ওয়েবসাইট থেকে সরানোর admin panel।"],
};

function updateMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let node = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!node) { node = document.createElement("meta"); node.setAttribute(attribute, key); document.head.appendChild(node); }
  node.content = content;
}

function BrandLogo() {
  return <img className="brand-logo" src="/images/our-gosinga-logo.png" alt="" aria-hidden="true" />;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [path] = useLocation();
  return <>
    <div className="topline"><div className="wrap topline-inner"><span><MapPin size={13} /> শ্রীপুর, গাজীপুর</span><span className="topline-right">স্থানীয় তথ্য • উৎসসহ • সবার জন্য</span></div></div>
    <header className="site-header"><div className="wrap header-main">
      <Link href="/" className="brand" aria-label="Our Gosinga home" onClick={() => setOpen(false)}><BrandLogo/><span className="brand-copy"><strong>Our Gosinga</strong><small>গোসিংগা ইউনিয়ন · শ্রীপুর, গাজীপুর</small></span></Link>
      <button className="menu-toggle" aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="প্রধান নেভিগেশন">{links.map(([label,href])=><Link key={href} href={href} className={path===href?"active":""} onClick={()=>setOpen(false)}>{label}</Link>)}<Link href="/upload" className="nav-upload" onClick={()=>setOpen(false)}>ছবি দিন <ArrowUpRight size={15}/></Link></nav>
    </div></header>
  </>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="wrap footer-grid">
    <div className="footer-brand"><Link href="/" className="brand" aria-label="Our Gosinga home"><BrandLogo/><span className="brand-copy"><strong>Our Gosinga</strong><small>গোসিংগা ইউনিয়ন · শ্রীপুর, গাজীপুর</small></span></Link><p>নিজের এলাকার তথ্য, সবার অংশগ্রহণে। প্রকাশিত তথ্যের উৎস ও যাচাইয়ের অবস্থা পাশে উল্লেখ করা হয়।</p></div>
    <div><h3>জানুন</h3><Link href="/about">ইউনিয়ন পরিচিতি</Link><Link href="/villages">গ্রাম ও ওয়ার্ড</Link><Link href="/institutions">প্রতিষ্ঠানসমূহ</Link></div>
    <div><h3>অংশ নিন</h3><Link href="/upload">এলাকার ছবি জমা দিন</Link><Link href="/contact">যোগাযোগ ও সংশোধন</Link><a href="https://gosingaup.gazipur.gov.bd/" target="_blank" rel="noreferrer">সরকারি ইউনিয়ন পোর্টাল <ArrowUpRight size={13}/></a></div>
  </div><div className="wrap footer-bottom"><span>গোসিংগা ইউনিয়ন • শ্রীপুর • গাজীপুর</span><Link href="/admin">সম্পাদকীয় প্রবেশ <span className="admin-dot"/></Link><span>© তথ্য-সহায়ক কমিউনিটি সাইট</span></div></footer>;
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [path] = useLocation();
  useEffect(() => {
    const [title, description] = pageMeta[path] ?? ["Our Gosinga | পাতা পাওয়া যায়নি", "গোসিংগা ইউনিয়নের জনতথ্য ওয়েবসাইট।"];
    document.title = title;
    updateMeta("meta[name=description]", "name", "description", description);
    updateMeta("meta[property=og:title]", "property", "og:title", title);
    updateMeta("meta[property=og:description]", "property", "og:description", description);
  }, [path]);
  return <div className="site-shell"><SiteHeader/>{children}<SiteFooter/></div>;
}
