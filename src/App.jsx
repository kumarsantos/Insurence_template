import Hero from "./components/Hero";
import "./App.css";
import PlanSection from "./components/PlanSection";
import ShopSection from "./components/ShopSection";
import TrustSection from "./components/TrustSection";
import Footer from "./components/Footer";




function App() {
  return (
    <div className="container">
      <div className="content_wrapper_container">
        <Hero />
        <PlanSection />
        <ShopSection />
        <TrustSection />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
