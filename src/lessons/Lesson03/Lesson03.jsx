import Cards from "../../components/Cards/Cards";
import avatarH from "../../assets/simpson.jpg";
import avatarM from "../../assets/simpsonM.jpg";
import "./styles.css"


function Lesson03(){

    const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Safety Inspector",
    hobby: "beer Duff",
    avatar: avatarH,
  };

  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    job: "No job",
    hobby: "cooking",
    avatar: avatarM,
  };

  return (<div className = "cardsWrapper">
    <Cards 
    avatar = {margeSimpson.avatar}
    firstName = {margeSimpson.firstName} 
    lastName = {margeSimpson.lastName}
    job = {margeSimpson.job}
    hobby = {margeSimpson.hobby}/>

  <Cards 
    avatar = {homerSimpson.avatar}
    firstName = {homerSimpson.firstName} 
    lastName = {homerSimpson.lastName}
    job = {homerSimpson.job}
    hobby = {homerSimpson.hobby}/>
  </div>
);
}

export default Lesson03;