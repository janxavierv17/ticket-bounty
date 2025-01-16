import Link from "next/link";
import { ticketsPath } from "@/utils/paths";

export default function NotFound() {
  return (
    <>
      <h1>Ticket id doesn&apos;t exist</h1>
      <Link href={ticketsPath()} className="text-sm underline">
        Go home
      </Link>
    </>
  );
}
