import ResultItem from './ResultItem';
import styles from './Search.module.css';

/**
 * A functional component that renders a list of search results as a set of <li> items.
 * Each search result is represented by a <ResultItem> component.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.data - An array of search results.
 *
 * @returns {JSX.Element} - The component's markup.
 */
export default function ResulList(props) {
  const searchList = props.data.map((ev, key) => (
    <ResultItem key={key} event={ev}>
      <svg id="event-poster" className={styles.event_image}>
        <image href={ev.url} width="100%" height="100%" />
      </svg>
    </ResultItem>
  ));
  return (
    <div id="result-ul-container">
      <ul id="result-ul" className={styles.list_container}>
        {searchList}
      </ul>
    </div>
  );
}
