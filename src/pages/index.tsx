import { useRouter } from 'next/router';

import React from 'react';

import EpubReader from '@/components/EpubReader';

const Page = () => {
  const router = useRouter();
  const { url, direction } = router.query;

  // ルーターの準備ができていない、またはURLがない場合はプレースホルダーを表示
  if (!router.isReady || !url) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <h1>EPUB Reader Minimal</h1>
        <p>URLパラメータにepubファイルのURLを指定してください。</p>
        <div
          style={{
            textAlign: 'center',
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <p>例:</p>
          <code
            style={{
              fontSize: '0.8rem',
              wordBreak: 'break-all',
              padding: '0.5rem',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px',
              maxWidth: '600px',
            }}
          >
            /read?data=aHR0cHM6Ly9kMXdoYzJza2p5cHhicS5jbG91ZGZyb250Lm5ldC90bXAvMjAyNjAxMDcxNTE0MTFfbDAyYTJ0Y2xqeHplNm0weGQ1bTY3MnppNndvaWRyOHcuZXB1Yg==
          </code>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              marginTop: '0.5rem',
            }}
          >
            <a
              href="/read?data=aHR0cHM6Ly9kMXdoYzJza2p5cHhicS5jbG91ZGZyb250Lm5ldC90bXAvMjAyNjAxMDcxNTE0MTFfbDAyYTJ0Y2xqeHplNm0weGQ1bTY3MnppNndvaWRyOHcuZXB1Yg=="
              style={{
                color: '#0070f3',
                textDecoration: 'underline',
              }}
            >
              ↑ ReactReaderで読む
            </a>
            <a
              href="/bibi?data=aHR0cHM6Ly9kMXdoYzJza2p5cHhicS5jbG91ZGZyb250Lm5ldC90bXAvMjAyNjAxMDcxNTE0MTFfbDAyYTJ0Y2xqeHplNm0weGQ1bTY3MnppNndvaWRyOHcuZXB1Yg=="
              style={{
                color: '#0070f3',
                textDecoration: 'underline',
              }}
            >
              ↑ Bibiで読む
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <EpubReader
      url={url as string}
      direction={direction as 'rtl' | 'ltr' | undefined}
    />
  );
};

export default Page;
