import axios from 'axios';

export const fetchData = async (api, dataSetter, errorSetter = null) => {
    try {
        errorSetter(false);
        const { data } = await axios.get(api);

        dataSetter(data.total);
    } 
    catch (err) {
        errorSetter(true);
    }
}