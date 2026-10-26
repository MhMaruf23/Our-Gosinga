import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";

export const OFFICIAL_PORTAL = "https://gosingaup.gazipur.gov.bd/";

export function PageShell({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: ReactNode }) {
  return <SiteLayout><main className="page">
    <section className="page-hero"><div className="wrap"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{intro}</p></div></section>
    <section className="wrap page-body">{children ?? <RestoringNotice/>}</section>
  </main></SiteLayout>;
}

export function RestoringNotice() {
  return <div className="notice"><strong>এই পাতার বিস্তারিত তথ্য হালনাগাদ করা হচ্ছে।</strong><p>ততক্ষণ সরকারি ইউনিয়ন পোর্টালে তথ্য দেখুন।</p><a className="button" href={OFFICIAL_PORTAL} target="_blank" rel="noreferrer">সরকারি ইউনিয়ন পোর্টাল <ArrowUpRight size={15}/></a></div>;
}
