import s from "./CastCard.module.css";

const CastCard = ({ items }) => {
  const items = cast.map(({ id, profile_path, name }) => {
    return (
      <li key={id}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w200${profile_path}.jpg`
              : defaultImg
          }
          alt={name}
          className={s.img}
        />
      </li>
    );
  });
  return <div></div>;
};

export default CastCard;
