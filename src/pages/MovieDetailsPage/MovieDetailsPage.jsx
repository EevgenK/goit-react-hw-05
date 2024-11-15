import { useParams } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
import { getMovieById } from "../../services/getApi";
import MovieCard from "../../components/MovieCard/MovieCard";
const test = {
  adult: false,
  backdrop_path: "/2va32apQP97gvUxaMnL5wYt4CRB.jpg",
  belongs_to_collection: {
    id: 120794,
    name: "Batman Collection",
    poster_path: "/4AUoqt72CVP4UV902hmdDj4t5Q9.jpg",
    backdrop_path: "/4UHZWw5lV3ZoadTjXuVOakdH32L.jpg",
  },
  budget: 35000000,
  genres: [
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 28,
      name: "Action",
    },
    {
      id: 80,
      name: "Crime",
    },
  ],
  homepage: "",
  id: 268,
  imdb_id: "tt0096895",
  origin_country: ["US"],
  original_language: "en",
  original_title: "Batman",
  overview:
    'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
  popularity: 46.343,
  poster_path: "/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg",
  production_companies: [
    {
      id: 174,
      logo_path: "/zhD3hhtKB5qyv7ZeL4uLpNxgMVU.png",
      name: "Warner Bros. Pictures",
      origin_country: "US",
    },
    {
      id: 67889,
      logo_path: null,
      name: "Polygram Pictures",
      origin_country: "US",
    },
    {
      id: 276,
      logo_path: null,
      name: "Guber/Peters Company",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "1989-06-21",
  revenue: 411348924,
  runtime: 126,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
    {
      english_name: "French",
      iso_639_1: "fr",
      name: "Français",
    },
  ],
  status: "Released",
  tagline: "Justice is always darkest before the dawn.",
  title: "Batman",
  video: false,
  vote_average: 7.2,
  vote_count: 7799,
};
const MovieDetailsPage = () => {
  const [movie, setMovie] = useState("");
  const [backGround, setBackGround] = useState("");
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getMoviesDetails = async () => {
      try {
        const data = await getMovieById(id);
        console.log(data);
        setBackGround(data.backdrop_path);
        setMovie(data);
      } catch (err) {
        console.error(err);
      }
    };
    getMoviesDetails();
  }, []);
  const dynamicStyle = {
    backgroundImage: `linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%), url(https://image.tmdb.org/t/p/w500${backGround}.jpg)`,
    backgroundSize: "contain",
    backgroundPosition: "left 50%",
  };

  return <div style={dynamicStyle}>{movie && <MovieCard items={movie} />}</div>;
};

export default MovieDetailsPage;
