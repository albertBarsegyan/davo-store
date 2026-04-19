import { LazyImage } from '@shared/ui/lazy-image';
import Logo from '@shared/assets/logo-bg.png';

export function MobileNavbar() {
  return (
    <header className="mainHeader mobileOnly" role="banner">
      <div className="navSection" aria-label="Tagline left">
        <span className="tagline">TON STYLE</span>
      </div>
      <div className="logoSection">
        <LazyImage style={{ width: '80px' }} src={Logo} alt={'R3IGNE Logo'} />
      </div>

      <div className="navSection right" aria-label="Tagline right">
        <span className="tagline">TON RE&apos;GNE</span>
      </div>
    </header>
  );
}
