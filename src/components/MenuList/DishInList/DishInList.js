import sushi1 from "../../../images/set-drakon.jpeg";
import Button from "../../UI/Button/Button";
import rubbish from "../../../images/delete.png";
import React from "react";
import connect from "react-redux/es/connect/connect";
import './DishInList.css';

const DishInList = props =>{
    return(
<li>
    <div className="dishes">
        <div className="dish-img">
            <img src={sushi1}/>
        </div>
        <div className="dish-info">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Название блюда:        %НАЗВАНИЕ%</li>
                <li className="list-group-item">Количество:      %КОЛИЧЕСТВО%</li>
                <li className="list-group-item">Цена:     %ЦЕНА%</li>
            </ul>
        </div>
        <Button
            typeBtn="btn btn-remove"
            submitButton="submit"
        ><img src={rubbish}/></Button>
    </div>
</li>
    )
};

export default DishInList;