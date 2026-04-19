import { LazyImage } from '@shared/ui/lazy-image';
import Logo from '@shared/assets/logo-bg.png';

export function DesktopNavbar() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="mainHeader desktopOnly" role="banner">
      <div className="navSection" aria-label="Tagline left">
        <span className="tagline">TON STYLE</span>
      </div>

      <div className="logoSection">
        <button
          onClick={handleScrollTop}
          className="logoButton"
          type="button"
          aria-label="Go to homepage"
        >
          <LazyImage style={{ width: '100px' }} src={Logo} alt={'R3IGN Logo'} />
        </button>
      </div>

      <div className="navSection right" aria-label="Tagline right">
        <span className="tagline">TON RE&apos;GNE</span>
      </div>
    </header>
  );
}
