function Hero() {
  return <div className="pt-28 pb-14 container mx-auto min-h-screen flex flex-col">
    <div>
      <div><p className="text-3xl text-gray-300 text-center">What is the meaning of life?</p></div>
      <div><p className="text-3xl text-gray-500 pt-4 pb-3">My best friend told me,</p></div>
    </div>
    <div className="flex flex-1 grow flex-col justify-between pb-10">
      <div>
        <p className="serif text-4xl lg:text-5xl text-left">&ldquo;You are born,</p>
      </div>
      <div>
        <p className="serif text-4xl lg:text-5xl text-center"><i>you have a chance to shine</i>,</p>
      </div>
      <div>
        <p className="serif text-4xl lg:text-5xl text-right">and then you die.</p>
      </div>
    </div>
    <div>
      <div>
        <p className="serif text-4xl lg:text-5xl text-center">So it's about maximizing your shine.&rdquo;</p>
      </div>
    </div>
  </div>
}

export default Hero;