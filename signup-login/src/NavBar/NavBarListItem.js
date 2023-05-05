import '../App.css';
import styles from './Navbar.module.css';

/**
 * A component for rendering a navigation bar list item.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the list item.
 * @param {ReactNode} props.children - The child nodes of the list item.
 *
 * @returns {JSX.Element} The JSX element representing the navigation bar list item.
 */
export default function NavBarListItem(props) {
  console.log(props.path);
  return (
    <li className={styles.navbar_li}>
      <a className={styles.navbar_a} href={props.path}>
        {props.children}
        <span>{props.title}</span>
      </a>
    </li>
  );
}
