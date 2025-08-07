import { Link } from "react-router-dom";
import styles from "../Pages/VisitorPage.module.css";
import { GoPerson } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { useEvent } from "../Contexts/EventContext";

function VisitorPage({ visitorName, welcomeName, handleCheckIn }) {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const { eventName, OrganizerName } = useEvent();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const checkIn = () => {
    handleCheckIn(name);
    setName("");
    inputRef.current?.focus();
  };

  return (
    <>
      <div className={styles.visitorContainer}>
        <GoPerson className={styles.icn} />
        <label>Enter your name:</label>
        <br />
        <input
          type="text"
          value={name}
          ref={inputRef}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={checkIn}>Check in</button>
        <h1>Welcome, {welcomeName}!</h1>
        <ul className={styles.listTag}>
          {visitorName.map((i, index) => (
            <li key={index} type="disc">
              {i}
            </li>
          ))}
        </ul>
        <h2>Event: {eventName}</h2>
        <h2>Organizer: {OrganizerName}</h2>
        <div className={styles.eventLink}>
          <FaLongArrowAltRight className={styles.icn2} />
          <Link to="/EventPage" className={styles.linkTag}>
            Go to Event info
          </Link>
        </div>
      </div>
    </>
  );
}

export default VisitorPage;
