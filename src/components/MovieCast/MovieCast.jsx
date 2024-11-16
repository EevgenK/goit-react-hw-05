import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";
import { useCallback } from "react";
import { getMovieCredits } from "../../services/getApi";

import { defaultImg } from "../../services/defaultValues";
import Loader from "../Loader/Loader";
import useGetApiById from "../../hooks/useGetApiById";

const MovieCast = () => {
  const { id } = useParams();
  const getCredits = useCallback(() => getMovieCredits(id), [id]);
  const { details, isLoading } = useGetApiById(getCredits, id);

  // const [cast, setCast] = useState([]);
  // const { error, setError, isLoading, setIsLoading } = useLoaderAndError();
  // const { id } = useParams();

  // useEffect(() => {
  //   const getMoviesCast = async () => {
  //     try {
  //       setIsLoading(true);
  //       setError(false);
  //       const { cast } = await getMovieCredits(id);
  //       setCast(cast);
  //     } catch (err) {
  //       setError(true);
  //       console.error(err.message);
  //       toast.error("Something went wrong! Please try again later");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getMoviesCast();
  // }, [id, setError, setIsLoading]);

  const items = details.map(({ id, profile_path, name, character }) => {
    return (
      <li className={s.item} key={id}>
        <img
          className={s.img}
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}.jpg`
              : defaultImg
          }
          alt={name}
        />
        <div className={s.wrapper}>
          <h4>{name}</h4>
          <p>Character: {character}</p>
        </div>
      </li>
    );
  });

  return <ul className={s.list}>{isLoading ? <Loader /> : items}</ul>;
};

export default MovieCast;
