import React, { useState } from 'react';

const menuItems = [
  { url: 'origin', label: "D'On Venim" },
  { url: 'about', label: 'Qui Sóm' },
  { url: 'what', label: 'Què Fem' },
  { url: 'shows', label: 'Espectacles' },
  { url: 'elements', label: 'Elements & imatges' },
  { url: 'contact', label: 'Contacte' },
  { url: 'play', label: 'Juguem?' },
].map(item => ({ ...item, key: item.url }));

export default function Details({ active, setActive, setBeastIndex }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => setMenuOpen(open => !open);

  const handleNavClick = (item, idx, e) => {
    e.preventDefault();
    setActive(item.key);
    if (item.key === 'play') {
      setBeastIndex(prev => (prev === null ? 0 : (prev + 1) % 6));
    } else {
      setBeastIndex(idx % 6 + 1);
    }
    window.location.hash = `#${item.url}`;
    if (window.umami && typeof window.umami.track === 'function') {
      window.umami.track(item.label);
    }
    setMenuOpen(false);
  };

  // Separate play from the rest
  const navItems = menuItems.filter(item => item.key !== 'play');
  const playItem = menuItems.find(item => item.key === 'play');

  return (
    <>
      <button
        className={"hamburger" + (menuOpen ? " open" : "")}
        onClick={handleMenuClick}
        aria-label="Menu"
      >
        <span></span><span></span><span></span>
      </button>
      <nav className={"nav" + (menuOpen ? " open" : "") }>
        {navItems.map((item, idx) => (
          <a
            href={item.url}
            key={item.key}
            className={active === item.key ? `active ${item.key}` : item.key}
            onClick={e => handleNavClick(item, idx, e)}
          >
            {item.label}
          </a>
        ))}
      </nav>
      {/* Play button always visible, styled separately */}
      {playItem && (
        <a
          href={playItem.url}
          key={playItem.key}
          className={"play" + (active === playItem.key ? " active" : "")}
          onClick={e => handleNavClick(playItem, menuItems.length - 1, e)}
        >
          {playItem.label}
        </a>
      )}
      <div className="header-left">
        <img
          src="/arpispas.svg"
          alt="Arpispas Teatre"
        />
      </div>
    </>
  );
}