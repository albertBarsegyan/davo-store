import { useState } from 'react';
import { Home } from '@pages/home';
import { SplashScreen } from '@shared/ui/splash-screen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}
      <Home />
    </>
  );
}

export default App;
