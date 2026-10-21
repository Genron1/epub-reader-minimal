import Link from 'next/link';

import React from 'react';

const Page = () => (
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
        <p>2種類のEPUBリーダーを試せます。</p>
        <div
          style={{
            marginTop: '2rem',
            maxWidth: '800px',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.9rem',
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: '#f5f5f5',
                  borderBottom: '2px solid #ddd',
                }}
              >
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>
                  コンポーネント
                </th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>
                  利用技術
                </th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>
                  指定方法（例）
                </th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>補足</th>
                <th style={{ padding: '0.75rem', textAlign: 'center' }}>
                  リンク
                </th>
                <th style={{ padding: '0.75rem', textAlign: 'center' }}>
                  ドキュメント
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.75rem' }}>React Reader</td>
                <td style={{ padding: '0.75rem' }}>React</td>
                <td style={{ padding: '0.75rem' }}>
                  <code
                    style={{
                      fontSize: '0.8rem',
                      backgroundColor: '#f9f9f9',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '3px',
                    }}
                  >
                    ?data=&lt;base64エンコーディングしたepubのURL&gt;
                  </code>
                </td>
                <td style={{ padding: '0.75rem', fontSize: '0.85rem' }} />
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                  <Link
                    href="/read?data=aHR0cHM6Ly9kMXdoYzJza2p5cHhicS5jbG91ZGZyb250Lm5ldC90bXAvMjAyNjAxMDcxNTE0MTFfbDAyYTJ0Y2xqeHplNm0weGQ1bTY3MnppNndvaWRyOHcuZXB1Yg%3D%3D"
                    style={{
                      color: '#0070f3',
                      textDecoration: 'underline',
                    }}
                  >
                    link
                  </Link>
                </td>
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                  <a
                    href="https://github.com/gerhardsletten/react-reader"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#0070f3',
                      textDecoration: 'underline',
                    }}
                  >
                    GitHub
                  </a>
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.75rem' }}>Bibi</td>
                <td style={{ padding: '0.75rem' }}>JavaScript</td>
                <td style={{ padding: '0.75rem' }}>
                  <code
                    style={{
                      fontSize: '0.8rem',
                      backgroundColor: '#f9f9f9',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '3px',
                    }}
                  >
                    ?book=/books/sample.epub
                  </code>
                </td>
                <td style={{ padding: '0.75rem', fontSize: '0.85rem' }}>
                  デフォルトではCORSの制限があり、ファイルも同じサーバにおいている。Shopifyだったらcdnも同じオリジンだからURLでもいけるかも
                </td>
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                  <a
                    href="/bibi.html?book=/books/sample.epub"
                    style={{
                      color: '#0070f3',
                      textDecoration: 'underline',
                    }}
                  >
                    link
                  </a>
                </td>
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                  <a
                    href="https://github.com/satorumurmur/bibi"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#0070f3',
                      textDecoration: 'underline',
                    }}
                  >
                    GitHub
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );

export default Page;
