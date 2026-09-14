import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

import styles from "./RootLayout.module.css";

function RootLayout(){
    return(
        <>
            <Navbar />
            <div className={styles["main-content"]}>
                <Outlet />
            </div>
        </>
    )
}
export default RootLayout;