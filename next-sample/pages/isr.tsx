import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type ISRProps = {
  message: string;
};

// NextPageはNext.jsのPages向けの型
// NextPage<props>でpropsが入るPageであることを明示
const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはISRによってビルド時に生成されたページです</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleDateString();
  const message = `${timestamp} getStaticPropsが実行されました`;
  console.log(message);
  return {
    props: {
      message,
    },
    // ページの有効期限を秒単位
    revalidate: 60,
  };
};

export default ISR;
