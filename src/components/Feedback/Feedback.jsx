import Button from "../Button/Button";
import { useState } from "react";
import "./styles.css";


    function Feedback (){
        const [countLike, setCountL] = useState(0);
        const [countDislike, setCountD] = useState(0);
        
        const onLike = () => {
            setCountL((prevValue) => {
              return prevValue + 1;
            });
          };
        
          const onDislike = () => {
            setCountD((prevValue) => {
              return prevValue + 1;
            });
          };

          const onResetResults =()=>{
            setCountL(0); 
            setCountD(0);
          }
        
          return (
            <div className="feedback-wrapper">
              <div className="button-container">
                <Button className="button-control" name="like" onClick={onLike} />
                <p className="count">{countLike}</p>
              </div>
              <div className="button-container">
                <Button className="button-control" name="dislike" onClick={onDislike} />
                <p className="count">{countDislike}</p>
              </div>
              <Button className="button-control" name="clear" onClick={onResetResults} />
            </div>
          );
    }

    export default Feedback