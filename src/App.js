import About from "./components/About";
import CryptoLabel from "./components/CryptoLabel";
import ExpandCollapse from "./components/ExpandCollapse";
import FAQ from "./components/FAQ";
import Featurs from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import TrioWallet from "./components/TrioWallet";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div className="App">
     <Header />
     <Main />
     <Featurs />  
     <About />
     <Section />
     <CryptoLabel />
     <WhyChooseUs />
     <ExpandCollapse />
     <TrioWallet /> 
     <FAQ />
     <Footer />
    </div>
  );
}

export default App;
