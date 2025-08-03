import TicketNum from "./TicketNum";
import "./Ticket.css";
export default function Ticket({arr}){
    return(
        <div className="ticket">
            <p>Ticket</p>
            {
                arr.map((num,idx) => (
                    <TicketNum n={num} key={idx}/>
                ))
            }
            
        </div>
    );
}