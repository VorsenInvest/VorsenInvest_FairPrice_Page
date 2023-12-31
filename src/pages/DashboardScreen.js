import OrderOverviewCardContainer from "../components/OrderOverviewCardContainer";
import SalesOverviewCardContainer from "../components/SalesOverviewCardContainer";
import FilteredForm from "../components/FilteredForm";
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
          <SalesOverviewCardContainer />
          <FilteredForm />
          <div className={styles.analyticsCards}>
            <div className={styles.totalSales}>
              <div className={styles.text}>
                <b className={styles.totalSales1}>Total Sales</b>
                <b className={styles.b}>$173,000</b>
                <b className={styles.b1}>+8%</b>
              </div>
              <img className={styles.icon} alt="" src="/icon@2x.png" />
            </div>
            <div className={styles.newClients}>
              <div className={styles.text1}>
                <b className={styles.newClients1}>New Clients</b>
                <b className={styles.b2}>+3,052</b>
                <b className={styles.b3}>-14%</b>
              </div>
              <img className={styles.icon} alt="" src="/icon@2x.png" />
            </div>
            <div className={styles.todaysUsers}>
              <div className={styles.text2}>
                <b className={styles.todaysUsers1}>Today’s Users</b>
                <b className={styles.b4}>2,300</b>
                <b className={styles.b5}>+5%</b>
              </div>
              <img className={styles.icon} alt="" src="/icon@2x.png" />
            </div>
            <div className={styles.todaysMoney}>
              <div className={styles.text3}>
                <b className={styles.todaysMoney1}>Today’s Money</b>
                <b className={styles.b6}>$53,000</b>
                <b className={styles.b7}>+55%</b>
              </div>
              <img className={styles.icon} alt="" src="/icon@2x.png" />
            </div>
          </div>
          <DashboardContainer />
        </div>
        <PurityUiDashboardSidebarContai />
      </div>
    </div>
  );
};

export default DashboardScreen;
