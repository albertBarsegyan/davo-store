import { LazyImage } from '@shared/ui/lazy-image';
import Logo from '@shared/assets/logo-bg.png';

export function DesktopNavbar() {
  return (
    <header className="mainHeader desktopOnly">
      <nav className="navSection">
        <a href="#" className="navLink">
          Men
        </a>
        <a href="#" className="navLink">
          Women
        </a>
        <a href="#" className="navLink">
          Children
        </a>
        <a href="#" className="navLink">
          Home
        </a>
        <a href="#" className="navLink">
          World
        </a>
      </nav>

      <div className="logoSection">
        <LazyImage style={{ width: '100px' }} src={Logo} alt={'Main logo'} />
      </div>

      <div className="navSection right">
        <a href="#" className="utilityLink">
          <svg
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </a>
        <a href="#" className="utilityLink">
          Stores
        </a>
        <a href="#" className="utilityLink">
          About
        </a>
        <a href="#" className="utilityLink">
          Wishlist
        </a>
        <a href="#" className="utilityLink">
          Account
        </a>
        <a href="#" className="utilityLink">
          Bag
        </a>
      </div>
    </header>
  );
}
