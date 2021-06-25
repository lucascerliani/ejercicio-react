import { FormControl, Row, Col, Container } from 'react-bootstrap';
import Slider from 'rc-slider';
import { useState } from 'react';
import 'rc-slider/assets/index.css';
import '../css/SliderSection.css';

const SliderSection = ({sliderName, minValue, maxValue, shouldShowCurrency, valueSetter}) => {

  const [sliderValue, setSliderValue] = useState(minValue);

  const [inputValue, setInputValue] = useState(minValue);

  const [validInput, setValidInput] = useState(true);

  const [isEditing, setIsEditing] = useState(false);

  const onSliderChange = value => {
      setInputValue(value);
      setSliderValue(value);
      valueSetter(value);
  };

  const onInputChange = e => {
    let value = e.target.value
    setInputValue(value);
    if(value >= minValue && value <= maxValue){
      setSliderValue(value);
      valueSetter(value);
      setValidInput(true);
    }else{
      setValidInput(false);
      console.log(value);
    }
  };

  const shouldShowCurrencyAndFormatValue = value => {
    return(
      (shouldShowCurrency ? "$ " : "") + new Intl.NumberFormat("de-DE").format(value)
    )
  };


  return (
    <Container className="px-0 mb-5">
      <Row className="mb-3 justify-content-between">
          <Col className="text-white col-5 text-start d-flex align-items-center fw-5">
            {sliderName}
          </Col>
          <Col className="col-4 text-end">
            <FormControl 
              className={(validInput ? "" : "border border-danger ") + "rounded-0 bg-transparent text-white fw-bold fs-4 text-center p-0"}
              value={isEditing ? inputValue : shouldShowCurrencyAndFormatValue(inputValue)}
              onChange={onInputChange}
              onFocus={() => setIsEditing(true)}
              onBlur={() => setIsEditing(false)}
            />
            {!validInput &&
              <div className="fs-6 fw-bold fst-italic text-danger text-start">El valor está fuera del rango.</div>
            }
          </Col>
      </Row>
      <Row>
        <Col className="mx-5">
          <Slider className="mb-1" value={sliderValue} min={minValue} max={maxValue} step={1} onChange={onSliderChange} />
        </Col>
      </Row>
      <Row className="justify-content-between text-white">
        <Col className="col-6 text-start">{shouldShowCurrencyAndFormatValue(minValue)}</Col>
        <Col className="col-6 text-end">{shouldShowCurrencyAndFormatValue(maxValue)}</Col>
      </Row>
    </Container>
  );
};

export default SliderSection;