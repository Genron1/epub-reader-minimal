import { useRouter } from 'next/router';

import React, { useEffect } from 'react';

const BibiPage = () => {
  const router = useRouter();

  useEffect(() => {
    // ルーターの準備ができたら、静的HTMLページにリダイレクト
    if (router.isReady) {
      const queryString = new URLSearchParams(
        router.query as Record<string, string>,
      ).toString();
      window.location.href = `/bibi.html${queryString ? `?${queryString}` : ''}`;
    }
  }, [router.isReady, router.query]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>Loading Bibi EPUB Reader...</p>
    </div>
  );
};

export default BibiPage;
