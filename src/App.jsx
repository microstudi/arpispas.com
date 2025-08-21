import Details from './components/Details';
import Scene from './components/Scene';
import ViewPort from './components/ViewPort';
import Origin from './components/Origin';
import About from './components/About';
import What from './components/What';
import Shows from './components/Shows';
import Contact from './components/Contact';
import { useState, useEffect } from 'react';


const mainContentComponents = {
  origin: <Origin />,
  about: <About />,
  what: <What />,
  shows: <Shows />,
  contact: <Contact />,
};


export default function App() {
  const [active, setActive] = useState(null);
  const [beastIndex, setBeastIndex] = useState(0);

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      if (mainContentComponents[hash]) {
        setActive(hash);
        // Set beast index according to menu index
        const menuOrder = ['origin', 'about', 'what', 'shows', 'contact'];
        const idx = menuOrder.indexOf(hash);
        if (idx !== -1) setBeastIndex(idx % 6);
      }
    }
  }, []);

  return (
    <>
      <Scene beastIndex={beastIndex} />
      <div className="main">
        <div className="info">
          <ViewPort active={active} content={active ? mainContentComponents[active] : null} />
        </div>
        <Details active={active} setActive={setActive} setBeastIndex={setBeastIndex} />
      </div>
      <div className="bottom">
        <a
          href="https://github.com/microstudi/arpispas.com"
          className="bottom-right"
        >
          {'<Source />'}
        </a>
        <a
          href="https://www.instagram.com/cia_arpispas"
          className="bottom-left"
        > @cia_arpispas
        </a>
      </div>
    </>
  );
}
