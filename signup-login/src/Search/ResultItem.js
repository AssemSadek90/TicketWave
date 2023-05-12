import styles from './Search.module.css';
import { Navigate, useNavigate } from 'react-router-dom';

/**
 * Renders a single search result item.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.event - The event object to display.
 *
 * @returns {JSX.Element} - The rendered component.
 */
export default function ResultItem(props) {
  const navigate = useNavigate();

  const eventLink = '/event-details/' + props.event.id;
  function handleClick() {
    navigate(eventLink);
  }

  const realStart = () => {
    const date = new Date(props.event.start);
    const monthName = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    let hour = date.getHours();
    const amPm = hour < 12 ? 'am' : 'pm';
    hour = hour % 12 || 12;
    const minute = date.getMinutes();

    return `${monthName} ${day}`;
  };
  return (
    <div
      id={`item-ul-container-${props.event.id}`}
      className={styles.item_container}
      onClick={handleClick}
    >
      <ul id={`item-ul-${props.event.id}`}>
        <li id={`result-date-${props.event.id}`} className={styles.result_date}>
          <p style={{ color: 'chocolate' }}>{realStart()}</p>
        </li>
        <li id={`result-item-${props.event.id}`} className={styles.result_item}>
          {props.event.children}
        </li>
        <li id={`result-info-${props.event.id}`} className={styles.result_data}>
          <p style={{ fontWeight: 'bold' }}>
            {props.event.name && props.event.name.slice(0, 24)}
            {props.event.name[24] && '...'}
          </p>
          <p>
            {props.event.description && props.event.description.slice(0, 24)}
            {props.event.description[24] && '...'}
          </p>
        </li>
      </ul>
    </div>
  );
}
