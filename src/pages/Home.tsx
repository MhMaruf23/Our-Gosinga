import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";

const sections = [
  ["পরিচিতি", "ইতিহাস, অবস্থান ও পরিসংখ্যান", "/about"],
  ["গ্রাম ও ওয়ার্ড", "ইউনিয়নের গ্রামসমূহ", "/villages"],
  ["ইউপি সদস্যবৃন্দ", "চেয়ারম্যান ও সদস্যদের তালিকা", "/representatives"],
  ["প্রতিষ্ঠান", "শিক্ষা ও স্বাস্থ্য প্রতিষ্ঠান", "/institutions"],
  ["নাগরিক সেবা", "সেবা নির্দেশনা ও জরুরি নম্বর", "/services"],
  ["দর্শনীয় স্থান", "নদী, দীঘি ও বিনোদন কেন্দ্র", "/places"],
];

export default function Home() {
  return <SiteLayout><main>
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline poster="/images/our-gosinga-video-poster.jpg"><source src="/media/our-gosinga-background-720p.mp4" type="video/mp4"/></video>
      <div className="hero-overlay"/>
      <div className="wrap hero-content"><p className="eyebrow">শ্রীপুর, গাজীপুর</p><h1>গোসিংগা ইউনিয়ন</h1><p className="lead">নিজের এলাকার তথ্য, সবার অংশগ্রহণে। প্রকাশিত তথ্যের উৎস ও যাচাইয়ের অবস্থা পাশে উল্লেখ করা হয়।</p><div className="hero-actions"><Link href="/about" className="button">ইউনিয়ন পরিচিতি</Link><Link href="/upload" className="button button-ghost">এলাকার ছবি দিন <ArrowUpRight size={15}/></Link></div></div>
    </section>
    <section className="wrap card-grid">{sections.map(([title, text, href]) => <Link key={href} href={href} className="info-card"><h2>{title}</h2><p>{text}</p><ArrowUpRight size={18}/></Link>)}</section>
    <section className="wrap map-block"><h2>ইউনিয়নের মানচিত্র</h2><img src="/images/gosinga-union-map.jpg" alt="গোসিংগা ইউনিয়নের মানচিত্র" loading="lazy"/></section>
  </main></SiteLayout>;
}
