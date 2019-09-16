import React,{createRef} from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Download from './components/Download';
import Gallery from './components/Gallery';
import Shop from './components/Shop';
import Menu from './components/layout/Menu';

const navClick = id => {
  id.current.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

const homeRef = createRef();
const aboutRef = createRef();
const galleryRef = createRef();
const downloadRef = createRef();
const shopRef = createRef();
const contactRef = createRef();

function App() {
  return (
    <div className="App">
      <Menu
        navClick={navClick}
        homeRef={homeRef}
        aboutRef={aboutRef}
        galleryRef={galleryRef}
        downloadRef={downloadRef}
        shopRef={shopRef}
        contactRef={contactRef}
      />
      <Home ref={homeRef}/>
      <About ref={aboutRef}/>
      <Gallery ref={galleryRef}/>
      <Download ref={downloadRef}/>
      <Shop ref={shopRef}/>
      <Contact ref={contactRef}/>
    </div>
  );
}

export default App;
