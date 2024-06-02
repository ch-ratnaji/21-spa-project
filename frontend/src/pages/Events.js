import EventsList from "../components/EventsList";
import { json, useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/eventsfffgjhh");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    // status: 500,});
    json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}
