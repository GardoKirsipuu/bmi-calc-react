import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BmiTable = () => {
    return (
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
    );
};

export default BmiTable;