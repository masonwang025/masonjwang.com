import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/writing': {
    name: 'writing',
  },
  'https://alignment.guide': {
    name: '!!!',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-3 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              if (path.startsWith('https://')) {
                return (
                  <a
                    key={path}
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:text-neutral-200 flex align-middle tracking-widest relative py-1 px-2 m-1"
                  >
                    {name}
                  </a>
                )
              }
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
