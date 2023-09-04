import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, SocialLinks} from './components';
import './CustomScrollbar.css'; 
const App = () => {
  return (
     <BrowserRouter>
     <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>

      <About />
      <Experience />
      <Works />
      <Tech />
      <Feedbacks />

      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <SocialLinks />
     </div>
     </BrowserRouter>
  )
}

export default App
