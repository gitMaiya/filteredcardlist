import React from "react";
import Card from "./card";

const Cardlist = ({Robots}) => {
    const CardArray = Robots.map((user, i) => {
        console.log(user);
        return <Card 
            key={i}
            id={Robots[i].id}
            name={Robots[i].name}
            username={Robots[i].username}
            email={Robots[i].email}
        />
    })
   return(
    <div>
        {CardArray}
    </div>

   );
}



export default Cardlist;