import React from 'react';
import Accordion from './Accordion';

const Cars = (props) => {
    
    const cars = props.cars;

    const showMoreDetails = (car) => {
        return <div className="cardetails">
            {`Price: `}{car.price} <br />
            {`Year: `}{car.year_model} <br />
            {`Available at `}{car.warehouseName} , {car.location} <br />
            {`Newly added on `} {car.date_added}<br />

        </div>;
    }

    return cars && cars.map((car, index) => {

        return <div className="wrapper">
            <Accordion title={`${car.make} ${car.model}`}>
                {showMoreDetails(car)}
            </Accordion>
        </div>
    });

}

export default Cars;
