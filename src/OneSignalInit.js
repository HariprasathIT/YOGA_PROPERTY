import { useEffect } from 'react';

export default function OneSignalInit() {
  useEffect(() => {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function (OneSignal) {
      await OneSignal.init({
        appId: 'fac450ef-3b57-4b31-9ca0-13ebb27b5415',
        safari_web_id: '', // optional
        notifyButton: { enable: true },
      });
    });
  }, []);

  return null;
}
