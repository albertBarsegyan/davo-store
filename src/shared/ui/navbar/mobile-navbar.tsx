import { LazyImage } from '@shared/ui/lazy-image';
import Logo from '@shared/assets/logo-bg.png';

export function MobileNavbar() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="mainHeader mobileOnly" role="banner">
      <div className="navSection" aria-label="Tagline left">
        <span className="tagline">TON STYLE</span>
      </div>
      <button type="button" onClick={handleScrollTop} className="logoSection">
        <LazyImage style={{ width: '80px' }} src={Logo} alt={'R3IGNE Logo'} />
      </button>

      <div className="navSection right" aria-label="Tagline right">
        <span className="tagline">TON RE&apos;GNE</span>
      </div>
    </header>
  );
}
