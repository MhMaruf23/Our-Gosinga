import { Link } from "wouter";
import { PageShell } from "./PageShell";

export default function NotFound() {
  return <PageShell eyebrow="৪০৪" title="পাতাটি পাওয়া যায়নি" intro="আপনি যে পাতাটি খুঁজছেন সেটি সরানো হয়েছে বা নেই।"><Link href="/" className="button">প্রথম পাতায় ফিরুন</Link></PageShell>;
}
