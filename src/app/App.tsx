import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TravelPacks } from "./components/TravelPacks";
import { Community } from "./components/Community";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TravelPacks />
        <Community />
      </main>
      <Footer />
    </div>
  );
}