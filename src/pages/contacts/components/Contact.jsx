
import './Contact.css';
/* import {useState} from 'react';
import { Contacts } from './Contacts';
 */

export function Contact (props) {
    // const [isShown, setIsShown] = useState(false);

    // const handleClick = event => {
    //   // 👇️ toggle shown state
    //   setIsShown(current => !current);
  
    //   // 👇️ or simply set it to true
    //   // setIsShown(true);
    // }
    return(
    <div>
        <button onClick={props.selectContact} className='contact-fullName'> {props.firstName} {props.lastName}</button>

            {/* 👇️ show elements on click */}
            {/* {isShown && ( */}

            {/* )} */}
    </div>
    
)
}



