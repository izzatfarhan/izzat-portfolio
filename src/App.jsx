import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import portfolio from "./data/portfolio.json";
import Home from "./pages/Home";

export default function App() {
  return (
    <main className="blueprint-grid min-h-screen overflow-hidden text-[var(--color-ink)]">
      <Navbar name={portfolio.hero.name} />
      <Home portfolio={portfolio} />
      <Footer name={portfolio.hero.name} />
    </main>
  );
}
