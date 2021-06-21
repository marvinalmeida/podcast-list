import api from "./api";

export const getAllPodcasts = () =>
  api.get("/podcast/details.json?cache=clean");

export const getPodcastById = (id) =>
  api.get(`/podcast/episodes/${id}/details.json?cache=clean`);
