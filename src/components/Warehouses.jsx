import React, {useEffect, useState} from 'react';
import { fetchData } from "../api/api";
import Cars from './Cars';

const Warehouses =  () => {

    const [warehouses, setWarehouses] = useState([]);

	useEffect(() => {
        if(warehouses.length === 0) {
            fetchData().then(response => {
                setWarehouses(response.data.cars);
            })
        }
    }, [warehouses]);


    return warehouses && <Cars {...{cars: warehouses}}/>;
}
export default Warehouses;
