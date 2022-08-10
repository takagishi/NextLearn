import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type PostProps = {
  id: string;
};

const obj = {};
console.log(obj);

const Post: NextPage<PostProps> = (props) => {
  const { id } = props;
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{`/posts/${id}に対応するページです`}</p>
      </main>
    </div>
  );
};
export default Post;
