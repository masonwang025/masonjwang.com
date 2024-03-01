"use client";
import { useState } from "react";
import Header from "../global/header/Header";
import Hero from "./sections/hero/Hero";

function Home() {
  const [heroDone, setHeroDone] = useState(false); // after hero is done, scrolling functionality is normal

  return <main>
    <Header />
    <Hero heroDone={heroDone} setHeroDone={setHeroDone} />
    {heroDone && <div>
      <div className="wrapper py-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem quisquam corrupti veritatis ea eos atque obcaecati porro ratione, praesentium aliquam error sit, alias sapiente tempore inventore nostrum possimus maiores. Laboriosam nostrum commodi est veniam possimus at dicta blanditiis quam? Ex sequi aliquid id deserunt perspiciatis mollitia ipsa ratione nisi, iusto at, eaque omnis corrupti velit sint optio necessitatibus tempore quia, obcaecati harum non aperiam autem? Consectetur iusto eveniet veritatis minus voluptatem, commodi, blanditiis temporibus rerum error eos illum? Architecto laudantium obcaecati quidem nostrum blanditiis suscipit ipsum explicabo vitae, quae nemo quis culpa dignissimos mollitia voluptatum, inventore fuga odio modi? Molestias nisi harum, amet accusamus quis eligendi repudiandae? Obcaecati repellat vitae et nesciunt vel aliquid est sunt nihil debitis quos dignissimos quod expedita, provident odio doloremque maxime molestiae incidunt! Saepe nam explicabo tempora eaque ipsum dolorem adipisci eveniet, culpa dolore nihil cumque neque laborum doloremque quam similique pariatur, recusandae expedita! At beatae porro aspernatur similique dolorem ea obcaecati quisquam, cupiditate ipsa delectus reprehenderit eos veniam qui blanditiis assumenda praesentium, aliquid mollitia magnam nostrum voluptate quos ut. Nisi aperiam error, sed nulla expedita cupiditate odio labore rerum quasi assumenda quibusdam sunt placeat quo est magni quidem, distinctio porro! Rem, ex. Et.</div>
    </div>}
  </main>
}

export default Home;