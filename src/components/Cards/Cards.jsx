import "./styles.css";
function Cards(props) {

  return (
    <div className="cardsComponent">
      <img src={props.avatar} alt="аватар Гомера Сімпсона" className="avatar" />
      <ul>
        <li>Full name: {props.firstName} {props.lastName} </li>
        <li>Job: {props.job}</li>
        <li>Hobby: {props.hobby}</li>
      </ul>
    </div>
  );
}
export default Cards;
