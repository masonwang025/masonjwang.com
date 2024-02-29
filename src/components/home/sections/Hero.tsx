function Hero() {
  return <div className="pt-28 pb-14 container mx-auto min-h-screen flex flex-col">
    <div>
      <div><p className="header text-xl text-gray-300 text-center">What is the meaning of life?</p></div>
      <div><p className="header text-xl text-gray-500 pt-4 pb-3">My best friend told me,</p></div>
    </div>
    <div className="mx-auto container max-w-xl">
      <div className="flex flex-1 grow flex-col space-y-4 pb-10">
        <div>
          <p className="header text-xl text-left">&ldquo;You are born,</p>
        </div>
        <div>
          <p className="header text-xl text-center"><span className="font-bold italic">you have a chance to shine</span>,</p>
        </div>
        <div>
          <p className="header text-xl text-right">and then you die.</p>
        </div>
      </div>
      <div>
        <div>
          <p className="header text-xl text-center">So it's about maximizing your shine.&rdquo;</p>
        </div>
      </div>
    </div>
  </div>
}

export default Hero;