import { Link } from "react-router-dom";

const DUMMYEVENTS = [
  { id: "e1", title: "Some event" },
  { id: "e2", title: "Another event" },
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMYEVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
