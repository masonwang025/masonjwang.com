import { motion } from "framer-motion";
import FadeInText from "../global/util/FadeInText";
import ImageRow from "./ImageRow";

function Welcome() {
  const babyImgs = [
    "baby.jpg",
    "grandma.jpg",
    "dance.jpg",
    "caprisun.jpg",
  ]

  return <div className="wrapper py-24">
    <div className="text-center flex flex-col">
      <ImageRow images={babyImgs.map(img => `baby-photos/${img}`)} />
    </div>
  </div>
}

export default Welcome;