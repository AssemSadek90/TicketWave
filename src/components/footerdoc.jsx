/**
 * A React component that renders a footer with a publish button.
 *
 * @param {string} buttonText - The text to display on the publish button.
 * @returns {JSX.Element} The rendered footer component.
 */
function Footer({ buttonText }) {
  return (
    <form action="https://www.nextPage.com">
      <div className="footerContainer">
        <button className="footerButton" type="submit" value="submit">
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default Footer;
