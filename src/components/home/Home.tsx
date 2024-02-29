import Header from "../global/header/Header";
import Hero from "./sections/Hero";

function Home() {
  return <main>
    <Header />
    <Hero />
    <div className="h-20">here is the next section</div>
  </main>
}

export default Home;