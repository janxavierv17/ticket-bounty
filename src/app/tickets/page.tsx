import Link from "next/link";
import { ticketDetailsPath } from "@/utils/paths";
import { initialTickets } from "../data";

const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <h2>{ticket.title}</h2>
          <Link href={ticketDetailsPath(ticket.id)}>View</Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;
