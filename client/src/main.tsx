import { createRoot } from "react-dom/client";

// Temporary entry point: the full app (pages, data and styles) isn't in the
// repository yet. Replace this file with the original client/src/main.tsx.
function Placeholder() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        fontFamily: "system-ui, 'Noto Sans Bengali', sans-serif",
        background: "#f6f8f4",
        color: "#1f2d1f",
        textAlign: "center",
      }}
    >
      <div>
        <img src="/images/our-gosinga-logo-256.png" alt="Our Gosinga" width={128} height={128} />
        <h1 style={{ margin: "1rem 0 0.5rem" }}>গোসিংগা ইউনিয়ন</h1>
        <p>ওয়েবসাইটটি হালনাগাদ করা হচ্ছে। শীঘ্রই আবার দেখুন।</p>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<Placeholder />);
