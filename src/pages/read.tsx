import { useRouter } from 'next/router';

import React from 'react';

import EpubReader from '@/components/EpubReader';

type Direction = 'rtl' | 'ltr';

const Page = () => {
  const router = useRouter();

  // ルーターの準備ができていない、またはdataパラメータがない場合
  if (!router.isReady || !router.query.data) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>Loading...</p>
      </div>
    );
  }

  const epubUrl = atob(router.query.data as string);
  const direction = router.query.direction as Direction;

  return <EpubReader url={epubUrl} direction={direction} />;
};

export default Page;
