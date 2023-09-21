import React from "react";
import Card from "./Card";
import contacts from "../contacts.js";
import Avatar from "./Avatar";
// console.log(contacts);
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://c.urbanpro.com/assets/new-ui/provider-male-200X200-6785c82159677527685e24f92b461021.png" />
      <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
