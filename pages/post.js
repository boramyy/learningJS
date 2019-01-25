import Layout from '../components/MyLayout.js'
import axios from "axios";

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary ? props.show.summary.replace(/<[/]?>p/g, "") : ''}</p>
    <img src={props.show.image.original} />
  </Layout>
);

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  const show = res.data;

  console.log(`fetched show: ${show.name}`);

  return { show }
}

export default Post;