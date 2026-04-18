import { LazyImage } from '@shared/ui/lazy-image';
import Logo from '@shared/assets/logo-bg.png';

interface MobileNavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export function MobileNavbar({ isMenuOpen, toggleMenu }: MobileNavbarProps) {
  return (
    <header className="mainHeader mobileOnly">
      <button className="menuButton" onClick={toggleMenu} aria-label="Toggle Menu">
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className="logoSection">
        <LazyImage style={{ width: '80px' }} src={Logo} alt={'Main logo'} />
      </div>

      {/* Placeholder to maintain 3-column layout if needed, or for bag icon */}
      <div className="navSection right">
        {/* Empty or can add Bag icon here if needed */}
      </div>

      <div className={`mobileMenuOverlay ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobileNavLinks">
          <div className="mobileNavGroup">
            <a href="#" className="mobileNavLink" onClick={toggleMenu}>
              Men
            </a>
            <a href="#" className="mobileNavLink" onClick={toggleMenu}>
              Women
            </a>
            <a href="#" className="mobileNavLink" onClick={toggleMenu}>
              Children
            </a>
            <a href="#" className="mobileNavLink" onClick={toggleMenu}>
              Home
            </a>
            <a href="#" className="mobileNavLink" onClick={toggleMenu}>
              World
            </a>
          </div>

          <div className="mobileUtilityGroup">
            <a href="#" className="mobileUtilityLink" onClick={toggleMenu}>
              Stores
            </a>
            <a href="#" className="mobileUtilityLink" onClick={toggleMenu}>
              About
            </a>
            <a href="#" className="mobileUtilityLink" onClick={toggleMenu}>
              Wishlist
            </a>
            <a href="#" className="mobileUtilityLink" onClick={toggleMenu}>
              Account
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
