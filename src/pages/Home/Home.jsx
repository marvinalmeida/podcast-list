import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import PodcastList from "../../components/PodcastList/PodcastList";
import { getAllPodcasts } from "../../services/podcast.service";

const Home = () => {
  const [podcastList, setPodcastList] = useState([]);

  useEffect(() => {
    getAllPodcasts()
      .then((response) => setPodcastList(response.data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <Layout>
      <PodcastList podcasts={podcastList} />
    </Layout>
  );
};

export default Home;
