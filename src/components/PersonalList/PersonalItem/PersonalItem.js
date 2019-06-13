import React from 'react';
import './PersonalItem.css';
import sushi1 from "../../../images/set-drakon.jpeg";
import Button from "../../UI/Button/Button";
import rubbish from "../../../images/delete.png";

const PersonalItem = props =>{
  return(
      <li>
          <div className="PersonalItem">
              <div className={'item-info'}><span>Дракон <strong>Кол-во:</strong> 2<br/> Итачи <strong>Кол-во:</strong> 1</span>
              </div>

              <div className={'item-info'}><span><strong>Статус заказа: </strong>В пути</span>
              </div>

              <div className={'item-info'}>
                  <span><strong>Цена:</strong> 1000 грн</span>
              </div>
          </div>
      </li>
  )
};

export default PersonalItem;