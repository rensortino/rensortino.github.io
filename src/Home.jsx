import Header from './sections/Header'
import About from './sections/About'
import Projects from './sections/Projects'
import Publications from './sections/Publications'
import News from './sections/News'
// import News from './sections/News'
import NavBar from './components/NavBar'


function Home() {

  return (
    <>
    <Header />
    <main className="tw-flex tw-flex-col tw-items-center tw-max-w-[1024px]">
      <About />
      <News />
      {/* <News /> */}
      <Projects />
      <Publications />
    </main>
  </>
  )
}

export default Home