
import React from "react"
import pic from './images/pic.JPG'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import pic4 from './images/pic4.jpg'
import ContactCard from "./ContactCard"



function App() {
 
  return (
    <div className="contacts">
      <ContactCard
      contact={
       {name:"Gayun Theboys",
        imgUrl:pic,
        Phone:" (+234) 8181343395",
        Email:"vasheermouhd@tailor.com" }
      }
      />
      <ContactCard
      contact={
        { name:"Sirdurx",
        imgUrl:pic2,
        Phone:" (+234)  09037231098 ",
        Email:"sirdurx@computer.hacker.com" }
      }
      />
      <ContactCard 
      contact={
        {name:"King Sirdeeq",
        imgUrl:pic3,
        Phone:" (+234)  09037231098 ",
        Email:"ssirdeeq@gmail.com"
        }
      }
       />
      <ContactCard 
      contact={
        {name:"A-gun-gun(Ramcy)",
        imgUrl:pic4,
        Phone:" (+234)  7013565465 ",
        Email:" ramcy2003@gmail.com" }
      }
       />

      
 
  </div>
  )               
}

export default App;
