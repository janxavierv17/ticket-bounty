import Link from "next/link";
import { ticketDetailsPath } from "@/utils/paths";
import { initialTickets } from "../data";

const TICKET_ICONS = {
  OPEN: "O",
  DONE: "X",
};

const TicketsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Home page</h1>
        <p className="text-muted-foreground text-sm">
          Your home place to start
        </p>
      </div>

      <section className="flex flex-1 flex-col items-center">
        {initialTickets.map((ticket) => (
          <div key={ticket.id}>
            <h4>{TICKET_ICONS[ticket.status]}</h4>
            <h2>{ticket.title}</h2>
            <Link
              href={ticketDetailsPath(ticket.id)}
              className="text-sm underline"
            >
              View
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TicketsPage;
