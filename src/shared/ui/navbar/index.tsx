import { useEffect, useState } from 'react';
import { DesktopNavbar } from './desktop-navbar.tsx';
import { MobileNavbar } from './mobile-navbar.tsx';
import './navbar.css';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbarContainer ${isScrolled ? 'scrolled' : ''}`}>
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
}
