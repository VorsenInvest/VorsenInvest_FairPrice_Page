import FirstCard from "./FirstCard";
import styles from "./SalesOverviewCardContainer.module.css";

const SalesOverviewCardContainer = () => {
  return (
    <div className={styles.analyticsCards}>
      <div className={styles.secondCard}>
        <div className={styles.text}>
          <div className={styles.moreIn2021Container}>
            <b>(+5) more</b>
            <span className={styles.in2021}> in 2021</span>
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
      <FirstCard />
    </div>
  );
};

export default SalesOverviewCardContainer;
