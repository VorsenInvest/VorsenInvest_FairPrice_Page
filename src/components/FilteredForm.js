import ButtonDefaultLargeLinkDefa from "./ButtonDefaultLargeLinkDefa";
import styles from "./FilteredForm.module.css";

const FilteredForm = () => {
  return (
    <div className={styles.bigCards}>
      <div className={styles.secondCard}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/background@2x.png"
        />
        <div className={styles.text}>
          <div className={styles.link}>
            <ButtonDefaultLargeLinkDefa
              text="Read more"
              buttonDefaultLargeLinkDefAlignItems="center"
              buttonDefaultLargeLinkDefJustifyContent="center"
              buttonDefaultLargeLinkDefPosition="absolute"
              buttonDefaultLargeLinkDefTop="0px"
              buttonDefaultLargeLinkDefLeft="0px"
              buttonDefaultLargeLinkDefWidth="50.5px"
              buttonBaseHeight="24px"
              buttonBasePadding="0px var(--padding-xs)"
              heightStructureHeight="24px"
              buttonBodyGap="4px"
              iconPadding="0px var(--padding-12xs-5)"
              divFontSize="11px"
              divLineHeight="12px"
              textFontSize="10px"
              textColor="#fff"
              iconPadding1="0px var(--padding-12xs-5)"
              divFontSize1="11px"
              divLineHeight1="12px"
              minWidthPadding="0px var(--padding-xs)"
              contentBackgroundColor="#fff"
            />
            <img
              className={styles.ioniconaarrowforward}
              alt=""
              src="/ioniconaarrowforward@2x.png"
            />
          </div>
          <div className={styles.wealthCreationIsContainer}>
            <p className={styles.wealthCreationIs}>
              Wealth creation is an evolutionarily recent positive-sum game.
            </p>
            <p className={styles.wealthCreationIs}>
              It is all about who take the opportunity first.
            </p>
          </div>
          <b className={styles.workWithThe}>Work with the Rockets</b>
        </div>
      </div>
      <div className={styles.firstCard}>
        <div className={styles.text1}>
          <div className={styles.link1}>
            <ButtonDefaultLargeLinkDefa
              text="Read more"
              buttonDefaultLargeLinkDefAlignItems="center"
              buttonDefaultLargeLinkDefJustifyContent="center"
              buttonDefaultLargeLinkDefPosition="absolute"
              buttonDefaultLargeLinkDefTop="0px"
              buttonDefaultLargeLinkDefLeft="0px"
              buttonDefaultLargeLinkDefWidth="50.5px"
              buttonBaseHeight="24px"
              buttonBasePadding="0px var(--padding-xs)"
              heightStructureHeight="24px"
              buttonBodyGap="4px"
              iconPadding="0px var(--padding-12xs-5)"
              divFontSize="11px"
              divLineHeight="12px"
              textFontSize="10px"
              textColor="#2d3748"
              iconPadding1="0px var(--padding-12xs-5)"
              divFontSize1="11px"
              divLineHeight1="12px"
              minWidthPadding="0px var(--padding-xs)"
              contentBackgroundColor="#c4c4c4"
            />
            <img
              className={styles.ioniconaarrowforward}
              alt=""
              src="/ioniconaarrowforward@2x.png"
            />
          </div>
          <div className={styles.fromColorsCardsContainer}>
            <p className={styles.wealthCreationIs}>
              From colors, cards, typography to complex elements,
            </p>
            <p className={styles.wealthCreationIs}>
              you will find the full documentation.
            </p>
          </div>
          <b className={styles.purityUiDashboard}>Purity UI Dashboard</b>
          <b className={styles.builtByDevelopers}>Built by developers</b>
        </div>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      </div>
    </div>
  );
};

export default FilteredForm;
