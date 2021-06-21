import podcastListMock from "../mocks/podcast-list.json";
import podcastDetailMock from "../mocks/podcast-detail.json";
export const getAllPodcasts = () => podcastListMock;

export const getPodcastById = (id) =>
  podcastDetailMock.id === id ? podcastDetailMock : {};
