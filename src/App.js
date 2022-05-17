import React, { useState } from 'react';
import './App.css';
import { Container, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ height, setHeight ] = useState();
  const [ weight, setWeight ] = useState();
  const [ bmi, setBmi ] = useState();
  const [ bmiDesc, setBmiDesc ] = useState();

  const calcBmi = (event) => {

    let curBmi = (Math.round(((weight/(height/100)**2)*10))/10);

    setBmi('Your BMI is: ' + curBmi);

    if (curBmi < 18.5) {
      setBmiDesc('You are underweight')
    } else if (curBmi >= 18.5 && curBmi < 25) {
      setBmiDesc('You are normal weight')
    } else if (curBmi >= 25 && curBmi < 30) {
      setBmiDesc('You are overweight')
    } else {
      setBmiDesc('You are obese')
    }

    event.preventDefault();
  }


  return (
    <div className='App-header'>
      <Container className='col-6'>
        <Card className='bg-light text-dark'>
          <Card.Body>
            <Card.Title className='text-center'><h1>Calculate your BMI</h1></Card.Title>
            <Card.Text>

              <Form className='mb-4' onSubmit={calcBmi}>

                <Form.Group className="mb-4" controlId="formHeight">
                  <Form.Label className='h4'>Enter your height in CM (100-250)</Form.Label>
                  <Form.Control className='w-50' type="number" min={100} max={250} step={1} value={height} onChange={(e) => setHeight(e.target.value)}/>
                  <Form.Range min={100} max={250} step={1} value={height} onChange={(e) => setHeight(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formWeight">
                  <Form.Label className='h4'>Enter your weight in KG (20-200)</Form.Label>
                  <Form.Control className='w-50' type="number" min={20} max={200} step={0.1} value={weight} onChange={(e) => setWeight(e.target.value)}/>
                  <Form.Range min={20} max={200} step={0.1} value={weight} onChange={(e) => setWeight(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>

              </Form>

              {bmi}
              <br/>
              {bmiDesc}

              <table className='table table-striped fs-6 mt-4 w-50'>
                <thead className='h4'>BMI Categories</thead>
                <tbody>
                  <tr>
                    <td>Underweight</td>
                    <td>Under 18.5</td>
                  </tr>
                  <tr>
                    <td>Normal weight</td>
                    <td>18.5–24.9</td>
                  </tr>
                  <tr>
                    <td>Overweight</td>
                    <td>25–29.9</td>
                  </tr>
                  <tr>
                    <td>Obese</td>
                    <td>30 or greater</td>
                  </tr>
                </tbody>
              </table>

            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
