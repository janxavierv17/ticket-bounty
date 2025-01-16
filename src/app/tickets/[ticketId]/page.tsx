import { notFound } from "next/navigation";
import { initialTickets } from "@/app/data";

const TicketPage = async ({
  params,
}: {
  params: Promise<{ ticketId: string }>;
}) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return notFound();
  }

  return (
    <div>
      <h1>{ticket.title}</h1>
      <p>{ticket.content}</p>
      <p>{ticket.status}</p>
    </div>
  );
};

export default TicketPage;
