import styles from "./PurityUiDashboardSidebarContai.module.css"; // Import CSS module for styling.
import React, { useState } from "react"; // Import React and useState hook from React library.
import OrderOverviewCardContainer from "./OrderOverviewCardContainer"; // Import a custom component named OrderOverviewCardContainer.

const PurityUiDashboardSidebarContai = () => {
  // Define the state to hold the HTML content
  const [htmlContent, setHtmlContent] = useState(""); // Initialize a state variable 'htmlContent' with default empty string.

  // Define the function to fetch data from Flask
  const fetchDataFromFlask = async () => { // Define an asynchronous function to fetch data.
    try {
      // Make a request to your Flask endpoint
      const response = await fetch(
        "https://vorsen-invest-fair-price-e93b96173314.herokuapp.com/fair_price_in_out",
      ); // Fetch data from the specified Flask endpoint.

      // Check if the response status is OK (200)
      if (response.ok) {
        // Get the HTML content from the response
        const data = await response.text(); // Convert the response to text (HTML).

        // Update the state with the HTML content
        setHtmlContent(data); // Update the state 'htmlContent' with the fetched data.
      } else {
        console.error("Error fetching data:", response.status); // Log an error if the response status is not OK.
      }
    } catch (error) {
      console.error("Error fetching data:", error); // Catch and log any errors during the fetch process.
    }
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.needHelp}>
        <div className={styles.needHelpChild} />
        <div className={styles.backgroundParent}>
          <img
            className={styles.backgroundIcon}
            alt=""
            src="/background1@2x.png"
          />
          <div className={styles.buttonbase}>
            <div className={styles.widthStructure}>
              <div className={styles.heightStructure}>
                <div className={styles.buttonBody}>
                  <div className={styles.icon}>
                    <div className={styles.div}></div>
                  </div>
                  <b className={styles.text}>DOCUMENTATION</b>
                  <div className={styles.icon}>
                    <div className={styles.div}></div>
                  </div>
                </div>
              </div>
              <div className={styles.minwidth}>
                <div className={styles.content} />
              </div>
            </div>
          </div>
          <div className={styles.text1}>
            <div className={styles.pleaseCheckOur}>Please check our docs</div>
            <b className={styles.needHelp1}>Need help?</b>
          </div>
          <img className={styles.icon2} alt="" src="/icon9@2x.png" />
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.signUp}>
          <div className={styles.signUpChild} />
          <img
            className={styles.ioniconrrocketsharp}
            alt=""
            src="/ioniconrrocketsharp@2x.png"
          />
          <b className={styles.signUp1}>Sign Up</b>
        </div>
        <div className={styles.signIn}>
          <div className={styles.signUpChild} />
          <img
            className={styles.ioniconrrocketsharp}
            alt=""
            src="/ioniconddocumentdefault@2x.png"
          />
          <b className={styles.signIn1}>Sign In</b>
        </div>
        <div className={styles.profile}>
          <div className={styles.signUpChild} />
          <img
            className={styles.ioniconrrocketsharp}
            alt=""
            src="/ioniconppersondefault1@2x.png"
          />
          <b className={styles.profile1}>Profile</b>
        </div>
        <b className={styles.accountPages}>ACCOUNT PAGES</b>
        <div className={styles.rtl}>
          <div className={styles.signUpChild} />
          <img
            className={styles.ioniconrrocketsharp}
            alt=""
            src="/ioniconbbuilddefault@2x.png"
          />
          <b className={styles.rtl1}>RTL</b>
        </div>
        <div className={styles.billing}>
          <div className={styles.signUpChild} />
          <img
            className={styles.ioniconrrocketsharp}
            alt=""
            src="/ioniconccarddefault1@2x.png"
          />
          <b className={styles.billing1}>Billing</b>
        </div>
        <button className={styles.tables} onClick={fetchDataFromFlask}>
          <div className={styles.signUpChild} />
          <img
            className={styles.ioniconrrocketsharp}
            alt=""
            src="/ioniconsstatschart@2x.png"
          />
          <b className={styles.tables1}>Tables</b>
        </button>
        <div className={styles.dashboard}>
          <div className={styles.dashboardChild} />
          <img
            className={styles.ioniconhhomedefault}
            alt=""
            src="/ioniconhhomedefault@2x.png"
          />
          <b className={styles.dashboard1}>Dados dos Ativos</b>
        </div>
      </div>
      <div className={styles.logo}>
        <b className={styles.purityUiDashboard}>VORSEN INVEST</b>
        <img className={styles.icon3} alt="" src="/icon10@2x.png" />
      </div>
      <img className={styles.sidebarChild} alt="" src="/vector-6@2x.png" />
    </div>
  );
};

export default PurityUiDashboardSidebarContai;
