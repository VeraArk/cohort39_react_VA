import "./styles.css";
import avatar from "../../assets/simpson.jpg";

function Cards() {
  return (
    <div className="cardsComponent">
      <img src={avatar} alt="аватар Гомера Сімпсона" className="avatar" />
      <ul>
        <li>Гомер Симпсон</li>
        <li>Инспектор атомной электростанции </li>
        <li>Любит почники и пиво</li>
      </ul>
    </div>
  );
}
export default Cards;
