import { Link } from "react-router-dom";
import s from "./MovieList.module.css";
import { defaultImg } from "../../services/defaultValues";

const MovieList = ({ items }) => {
  const elements = items.map(({ id, title, poster_path, release_date }) => {
    return (
      <li key={id} className={s.item}>
        <Link className={s.link} to={`/movies/${id}`}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w200${poster_path}.jpg`
                : defaultImg
            }
            alt={title}
            className={s.img}
          />
          <div className={s.wrap}>
            <h4 className={s.title}>{title}</h4>
            <p>{release_date && new Date(release_date).getFullYear()}</p>
          </div>
        </Link>
      </li>
    );
  });
  return <ul className={s.list}>{elements}</ul>;
};

export default MovieList;
