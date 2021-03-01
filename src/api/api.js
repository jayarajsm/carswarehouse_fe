
import axios from 'axios';

const url = 'http://localhost:8080/warehouse/allCars';

export const fetchData = async () => 
{

    return await axios.get(url);

}
