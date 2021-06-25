import './css/App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import SliderSection from './Components/SliderSection';
import { useState } from 'react';

function App() {

  const montoTotalMinValue = 5000;
  const montoTotalMaxValue = 50000;
  const plazoMinValue = 3;
  const plazoMaxValue = 24;

  const [montoTotalValue, setMontoTotalValue] = useState(montoTotalMinValue);

  const [plazoValue, setPlazoValue] = useState(plazoMinValue);

  const cuotaFijaValue = montoTotalValue/plazoValue;

  return (
    <Container className="infoContainer text-center px-5">
      <h1 className="text-center mt-5 mb-5 text-white fw-bold fs-2">Simulá tu crédito</h1>
      <SliderSection
        sliderName="MONTO TOTAL" 
        minValue={montoTotalMinValue} 
        maxValue={montoTotalMaxValue} 
        shouldShowCurrency={true}
        valueSetter={setMontoTotalValue}
      />
      <SliderSection
        sliderName="PLAZO"
        minValue={plazoMinValue}
        maxValue={plazoMaxValue}
        shouldShowCurrency={false}
        valueSetter={setPlazoValue}
      />
      <Row className="justify-content-center cuota-fija mx-0 text-white">
        <Col className="col-5 col-cuota-fija d-flex align-items-center fw-bold">
          CUOTA FIJA POR MES
        </Col>
        <Col className="col-6 fs-1 fw-bold">
          $ {new Intl.NumberFormat('en-US', {maximumFractionDigits: 2}).format(cuotaFijaValue)}
        </Col>
      </Row>
      <Row className="mx-0 text-white mb-5">
        <Col className="col-8 ps-0 pe-1 obtene-credito"><Button className="w-100 h-100 fs-5 text-white fw-bold border-0 rounded-0">OBTENÉ CRÉDITO</Button></Col>
        <Col className="col-4 pe-0 ps-2 detalles-cuota"><Button className="w-100 h-100 text-white fw-bold border-0 rounded-0">VER DETALLES DE CUOTAS</Button></Col>
      </Row>
    </Container>
  );
}

export default App;
