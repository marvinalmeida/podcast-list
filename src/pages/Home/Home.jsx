import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import PodcastList from "../../components/PodcastList/PodcastList";
import { getAllPodcasts } from "../../services/podcast.service";

const Home = () => {
  const [podcastList, setPodcastList] = useState([]);

  useEffect(() => {
    setPodcastList(getAllPodcasts());
  }, []);

  return (
    <Layout>
      <PodcastList podcasts={podcastList} />
    </Layout>
  );
};

export default Home;
