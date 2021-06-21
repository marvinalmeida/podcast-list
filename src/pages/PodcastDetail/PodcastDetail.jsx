import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import PodcastDetail from "../../components/PodcastDetail/PodcastDetail";
import { getPodcastById } from "../../services/podcast.service";

const PodCastDetailPage = () => {
  const [podcast, setPodcast] = useState({});

  const params = useParams();
  useEffect(() => {
    const podcastId = Number(params.id);
    setPodcast(getPodcastById(podcastId));
  }, [params.id]);

  useEffect(() => {
    document.title = podcast.name;
  }, [podcast]);

  return (
    <Layout>
      <PodcastDetail podcast={podcast} />
    </Layout>
  );
};
export default PodCastDetailPage;
