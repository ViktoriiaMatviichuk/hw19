import { useState } from "react";
import { Contact } from "./Contact";
import './Contacts.css';
export const Contacts = (props) => {
    const contacts = [{
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male"
        }, {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female"
        }, {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666"
        }, {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
        }, {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male"
        }, {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male"
        }];
    const [state, setState] = useState({
        contacts,
        search: "",
        selectedContact: null,
    });

    const handleSearchChange =(e)=>{
        const searchValue = e.target.value;
        const filteredContacts = contacts.filter((contact)=>{
            const lowerCaseValue =  String(e.target.value).toLowerCase();
          return  contact.firstName.toLowerCase().includes(lowerCaseValue) || contact.lastName.toLowerCase().includes(lowerCaseValue) 
        })
        setState({...state, contacts: filteredContacts, search:searchValue})
    }



    return (

    <div className="wrapper">
        {!!state.selectedContact
            ? (
                <div className='contact-info'>
                <div className='navigation-buttons'>
                <button className='arrow-button' onClick={()=>(setState({...state, selectedContact: null}))} >Contacts </button>
                <button>Change</button>
                </div>
                <img className='contact-photo' src='https://cdn.pnghd.pics/data/101/download-logo-contact-png-19.png' alt='avatar'></img>
                <p className='contact-Name'>{state.selectedContact.firstName} {state.selectedContact.lastName}</p>
                <div className='phone-number'>
                <span>phone number</span>
                <p>{state.selectedContact.phone}</p>
                </div>
                <div className='gender'>
                <span>gender</span>
                <p>{state.selectedContact.gender}</p>
                </div>
               
            </div>
            )
            : (
                    <>
                        <p className="header-name">Contacts</p>
                        <input className="search-input" type="text" value={state.search} onChange={handleSearchChange}/>
                         {state.contacts.map((contact)=>(
                            <Contact {...contact} selectContact={()=>(setState({...state, selectedContact: contact}))} />
                        ))}
                    </>
            )
            
        }

       
    </div>
    )
}


