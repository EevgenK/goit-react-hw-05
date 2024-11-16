import { useEffect, useState } from "react";
import s from "./HomePage.module.css";
import useLoaderAndError from "../../hooks/useLoaderAndError";
import { getTrendMovies } from "../../services/getApi";
import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const { error, setError, isLoading, setIsLoading } = useLoaderAndError();

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { results } = await getTrendMovies();
        setFilms(results);
      } catch (err) {
        setError(true);
        console.error(err.message);
        toast.error("Something went wrong! Please try again later");
      } finally {
        setIsLoading(false);
      }
    };
    getPopularMovies();
  }, [setError, setIsLoading]);
  return (
    <div className="container">
      <h1 className={s.title}>Trending today</h1>
      {isLoading ? <Loader /> : films && <MovieList items={films} />}
    </div>
  );
};

export default HomePage;
