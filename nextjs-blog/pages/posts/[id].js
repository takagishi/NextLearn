import Head from 'next/head';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  console.log('call getStaticPaths');
  const paths = getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  console.log('call getStaticProps');
  console.log(params);
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
