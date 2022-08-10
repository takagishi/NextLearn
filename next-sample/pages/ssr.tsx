import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

type SSRProps = {
  message: string;
};

// NextPageはNext.jsのPages向けの型
// NextPage<props>でpropsが入るPageであることを明示
const SSR: NextPage<SSRProps> = (props) => {
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
