import styles from "./OrderOverviewCardContainer.module.css";

const OrderOverviewCardContainer = () => {
  return (
    <div className={styles.contentCards}>
      <div className={styles.secondCard}>
        <div className={styles.text}>
          <div className={styles.thisMonth}>
            <b>+30%</b>
            <span className={styles.thisMonth1}> this month</span>
          </div>
          <img
            className={styles.ioniconccheckmarkccircle}
            alt=""
            src="/ioniconccheckmarkccircle@2x.png"
          />
          <b className={styles.ordersOverview}>Orders overview</b>
        </div>
      </div>
      <div className={styles.firstCard}>
        <div className={styles.list} />
        <div className={styles.list}>
          {/* Table goes here */}
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Item 1</td>
                <td>$50</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Item 2</td>
                <td>$150</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        <div className={styles.text1}>
          <div className={styles.doneThisMonthContainer}>
            <b>30 done</b>
            <span> this month</span>
          </div>
          <img
            className={styles.ioniconccheckmarkccircle}
            alt=""
            src="/ioniconccheckmarkccircle@2x.png"
          />
          <b className={styles.projects}>Projects</b>
        </div>

        <img className={styles.moreVertIcon} alt="" src="/more-vert@2x.png" />
      </div>
    </div>
  );
};

export default OrderOverviewCardContainer;
