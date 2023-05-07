import Navbar from "../NavBar/Navbar";
import styles from "./TicketsPage.module.css";
import { AiOutlineUser } from "react-icons/ai";
const TicketsPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main + " h-25 "}>
        {/* heading container */}
        <div className="d-flex align-items-center w-100 h-25 ps-5 pt-5">
          <div className={styles.icondiv}>
            <AiOutlineUser className="display-4 text-secondary m-4" />
          </div>
          <div>
            <h4 className="d-block h1 fw-bold ms-3">
              {localStorage.getItem("userFirstName") +
                " " +
                localStorage.getItem("userLastName")}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketsPage;
