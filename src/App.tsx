import React, { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import TosterComponent from './components/TosterComponent';

const App: React.FC = () => {
  useEffect(() => {
    const handleUnload = () => {
      const url = 'http://3.149.246.221:8080/tv-devices/update-status';
      const payload = JSON.stringify({
        deviceId: JSON.parse(localStorage.getItem('loggedInUser') || '{}').deviceId, // Replace with the actual device ID
        isOnline: 0,
        lastSeen: new Date().toISOString(),
      });

      // Use sendBeacon if supported
      if ('sendBeacon' in navigator) {
        navigator.sendBeacon(url, payload);
      } else {
        // Fallback using fetch for unsupported browsers
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: payload,
        }).catch((error) => {
          console.error('Fetch fallback failed:', error);
        });
      }
    };

    // Attach the event listener for unload
    window.addEventListener('unload', handleUnload);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('unload', handleUnload);
    };
  }, []);
  return (
    <>
      {/* Toast component */}
      <TosterComponent />

      {/* Main app routes */}
      <AppRoutes />
    </>
  );
};

export default App;
