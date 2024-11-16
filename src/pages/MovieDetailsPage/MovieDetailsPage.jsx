import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import { useCallback, useEffect, useState } from "react";
import { getMovieById } from "../../services/getApi";
import MovieCard from "../../components/MovieCard/MovieCard";
import getBackGround from "../../services/getBackGround";
import Loader from "../../components/Loader/Loader";
import useLoaderAndError from "../../hooks/useLoaderAndError";
import toast from "react-hot-toast";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { error, setError, isLoading, setIsLoading } = useLoaderAndError();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getMoviesDetails = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMovieById(id);
        const style = getBackGround(data.backdrop_path);
        setMovie({ ...data, backdrop_path: style });
      } catch (err) {
        setError(true);
        console.error(err.message);
        toast.error("Something went wrong! Please try again later");
      } finally {
        setIsLoading(false);
      }
    };
    getMoviesDetails();
  }, [id, setError, setIsLoading]);

  const goBack = useCallback(() => navigate(-1), [navigate]);

  return (
    <div className="container">
      <button onClick={goBack} className={s.button}>
        go back
      </button>
      {isLoading ? (
        <Loader />
      ) : (
        movie && (
          <>
            <div className={s.box} style={movie?.backdrop_path}>
              <MovieCard items={movie} />
            </div>
            <div className={s.additional}>
              <h4>Additional information</h4>
              <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews ">Reviews </Link>
                </li>
              </ul>
            </div>
            <Outlet />
          </>
        )
      )}
    </div>
  );
};

export default MovieDetailsPage;
