import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type SSRProps = {
  message: string;
};

// NextPageはNext.jsのPages向けの型
// NextPage<props>でpropsが入るPageであることを明示
const SSR: NextPage<SSRProps> = (props) => {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', (url, { shallow }) => {
      console.log('router routeChangeStart');
      console.log(`url: ${url}`);
      console.log(`shallow: ${shallow}`);
    });
    router.events.on('routeChangeComplete', (url, { shallow }) => {
      console.log('router routeChangeComplete');
      console.log(`url: ${url}`);
      console.log(`shallow: ${shallow}`);
    });
  }, [router]);

  const onSubmit = () => {
    router.push('/ssg');
  };
  const { message } = props;
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはSSRによってサーバアクセス数時にサーバで描画されたページです</p>
        <p>{message}</p>
        <Link href="/ssg?keyword=next">
          <a>Go to SSG</a>
        </Link>
        <br />
        <br />
        {/* hrefに文字列を指定する代わりにオブジェクトを指定できます */}
        <Link href={{ pathname: '/ssg', query: { keyword: 'hello' } }}>
          <a>Go to SSG</a>
        </Link>
        <br />
        <br />
        <Link href="/ssg">
          {/* aの代わりにButtonを利用するとonClickが呼ばれたタイミングで遷移します */}
          <button type="submit">Jump to ssg</button>
        </Link>
        <br />
        <br />
        <button type="submit" onClick={onSubmit}>
          router push to ssg
        </button>
        <br />
        <br />
        <button
          type="button"
          onClick={() => {
            router.reload();
          }}>
          router reload
        </button>
        <br />
        <br />
        <button
          type="button"
          onClick={() => {
            router.back();
          }}>
          router back
        </button>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
  const timestamp = new Date().toLocaleDateString();
  const message = `${timestamp} にgetServerSidePropsが実行されました`;
  console.log(message);
  return {
    props: {
      message,
    },
  };
};

export default SSR;
