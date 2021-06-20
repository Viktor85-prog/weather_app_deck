import axios from 'axios'




const moduleName = 'cityes'


const GET_CITYES = `${moduleName}/GET_CITYES`


const defaultState = {
    cityes: [
        {
            //     cityName: 'Kazan',
            //     temperature: 30,
            //     weather: 'c',
            //     icon: '04d'

            // },
            // {
            //     cityName: 'Kazan',
            //     temperature: 30,
            //     weather: 'c',
            //     icon: '01d'

            // },

            // {
            //     cityName: 'London',
            //     temperature: 30,
            //     weather: 'c',
            //     icon: '01d'

        }
    ]
}


export default (state = defaultState, { type, payload }) => {
    debugger
    switch (type) {
        case GET_CITYES:
            return {
                ...state,
                cityes: [{
                    cityName: payload.name,
                    temperature: (Math.round(payload.main.temp - 273.15)),
                    weather: payload.weather[0].main,
                    icon: payload.weather[0].icon
                }]
            }
        default:
            return state
    }
}
const API_KEY = '0d56ed01b42743ed94fbfe658c541709';
const city = "Kazan"

export const getCityTemp = () => async (dispatch) => {
    try {
        await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
            // `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        )
            .then((data) => dispatch({ type: GET_CITYES, payload: data.data }))

    } catch (err) {
        console.log(err)
    }
}