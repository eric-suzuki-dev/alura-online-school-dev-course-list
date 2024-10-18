import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import PromoSection from "../../components/PromoSection";
import Quotes from "../../components/Quotes";
import cards from "../../assets/cards.json";
import quotes from "../../assets/quotes.json";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PromoSection cards={cards} />
        <Quotes quotes={quotes} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
