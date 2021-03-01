import React, {useEffect, useState} from 'react';
import { fetchData } from "../api/api";

const Warehouses =  () => {

    const [warehouses, setWarehouses] = useState([]);

	useEffect(() => {
        if(warehouses.length === 0) {
            fetchData().then(response => {
                setWarehouses(response.data.cars);
            })
        }
    }, [warehouses]);
    
    return warehouses && warehouses.map((warehouse, index) => {
        return <div className="header">
             {warehouses[index].make} 
             {warehouses[index].model}
              {warehouses[index].year_model}
            </div>;
    });

}
export default Warehouses;
