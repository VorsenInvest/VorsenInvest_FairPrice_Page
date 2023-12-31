import styles from "./SalesOverviewCardContainer.module.css";

const SalesOverviewCardContainer = () => {
  return (
    <div className={styles.analyticsCards}>
      <div className={styles.secondCard}>
        <div className={styles.text}>
          <div className={styles.moreIn2021Container}>
            <b>(+5) more</b>
            <span className={styles.thanLastWeek}> in 2021</span>
          </div>
          <b className={styles.salesOverview}>Sales overview</b>
        </div>
        <div className={styles.data}>
          <div className={styles.horizontal}>
            <b className={styles.dec}>Dec</b>
            <b className={styles.nov}>Nov</b>
            <b className={styles.oct}>Oct</b>
            <b className={styles.sep}>Sep</b>
            <b className={styles.aug}>Aug</b>
            <b className={styles.jul}>Jul</b>
            <b className={styles.jun}>Jun</b>
            <b className={styles.may}>May</b>
            <b className={styles.apr}>Apr</b>
            <b className={styles.mar}>Mar</b>
            <b className={styles.feb}>Feb</b>
            <b className={styles.jan}>Jan</b>
          </div>
          <div className={styles.vertical}>
            <b className={styles.b}>0</b>
            <b className={styles.b1}>100</b>
            <b className={styles.b2}>200</b>
            <b className={styles.b3}>300</b>
            <b className={styles.b4}>400</b>
            <b className={styles.b5}>500</b>
            <div className={styles.lines}>
              <div className={styles.linesChild} />
              <div className={styles.linesItem} />
              <div className={styles.linesInner} />
              <div className={styles.lineDiv} />
              <div className={styles.linesChild1} />
              <div className={styles.linesChild2} />
            </div>
          </div>
          <img className={styles.linesIcon} alt="" src="/lines@2x.png" />
        </div>
      </div>
      <div className={styles.firstCard}>
        <div className={styles.cards}>
          <div className={styles.items}>
            <img
              className={styles.progressIcon}
              alt=""
              src="/progress@2x.png"
            />
            <div className={styles.text1}>
              <b className={styles.items1}>Items</b>
              <b className={styles.b6}>320</b>
            </div>
            <img className={styles.icon} alt="" src="/icon@2x.png" />
          </div>
          <div className={styles.sales}>
            <img
              className={styles.progressIcon}
              alt=""
              src="/progress@2x.png"
            />
            <div className={styles.text1}>
              <b className={styles.items1}>Sales</b>
              <b className={styles.b7}>2,400$</b>
            </div>
            <img className={styles.icon1} alt="" src="/icon@2x.png" />
          </div>
          <div className={styles.clicks}>
            <img
              className={styles.progressIcon}
              alt=""
              src="/progress@2x.png"
            />
            <div className={styles.text3}>
              <b className={styles.clicks1}>Clicks</b>
              <b className={styles.m}>2,42m</b>
            </div>
            <img className={styles.icon1} alt="" src="/icon@2x.png" />
          </div>
          <div className={styles.users}>
            <img
              className={styles.progressIcon}
              alt=""
              src="/progress@2x.png"
            />
            <div className={styles.text4}>
              <b className={styles.users1}>Users</b>
              <b className={styles.b7}>32,984</b>
            </div>
            <img className={styles.icon1} alt="" src="/icon@2x.png" />
          </div>
        </div>
        <div className={styles.text5}>
          <div className={styles.thanLastWeekContainer}>
            <b>(+23)</b>
            <span className={styles.thanLastWeek}> than last week</span>
          </div>
          <b className={styles.activeUsers}>Active Users</b>
        </div>
        <div className={styles.graph}>
          <div className={styles.lines1}>
            <div className={styles.rectangleDiv} />
            <div className={styles.linesChild3} />
            <div className={styles.linesChild4} />
            <div className={styles.linesChild5} />
            <div className={styles.linesChild6} />
            <div className={styles.linesChild7} />
            <div className={styles.linesChild8} />
            <div className={styles.linesChild9} />
            <div className={styles.linesChild10} />
          </div>
          <div className={styles.data1}>
            <b className={styles.b9}>0</b>
            <b className={styles.b10}>100</b>
            <b className={styles.b11}>200</b>
            <b className={styles.b12}>300</b>
            <b className={styles.b13}>400</b>
            <b className={styles.b5}>500</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverviewCardContainer;
