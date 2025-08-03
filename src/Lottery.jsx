import { useState } from "react";
import { generateRandom } from "./helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({n = 4 ,winCondition }){

    let arr = new Array(n);
    for(let i = 0; i < n ; i++){
        arr[i] = 0;
    }
    let [ticket,setTicket] = useState(arr);
    

    function getNewTicket(){
        setTicket(generateRandom(n));
    }

    return(
        <div>
            <h2>Lottery Game</h2>
            <h2 style={{color: "red"}}>{winCondition(ticket) && "Congrats! You Won$"}</h2>
            <Ticket arr={ticket}/>
            <br />
            <button onClick={getNewTicket}>GetNewTicket</button>
        </div>
    );
}