import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import Head from "next/head";
import axios from "axios";

// const PostLink = props => (
//   <li>
//     <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )

const Index = props => (
  <Layout>
    <Head>
      <title>Index 페이지</title>
    </Head>
    <h1>shows~</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link prefetch as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await axios.get("https://api.tvmaze.com/search/shows?q=batman");
  const data = res.data;

  console.log(`show data fetched. count: ${data.length}`);
  return {
    shows: data,
  }
}

export default Index


// export default () => (
//   <Layout>
//     <h1>My Blog</h1>
//     <ul>
//       <PostLink id="hoho1" title="Hello Next.js" />
//       <PostLink id="hoho2" title="Learn Next.js is awesome" />
//       <PostLink id="hoho3" title="Deploy apps with Zeit" />
//     </ul>
//   </Layout>
// )