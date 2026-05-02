import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import portfolio from "./data/portfolio.json";
import Home from "./pages/Home";

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071013] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.16),transparent_32%),linear-gradient(135deg,#071013_0%,#0c171b_50%,#121516_100%)]" />
      <Navbar name={portfolio.hero.name} />
      <Home portfolio={portfolio} />
      <Footer name={portfolio.hero.name} tagline={portfolio.contact.summary} />
    </main>
  );
}
