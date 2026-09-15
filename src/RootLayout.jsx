import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

import styles from "./RootLayout.module.css";

function RootLayout() {
  return (
    <div className={styles["root-layout"]}>
      <div id="canvas-container"></div>
      <Navbar />
      <div className={styles["main-content"]}>
        <Outlet />
      </div>
    </div>
  );
}
export default RootLayout;
