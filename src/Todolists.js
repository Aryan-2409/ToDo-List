import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'

import React from 'react';

const Todolists = (props) => {


  return (
    <>
    <div className="fa-times">
    <i onClick={
        ()=>{
            props.onSelect(props.id);
        }
    }>
    <FontAwesomeIcon    icon={faCircleXmark} style={{color: "white"}} />
    </i>
</div>
    <div>
       <li>{props.text}</li>
    </div>
    </>
  )
}

export default Todolists
