import styles from "./FirstCard.module.css";

const FirstCard = () => {
  return (
    <div className={styles.firstCard}>
      <div className={styles.cards}>
        <div className={styles.items}>
          <img className={styles.progressIcon} alt="" src="/progress@2x.png" />
          <div className={styles.text}>
            <b className={styles.items1}>Items</b>
            <b className={styles.b}>320</b>
          </div>
          <img className={styles.icon} alt="" src="/icon@2x.png" />
        </div>
        <div className={styles.sales}>
          <img className={styles.progressIcon} alt="" src="/progress@2x.png" />
          <div className={styles.text}>
            <b className={styles.items1}>Sales</b>
            <b className={styles.b1}>2,400$</b>
          </div>
          <img className={styles.icon1} alt="" src="/icon1@2x.png" />
        </div>
        <div className={styles.clicks}>
          <img className={styles.progressIcon} alt="" src="/progress@2x.png" />
          <div className={styles.text2}>
            <b className={styles.clicks1}>Clicks</b>
            <b className={styles.m}>2,42m</b>
          </div>
          <img className={styles.icon1} alt="" src="/icon2@2x.png" />
        </div>
        <div className={styles.users}>
          <img className={styles.progressIcon} alt="" src="/progress@2x.png" />
          <div className={styles.text3}>
            <b className={styles.users1}>Users</b>
            <b className={styles.b1}>32,984</b>
          </div>
          <img className={styles.icon1} alt="" src="/icon3@2x.png" />
        </div>
      </div>
      <div className={styles.text4}>
        <div className={styles.thanLastWeekContainer}>
          <b>(+23)</b>
          <span className={styles.thanLastWeek}> than last week</span>
        </div>
        <b className={styles.activeUsers}>Active Users</b>
      </div>
      <div className={styles.graph}>
        <div className={styles.lines}>
          <div className={styles.linesChild} />
          <div className={styles.linesItem} />
          <div className={styles.linesInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.linesChild1} />
          <div className={styles.linesChild2} />
          <div className={styles.linesChild3} />
          <div className={styles.linesChild4} />
          <div className={styles.linesChild5} />
        </div>
        <div className={styles.data}>
          <b className={styles.b3}>0</b>
          <b className={styles.b4}>100</b>
          <b className={styles.b5}>200</b>
          <b className={styles.b6}>300</b>
          <b className={styles.b7}>400</b>
          <b className={styles.b8}>500</b>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
