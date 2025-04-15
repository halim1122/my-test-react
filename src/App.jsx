import './App.css'
import DaisyNav from './components/DaisyNav'
import NavBar from './components/NavBar';

const navigationItems = [
  {
    id: 1,
    name: "Home",
    navigationPath: "/"
  },
  {
    id: 2,
    name: "About",
    navigationPath: "/about"
  },
  {
    id: 3,
    name: "Services",
    navigationPath: "/services"
  },
  {
    id: 4,
    name: "Blog",
    navigationPath: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    navigationPath: "/contact"
  }
];


function App() {
  return (
    <>
    <ul className='flex justify-center'>
    {
      navigationItems.map(navLink => <NavBar key={navLink.id} navLink={navLink}></NavBar>)
    }
    </ul>

      {/* <ul className='flex justify-center'>
      {
        navigationItems.map(navLink => <li className='mr-10'><a href={navLink.navigationPath}>{navLink.name}</a></li>)
      }
      </ul> */}
    {/* <ul className='flex'>
      <li className='mr-10'><a href="/">Home</a></li>
      <li className='mr-10'><a href="/about">About</a></li>
      <li className='mr-10'><a href="/blog">Blog</a></li>
    </ul> */}
      <DaisyNav></DaisyNav>
    </>
  )
}

export default App
