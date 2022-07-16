const axios = require('axios').default;
const API_KEY = process.env.NASA_API_KEY;

async function getApod(req, res){
    const {date, start_date, end_date} = req.query;
    //const date = "2022-05-16";
    //axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}&start_date=${start_date}&end_date=${end_date}`)
    //axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
    axios.get(`https://api.nasa.gov/planetary/apod`, {

        params: {
            api_key: API_KEY,
            date: date,
            start_date: start_date,
            end_date: end_date
        }
    })
    .then((response)=>{res.json(response.data)})
    .catch(err=>{
        const {status} = err.response;
        const {error} = err.response.data;
        res.status(status);
        res.json(error);
    })

}


module.exports = { getApod };