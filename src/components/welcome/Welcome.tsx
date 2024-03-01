import { motion } from "framer-motion";
import FadeInText from "../global/util/FadeInText";

function Welcome() {
  return <div className="wrapper pb-24">
    <div className="text-center space-y-2 flex flex-col">
      <FadeInText text="I want to figure out what that means for me." delay={0.5} className="header text-title" />
      <FadeInText text={<><span className="font-semibold">Welcome to my website.</span> I want to share <span className="font-semibold">me</span> — <i>my work, my thoughts, my projects</i> — with you.</>} delay={1.5} className="lg:text-xl body" />
    </div>
  </div>
}

export default Welcome;