import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

const MyComponent = () => (
  <Image src='/images/profile.jpg' height={144} width={144} alt='sample Name' />
);

export default function FirstPost() {
  const onClickButton = () => {
    // sample();
    console.log('onClickButton');
  };
  const onLoad = () => {
    console.log('loaded..');
  };

  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Script id='facebook' src='httpsdk.js' />
      </Head>
      <Script src='/js/sample1.js' strategy='lazyOnload' />

      <h1>Firs Post</h1>
      <h1 className='title'>
        Learn <a href='https://nextjs.org'>Next.js!</a>
      </h1>
      <br />
      <button onClick={onClickButton}>button</button>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
