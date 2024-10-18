import Hero from "../../components/Hero";
import PromoSection from "../../components/PromoSection";
import Quotes from "../../components/Quotes";
import cards from "../../assets/cards.json";
import quotes from "../../assets/quotes.json";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <PromoSection cards={cards} />
        <Quotes quotes={quotes} />
      </main>
    </>
  );
};

export default Home;
