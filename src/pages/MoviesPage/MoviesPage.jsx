import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import s from "./MoviesPage.module.css";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  const [search, setSearch] = useState("");
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const onHandleSearch = (query) => {
    setSearch("");
    if (query === "") {
      setError(true);
      console.log("error");
      return;
    }
    setSearch(query);
  };
  return (
    <div>
      <SearchForm onSubmit={onHandleSearch} />
      {isLoading ? <Loader /> : ""}
    </div>
  );
};

export default MoviesPage;
