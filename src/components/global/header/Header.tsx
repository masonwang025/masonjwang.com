function Header() {
  return <header className="container mx-auto flex py-4 flex-row justify-between">
    <div>
      <p className="text-xl font-semibold uppercase">Mason Wang</p>
    </div>
    <nav>
      <ul className="flex flex-row space-x-4">
        <li>
          <a href="#about" className="underline">Me</a>
        </li>
        <li>
          <a href="#projects">Writing</a>
        </li>
        <li>
          <a href="#contact">CV</a>
        </li>
      </ul>
    </nav>
  </header>;
}

export default Header;