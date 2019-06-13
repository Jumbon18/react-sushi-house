import React from 'react';
import './PersonalList.css';
import PersonalItem from "./PersonalItem/PersonalItem";


const PersonalList = props =>{
  return(

        <ul className={'personal-list'}>
            {props.personalOrders && props.personalOrders.length > 0 ?
            props.personalOrders.map((el,index)=>{
               return(
                 <PersonalItem
                     order={el}
                 />
               )
            })
                : null
            }
            }
    </ul>
  )
};

export default PersonalList;


