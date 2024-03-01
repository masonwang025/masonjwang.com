import ScrambleText from "@/components/global/util/ScrambleText";

function BornShineDie() {
  return (<div className="wrapper header">
    <div className="text-xl text-gray-400"><ScrambleText settings={{ speed: 0.6, tick: 9 }} delay={1.5} text="My best friend told me:" /></div>
    <div className="text-2xl flex flex-col space-y-12 flex flex-col justify-center">
      <div className="text-left"><ScrambleText settings={{ speed: 0.6, tick: 9 }} delay={3.5} text="We are born," /></div>
      <div className="text-center"><ScrambleText settings={{ speed: 0.6, tick: 9 }} delay={5} text="we have a chance to shine," /></div>
      <div className="text-right"><ScrambleText settings={{ speed: 0.6, tick: 9 }} delay={6.5} text="and then we die." /></div>
      <div className="text-center"><ScrambleText settings={{ speed: 0.6, tick: 9 }} delay={8} text="So it's about maximizing that shine." /></div>
    </div>
  </div>)
}

export default BornShineDie;