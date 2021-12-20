import SocialIcons from "../components/socialIcons"

const sectionNav = [
  {
    name: 'Home',
    href: '#hero'
  },
  {
    name: 'About Me',
    href: '#about'
  },
  {
    name: 'Contact',
    href: '#contact'
  },
]

export default function Footer() {
  return (
    <footer className="bg-slate-600 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-3">
          <SocialIcons classes="text-gray-400 hover:text-white "/>
        </div>
        <div className="flex justify-center items-center flex-col space-y-6 mt-5 md:order-2 md:hidden">
          {sectionNav.map(({name, href}) => (
            <a key={name} href={href} className="text-gray-400 hover:text-white transition ease-out duration-300">
              <span className="md:sr-only">{name}</span>
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">&copy; 2021 Cactus Studio, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
