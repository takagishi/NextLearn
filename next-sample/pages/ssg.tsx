import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

type SSGProps = {
  message: string;
};

// NextPageはNext.jsのPages向けの型
// NextPage<props>でpropsが入るPageであることを明示
const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{message}</p>
        {/* /ssrへ遷移するためのリンク作成 */}
        <Link href="/ssr">
          <a>Go to SSR</a>
        </Link>
      </main>
    </div>
  );
};

// getStaticPropsはビルド時に実行される
// GetStaticProps<SSGProps>はSSGPropsを引数にとるgetStaticPropsの型
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleDateString();
  const message = `${timestamp} にgetStaticPropsが実行されました`;
  return {
    props: {
      message,
    },
  };
};

export default SSG;
