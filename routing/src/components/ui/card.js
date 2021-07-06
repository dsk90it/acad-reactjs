import CardStyles from "./card.module.css";

const Card = ({ children }) => (
  <div className={CardStyles.card}>{children}</div>
);

export default Card;
