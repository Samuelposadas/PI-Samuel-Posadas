import s from "./card.module.css";

export default function Card({ title, image, diets, vegetarian, score }) {
  return (
    <div className={s.cardComp}>
      <h3>{title}</h3>
      <img
        src={image}
        alt="Img recipe not found"
        width="150px"
        height="150px"
      />
      <h5 className={s.typeOfD}>Type of Diet:</h5>
      <h5 className={s.diets}>
        {diets}
        {vegetarian}
      </h5>
      <h5 className={s.typeOfD}>Score:</h5>
      <h5 className={s.diets}>
        <i>favorite</i>
        {score}
      </h5>
    </div>
  );
}
