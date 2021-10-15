import React from "react";
import {Container,Row,Col} from 'reactstrap'


export default function ContactCard(props){
  const imgstyle ={
    width:"30%",
    height:"400px"
  }
  console.log(props);
    return(
        <Container>
         <div className="contact-card">
        <img src={props.contact.imgUrl} alt="images"   style={imgstyle}/>
        <h3>{props.contact.name}</h3>
      <p>Phone:{props.contact.Phone}</p>
        <p>Email: {props.contact.Email}</p>
      </div>     
      </Container>   
    )
}