import React, { useEffect, useState, useMemo } from 'react';
import styles from "./OrderOverviewCardContainer.module.css";
import tableStyles from "./TableComponents.module.css";
import switchStyles from "./SwitchComponent.module.css";


const NumericTextBox = ({ name, marginLeft, onChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue)) {
      setValue(newValue); // Update the local state
      onChange(newValue); // Call the onChange function passed as prop
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: marginLeft }}>
      <input
        name={name}
        type="number"
        value={value}
        onChange={handleChange}
        step="0.1"
        min="0"
        style={{ width: '45px' }}
      />
    </div>
  );
};

const OrderOverviewCardContainer = () => {
  const [apiData, setApiData] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [checkboxStates, setCheckboxStates] = useState({
    checkboxPE: false,
    checkboxEPSt: false,
    checkboxEPSf: false,
    checkboxPtB: false,
    checkboxBPS: false,
  });
  
  const [numericalValues, setNumericalValues] = useState({
    minPriceEarnings: 0,
    minEPStrailing: 0,
    minEPSforward: 0,
    minPriceToBook: 0,
    minBook: 0,
  
    maxPriceEarnings: 0,
    maxEPStrailing: 0,
    maxEPSforward: 0,
    maxPriceToBook: 0,
    maxBook: 0,
  });

  const countTrueCheckboxes = (states) => {
    return Object.values(states).filter(value => value === true).length;
  };

  const fetchData = async () => {
    try {
      const response = await fetch('https://import-api-data-database-59ec3b290015.herokuapp.com/api/data');
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxStates(prevStates => ({
      ...prevStates,
      [name]: checked
    }));
  };
  
  const handleNumericalValueChange = (name, newValue) => {
    setNumericalValues(prevValues => ({
      ...prevValues,
      [name]: newValue
    }));
  };
  
  const getSortedData = (data, sortConfig) => {
    if (!data) return [];
  
    let sortableItems = [...data];
    if (sortConfig && sortConfig.key) {
      sortableItems.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];
  
        // Check if the values are numbers
        const aValueIsNumber = !isNaN(aValue) && !isNaN(parseFloat(aValue));
        const bValueIsNumber = !isNaN(bValue) && !isNaN(parseFloat(bValue));
  
        if (aValueIsNumber && bValueIsNumber) {
          aValue = parseFloat(aValue);
          bValue = parseFloat(bValue);
        }
  
        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  };
  
  const getFilteredData = () => {
    return apiData.filter(item => {
      if (checkboxStates.checkboxPE) {
        const value = parseFloat(item["P/L"]);
        if (isNaN(value) || value < numericalValues.minPriceEarnings || value > numericalValues.maxPriceEarnings) {
          return false;
        }
      }
      if (checkboxStates.checkboxEPSt) {
        const value = parseFloat(item["LPA trailing"]);
        if (isNaN(value) || value < numericalValues.minEPStrailing || value > numericalValues.maxEPStrailing) {
          return false;
        }
      }
      if (checkboxStates.checkboxEPSf) {
        const value = parseFloat(item["LPA forward"]);
        if (isNaN(value) || value < numericalValues.minEPSforward || value > numericalValues.maxEPSforward) {
          return false;
        }
      }
      if (checkboxStates.checkboxPtB) {
        const value = parseFloat(item["P/VPA"]);
        if (isNaN(value) || value < numericalValues.minPriceToBook || value > numericalValues.maxPriceToBook) {
          return false;
        }
      }  
      if (checkboxStates.checkboxBPS) {
        const value = parseFloat(item["VPA"]);
        if (isNaN(value) || value < numericalValues.minBook || value > numericalValues.maxBook) {
          return false;
        }
      }   
      // Add more conditions as needed
  
      return true;
    });
  };
  
  const renderTableData = (data) => {
    const filteredData = getFilteredData();
    const sortedFilteredData = getSortedData(filteredData, sortConfig);
  
    return sortedFilteredData.map((item, index) => (
      <tr key={index} className={tableStyles.row}>
        <td className={tableStyles.cell}>{item["Ação"] ?? "N/A"}</td>
        <td className={tableStyles.cell}>{item["LPA forward"] ?? "N/A"}</td>
        <td className={tableStyles.cell}>{item["LPA trailing"] ?? "N/A"}</td>
        <td className={tableStyles.cell}>{item["P/L"] ?? "N/A"}</td>
        <td className={tableStyles.cell}>{item["P/VPA"] ?? "N/A"}</td>
        <td className={tableStyles.cell}>{item["VPA"] ?? "N/A"}</td>
      </tr>
    ));
  };
 
  return (
    <div className={styles.contentCards}>
      <div className={styles.secondCard}>
        <div>
          <b className={styles.title}>Filtros</b>
        </div>
        <div className={styles.subtitle}>
          <span><b>{Object.keys(checkboxStates).length} filtros</b> disponíveis</span>
        </div>
        <div className={styles.subtitle}>
          <span><b>{countTrueCheckboxes(checkboxStates)} filtros</b> ativos</span>
        </div>
        <img
            className={styles.ioniconccheckmarkccircle}
            alt=""
            src="/ioniconccheckmarkccircle1@2x.png"
          />
        <div className={styles.listFilters}>
          <div className={switchStyles.container}>
            <span className={switchStyles.label}>P/L</span> {/* Add the text element */}
              <label className={switchStyles.switch}>
                <input type="checkbox"
                      name="checkboxPE"
                      checked={checkboxStates.checkboxPE}
                      onChange={(event) => {
                        handleCheckboxChange(event);
                      }} />
                <span className={switchStyles.slider}>
                  <span className={switchStyles.text} style={{ marginLeft: '35px', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                  &gt;
                  </span>
                </span>
              </label>
              <NumericTextBox
                name="minPriceEarnings"
                value={numericalValues.minPriceEarnings}
                onChange={(newValue) => {
                  handleNumericalValueChange("minPriceEarnings", newValue);
                }}
                marginLeft="30px" />
              <span className={switchStyles.text} style={{ marginLeft: '7px', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                &lt;
              </span>
              <NumericTextBox
                name="maxPriceEarnings"
                value={numericalValues.maxPriceEarnings}
                onChange={(newValue) => {
                  handleNumericalValueChange("maxPriceEarnings", newValue);
                }}
                marginLeft="10px" />
            </div>
            <div className={switchStyles.container}>
            <span className={switchStyles.label}>LPAt</span> {/* Add the text element */}
              <label className={switchStyles.switch}>
              <input type="checkbox"
                      name="checkboxEPSt"
                      checked={checkboxStates.checkboxEPSt}
                      onChange={(event) => {
                        handleCheckboxChange(event);
                      }} />
                <span className={switchStyles.slider}>
                  <span className={switchStyles.text} style={{ marginLeft: '35px', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                  &gt;
                  </span>
                </span>
              </label>
              <NumericTextBox
                name="minEPStrailing"
                value={numericalValues.minEPStrailing}
                onChange={(newValue) => {
                  handleNumericalValueChange("minEPStrailing", newValue);
                }}
                marginLeft="30px" />
              <span className={switchStyles.text} style={{ marginLeft: '7px', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                &lt;
              </span>
              <NumericTextBox
                name="maxEPStrailing"
                value={numericalValues.maxEPStrailing}
                onChange={(newValue) => {
                  handleNumericalValueChange("maxEPStrailing", newValue);
                }}
                marginLeft="10px" />
            </div>
            <div className={switchStyles.container}>
            <span className={switchStyles.label}>LPAf</span> {/* Add the text element */}
              <label className={switchStyles.switch}>
              <input type="checkbox"
                      name="checkboxEPSf"
                      checked={checkboxStates.checkboxEPSf}
                      onChange={(event) => {
                        handleCheckboxChange(event);
                      }} />
                <span className={switchStyles.slider}>
                  <span className={switchStyles.text} style={{ marginLeft: '35px', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                  &gt;
                  </span>
                </span>
              </label>
              <NumericTextBox
                name="minEPSforward"
                value={numericalValues.minEPSforward}
                onChange={(newValue) => {
                  handleNumericalValueChange("minEPSforward", newValue);
                }}
                marginLeft="30px" />
              <span className={switchStyles.text} style={{ marginLeft: '7px', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                &lt;
              </span>
              <NumericTextBox
                name="maxEPSforward"
                value={numericalValues.maxEPSforward}
                onChange={(newValue) => {
                  handleNumericalValueChange("maxEPSforward", newValue);
                }}
                marginLeft="10px" />
            </div>
            <div className={switchStyles.container}>
            <span className={switchStyles.label}>P/VPA</span> {/* Add the text element */}
              <label className={switchStyles.switch}>
              <input type="checkbox"
                      name="checkboxPtB"
                      checked={checkboxStates.checkboxPtB}
                      onChange={(event) => {
                        handleCheckboxChange(event);
                      }} />
                <span className={switchStyles.slider}>
                  <span className={switchStyles.text} style={{ marginLeft: '35px', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                  &gt;
                  </span>
                </span>
              </label>
              <NumericTextBox
                name="minPriceToBook"
                value={numericalValues.minPriceToBook}
                onChange={(newValue) => {
                  handleNumericalValueChange("minPriceToBook", newValue);
                }}
                marginLeft="30px" />
              <span className={switchStyles.text} style={{ marginLeft: '7px', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                &lt;
              </span>
              <NumericTextBox
                name="maxPriceToBook"
                value={numericalValues.maxPriceToBook}
                onChange={(newValue) => {
                  handleNumericalValueChange("maxPriceToBook", newValue);
                }}
                marginLeft="10px" />
            </div>
            <div className={switchStyles.container}>
            <span className={switchStyles.label}>VPA</span> {/* Add the text element */}
              <label className={switchStyles.switch}>
              <input type="checkbox"
                      name="checkboxBPS"
                      checked={checkboxStates.checkboxBPS}
                      onChange={(event) => {
                        handleCheckboxChange(event);
                      }} />
                <span className={switchStyles.slider}>
                  <span className={switchStyles.text} style={{ marginLeft: '35px', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                  &gt;
                  </span>
                </span>
              </label>
              <NumericTextBox
                name="minBook"
                value={numericalValues.minBook}
                onChange={(newValue) => {
                  handleNumericalValueChange("minBook", newValue);
                }}
                marginLeft="30px" />
              <span className={switchStyles.text} style={{ marginLeft: '7px', whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                &lt;
              </span>
              <NumericTextBox
                name="maxBook"
                value={numericalValues.maxBook}
                onChange={(newValue) => {
                  handleNumericalValueChange("maxBook", newValue);
                }}
                marginLeft="10px" />
            </div>
        </div>
      </div>

      <div className={styles.firstCard}>
        <div>
          <b className={styles.title}>Ações</b>
        </div>
        <div className={styles.subtitle}>
          <span><b>{apiData ? apiData.length : 0} ativos</b> importados</span>
        </div>
        <div className={styles.subtitle}>
          <span><b>X ativos</b> filtrados</span>
        </div>
        <img
            className={styles.ioniconccheckmarkccircle}
            alt=""
            src="/ioniconccheckmarkccircle1@2x.png"
          />
        {/* Container for the table */}
        <div className={styles.listTickers}>
          {!apiData ? <p>Loading data...</p> : (
            <div className={tableStyles.tableContainer}>
            <table className={tableStyles.table}>
              <thead>
              <tr className={tableStyles.header}>
                    <th className={tableStyles.headerCell} onClick={() => requestSort('Ação')}>Ação</th>
                    <th className={tableStyles.headerCell} onClick={() => requestSort('LPA forward')}>LPA Forward</th>
                    <th className={tableStyles.headerCell} onClick={() => requestSort('LPA trailing')}>LPA Trailing</th>
                    <th className={tableStyles.headerCell} onClick={() => requestSort('P/L')}>P/L</th>
                    <th className={tableStyles.headerCell} onClick={() => requestSort('P/VPA')}>P/VPA</th>
                    <th className={tableStyles.headerCell} onClick={() => requestSort('VPA')}>VPA</th>
                  </tr>
              </thead>
              <tbody>
                {renderTableData()}
              </tbody>
            </table>
            </div>
          )}
        </div>
        <img className={styles.moreVertIcon} alt="" src="/more-vert@2x.svg" />
      </div>
    </div>
  );
};

export default OrderOverviewCardContainer;
