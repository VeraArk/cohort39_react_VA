import './styles.css'
import avatar from '../../assets/simpson.jpg'

function Cards(){
    
    return (<div className='cardsComponent'>
     <img src= {avatar} alt = 'аватар Гомера Сімпсона' class ='avatar'/>
     <ul>
     <li>Гомер Симпсон</li>
     <li>инспектор атомной электростанции </li>
     <li>любит пончики и пиво </li>
     </ul>
    </div>)
}
export default Cards;