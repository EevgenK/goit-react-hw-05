import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const TOKEN = import.meta.env.VITE_API_TOKEN;
const instance = axios.create({
  baseURL: "https://api.themoviedb.org",
  params: {
    api_key: API_KEY,
    include_adult: false,
    language: "en-US",
    page: 1,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  },
});

const getMovies = async (query) => {
  const { data } = await instance.get("/3/search/movie", {
    params: {
      query,
    },
  });

  return data;
};
const getMovieById = async (movie_id) => {
  const { data } = await instance.get(`/3/movie/${movie_id}`);
  return data;
};
export { getMovies, getMovieById };
