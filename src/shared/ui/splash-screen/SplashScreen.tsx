import { useEffect, useState } from 'react';
import Logo from '@shared/assets/logo.jpg';
import './splash-screen.css';

interface SplashScreenProps {
  onComplete?: () => void;
  duration?: number;
}

export const SplashScreen = ({ onComplete, duration = 2500 }: SplashScreenProps) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, duration - 800);

    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  return (
    <div className={`splashContainer ${isFadingOut ? 'fadeOut' : ''}`}>
      <div className="splashLogoWrapper">
        <img src={Logo} alt="Logo" className="splashLogo" />
        <div className="splashText">TON STYLE</div>
        <div className="splashSubtitle">TON RE&apos;GNE</div>
      </div>
    </div>
  );
};
