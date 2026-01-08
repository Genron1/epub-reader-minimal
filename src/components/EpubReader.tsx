import dynamic from 'next/dynamic';

import React, { useState } from 'react';

/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const ReactReader = dynamic(
  () => import('react-reader').then((mod) => mod.ReactReader),
  { ssr: false },
);
/* eslint-enable @typescript-eslint/no-unsafe-return */
/* eslint-enable import/no-unresolved */
/* eslint-enable @typescript-eslint/naming-convention */
/* eslint-enable @typescript-eslint/no-unsafe-member-access */

type Direction = 'rtl' | 'ltr';

interface EpubReaderProps {
  url: string;
  direction?: Direction;
}

const EpubReader = (props: EpubReaderProps) => {
  const [location, setLocation] = useState<string | number>(0);

  return (
    <div style={{ height: '100vh' }}>
      <ReactReader
        url={props.url}
        location={location}
        locationChanged={(epubcfi: string) => setLocation(epubcfi)}
        direction={props.direction}
      />
    </div>
  );
};

export default EpubReader;
