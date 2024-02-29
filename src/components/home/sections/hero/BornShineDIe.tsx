import ScrambleText from "@/components/global/util/ScrambleText";

function BornShineDie() {
  return (<div className="wrapper header text-2xl flex flex-col space-y-12 min-h-screen flex flex-col justify-center -mt-32">
    <div className="text-left"><ScrambleText text="We are born," /></div>
    <div className="text-center"><ScrambleText text="we have a chance to shine," /></div>
    <div className="text-right"><ScrambleText text="and then we die." /></div>
  </div>)
}

export default BornShineDie;