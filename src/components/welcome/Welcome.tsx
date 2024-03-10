import FadeInText from "../global/util/FadeInText";
import ImageRow from "./ImageRow";

function Welcome() {
  const babyImgs = [
    "baby.jpg",
    "grandma.jpg",
    "dance.jpg",
    "caprisun.jpg",
  ]
  const currentImgs = [
    "hoop.jpg",
    "ramen.jpg",
    "cap.jpg",
    "salt.jpg",
  ]

  return <div className="wrapper py-24">
    <div className="text-center text-title mono flex flex-col">
      <ImageRow images={babyImgs.map(img => `baby/${img}`)} />
      <div className="py-24 flex flex-col space-y-2 max-w-2xl mx-auto">
        <FadeInText>Welcome to my website.</FadeInText>
        <FadeInText delay={0.1}>I want to share my work, my thoughts, my art – me – with you here.</FadeInText>
        <FadeInText delay={0.2}>I'm Mason Wang. I love building and creating things, especially out of code.
        </FadeInText>
        <FadeInText delay={0.3}>
          <ul className="italic py-8">
            <li>Incoming student @ Stanford</li>
            <li>Research @ <a href="https://oval.cs.stanford.edu/" target="_blank" className="underline">Stanford's Open Virtual Assistant Lab</a></li>
            <li>Ex-founder @ Hazel (backed by <a target="_blank" href="https://pear.vc/" className="underline">Pear VC</a> and others)</li>
          </ul>
        </FadeInText>
        <FadeInText className="uppercase" delay={0.4}>✲ ✲ ✲<br />This website is a work in progress. <br />✲ ✲ ✲</FadeInText>
      </div>
      <ImageRow images={currentImgs.map(img => `current/${img}`)} />
    </div>
  </div>
}

export default Welcome;