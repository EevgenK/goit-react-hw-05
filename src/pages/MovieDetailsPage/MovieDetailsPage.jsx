import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { getMovieById } from "../../services/getApi";
import MovieCard from "../../components/MovieCard/MovieCard";
import getBackGround from "../../services/getBackGround";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import Navigation from "../../components/Navigation/Navigation";

import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    if (!id) return;
    const getMoviesDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieById(id);
        const style = getBackGround(data.backdrop_path);
        setMovie({ ...data, backdrop_path: style });
      } catch (err) {
        console.error(err.message);
        toast.error("Something went wrong! Please try again later");
      } finally {
        setIsLoading(false);
      }
    };
    getMoviesDetails();
  }, [id, setIsLoading]);

  const goBack = useCallback(() => navigate(backLink.current), [navigate]);

  return (
    <main className="container">
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
              <h4 className={s.details}>Additional information</h4>
              <Navigation links={[{ cast: "cast" }, { reviews: "reviews" }]} />
            </div>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </>
        )
      )}
    </main>
  );
};

export default MovieDetailsPage;
