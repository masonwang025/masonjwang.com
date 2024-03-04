function Header() {
  return <header className="header absolute top-0 right-0 left-0 wrapper py-6 flex flex-row justify-between">
    <div>
      <h1 className="text-xl font-semibold uppercase">Mason Wang</h1>
    </div>
    <nav>
      <ul className="flex flex-row space-x-4 text-title">
        <li>
          <div className="underline">Me</div>
        </li>
        {/* <li>
          <a href="#projects">Writing</a>
        </li>
        <li>
          <a href="#contact">CV</a>
        </li> */}
      </ul>
    </nav>
  </header>;
}

export default Header;