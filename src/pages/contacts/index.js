import {Contacts} from './components/Contacts.jsx';


const Contactpage = ()=>{
    return (
        <>
        <h1 className="title">contacts </h1>
  
        <Contacts contacts={Contacts.contacts}/>
   
        </>
    )
}

export default Contactpage