import OrderOverviewCardContainer from "../components/OrderOverviewCardContainer";
import DashboardContainer from "../components/DashboardContainer";
import PurityUiDashboardSidebarContai from "../components/PurityUiDashboardSidebarContai";
import styles from "./DashboardScreen.module.css";


const DashboardScreen = () => {
  return (
    <div className={styles.dashboardScreen}>
      <div className={styles.newDesign}>
        <div className={styles.mainDashboard}>
          <div className={styles.footerMenu}>
            <div className={styles.menu}>
              <div className={styles.license}>License</div>
              <div className={styles.blog}>Blog</div>
              <div className={styles.simmmple}>Simmmple</div>
              <div className={styles.creativeTim}>Creative Tim</div>
            </div>
            <div className={styles.madeWithContainer}>
              <span>{`@ 2021, Made with ❤️ by `}</span>
              <b className={styles.creativeTim1}>Creative Tim</b>
              <span>{` & `}</span>
              <b className={styles.creativeTim1}>Simmmple</b>
              <span> for a better web</span>
            </div>
          </div>
          <OrderOverviewCardContainer />
          <DashboardContainer />
        </div>
        <PurityUiDashboardSidebarContai />
      </div>
    </div>
  );
};

export default DashboardScreen;
