import { Link } from "react-router-dom";
import styles from "../Pages/EventPage.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdCelebration } from "react-icons/md";
import { useState } from "react";
import { useEvent } from "../Contexts/EventContext";

function EventPage() {
  const [ename, seteName] = useState("");
  const [oname, setoName] = useState("");
  const { eventName, OrganizerName, handleEventInfo, handleDeleteEvent } = useEvent();

  const info = () => {
    handleEventInfo(ename, oname);
    seteName("");
    setoName("");
  };
  return (
    <>
      <div className={styles.EventContainer}>
        <MdCelebration className={styles.loicn2} />
        <label className={styles.label1}>Event Name:</label>
        <br />
        <input
          type="text"
          value={ename}
          onChange={(e) => seteName(e.target.value)}
        />
        <br />
        <label className={styles.label2}>Organizer Name:</label>
        <br />
        <input
          type="text"
          value={oname}
          onChange={(o) => setoName(o.target.value)}
        />
        <br />
        <button onClick={info}>Save Event info</button>
        <button onClick={handleDeleteEvent}>Delete Event</button>
        <h2>Event: {eventName}</h2>
        <h2>Organizer: {OrganizerName}</h2>
        <div className={styles.visitorLink}>
          <FaArrowLeftLong className={styles.arricn2} />
          <Link to="/" className={styles.visit}>
            Back to Check In
          </Link>
        </div>
      </div>
    </>
  );
}

export default EventPage;
