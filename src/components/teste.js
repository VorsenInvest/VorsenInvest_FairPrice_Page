const MyDualSlider = () => {
    const [sliderValues, setSliderValues] = useState([0, 100]);
  
    const handleSliderChange = (values) => {
      setSliderValues(values);
    };
  
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0' }}>
          <p>{sliderValues[0]}</p>
          <p>{sliderValues[1]}</p>
        </div>
        <Slider
          min={0}
          max={100}
          step={1}
          values={sliderValues}
          onChange={handleSliderChange}
          withBars
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                height: '6px',
                backgroundColor: '#CECECE',
                width: '280px',
                borderRadius: '3px',
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: '#1792E8',
                boxShadow: '0px 3px 1px rgba(0,0,0,0.1)',
              }}
            />
          )}
        />
      </div>
    );
  };