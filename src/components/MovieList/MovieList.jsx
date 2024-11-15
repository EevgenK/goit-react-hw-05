import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ items }) => {
  const elements = items.map(({ id, title, poster_path, release_date }) => {
    if (poster_path)
      return (
        <li key={id} className={s.item}>
          <Link className={s.link} to={`/movies/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w200${poster_path}.jpg`}
              alt={title}
              className={s.img}
            />
            <div>
              <h4 className={s.title}>{title}</h4>
              <p>{new Date(release_date).getFullYear()}</p>
            </div>
          </Link>
        </li>
      );
  });
  return <ul className={s.list}>{elements}</ul>;
};

export default MovieList;
