import BreadcrumbItemPrevious from "./BreadcrumbItemPrevious";
import styles from "./DashboardContainer.module.css";



const DashboardContainer = () => {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.menu}>
        <div className={styles.inputwithaddons}>
          <div className={styles.autoAddedFrame}>
            <div className={styles.addon}>
              <img className={styles.icon} alt="" src="/icon8@2x.png" />
              <div className={styles.addons}>Addons</div>
            </div>
          </div>
          <div className={styles.inputfieldtext}>
            <div className={styles.typeHere}>Type here...</div>
            <img
              className={styles.passwordTextIcon}
              alt=""
              src="/password-text@2x.png"
            />
            <div className={styles.minwidth}>
              <div className={styles.content} />
            </div>
          </div>
        </div>
        <div className={styles.listitemdefault}>
          <img
            className={styles.ioniconppersondefault}
            alt=""
            src="/ioniconppersondefault@2x.png"
          />
          <b className={styles.signIn}>Sign In</b>
        </div>
        <img
          className={styles.ioniconssettingssharp}
          alt=""
          src="/ioniconssettingssharp@2x.png"
        />
        <img
          className={styles.ioniconnnotificationsdefaul}
          alt=""
          src="/ioniconnnotificationsdefault1@2x.png"
        />
      </div>
      <div className={styles.text}>
        <b className={styles.dashboard}>Dashboard</b>
        <BreadcrumbItemPrevious
          breadcrumbItemPreviousWidth="45px"
          breadcrumbItemPreviousPosition="absolute"
          breadcrumbItemPreviousTop="0px"
          breadcrumbItemPreviousLeft="0px"
          breadcrumbFontSize="12px"
          breadcrumbColor="unset"
          breadcrumbWhiteSpace="pre-wrap"
        />
      </div>
    </div>
  );
};

export default DashboardContainer;
