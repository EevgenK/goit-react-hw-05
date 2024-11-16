import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

import SearchForm from "../../components/SearchForm/SearchForm";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import useLoaderAndError from "../../hooks/useLoaderAndError";

import { getMovies } from "../../services/getApi";
import s from "./MoviesPage.module.css";
import Notification from "../../components/Notification/Notification";

const MoviesPage = () => {
  // const [search, setSearch] = useState("");
  const [films, setFilms] = useState([]);
  const { error, setError, isLoading, setIsLoading } = useLoaderAndError();
  const [searchMoviesList, setSearchMoviesList] = useSearchParams();
  const search = searchMoviesList.get("search");

  useEffect(() => {
    if (!search) return;
    const searchMovies = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { results } = await getMovies(search);
        if (!results.length) {
          toast.error(
            "Unfortunately,  there`s no movies on your request. Please try another request"
          );
        } else {
          setFilms(results);
        }
      } catch (err) {
        setError(true);
        console.error(err.message);
        toast.error("Something went wrong! Please try again later");
      } finally {
        setIsLoading(false);
      }
    };

    searchMovies();
  }, [search, setError, setIsLoading]);

  const onHandleSearch = (query) => {
    setSearchMoviesList("");
    if (query === "") {
      setError(true);
      toast.error("Sorry, the search-bar can't be empty! Please, try again.");
      return;
    }
    setSearchMoviesList({ search: [query] });
  };
  return (
    <div className="container">
      <SearchForm onSubmit={onHandleSearch} />
      {error && (
        <Notification>
          Something went wrong! Please try again later
        </Notification>
      )}
      {isLoading ? <Loader /> : films && <MovieList items={films} />}
    </div>
  );
};

export default MoviesPage;
