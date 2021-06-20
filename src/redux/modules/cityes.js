import axios from 'axios'

const moduleName = 'cityes'

const GET_CITYES = `${moduleName}/GET_CITYES`
const GET_MAIN_CITY = `${moduleName}/GET_MAIN_CITY`
const DELETE_CITY = `${moduleName}/DELETE_CITY`
const ADD_CITY = `${moduleName}/ADD_CITY`


const defaultState = {
    maincity: [{
        // cityName: 'Kazan',
        // temperature: 30,
        // weather: 'c',
        // icon: '01d'
    }]
    ,
    cityes: [
        {
            cityName: 'Moscow',
            temperature: 30,
            weather: 'жарко',
            icon: '03d'

        },
        {
            cityName: 'NewYork',
            temperature: 25,
            weather: 'норм',
            icon: '02d'

        },

        {
            cityName: 'London',
            temperature: 27,
            weather: 'good',
            icon: '01d'

        }
    ]
}


export default (state = defaultState, { type, payload }) => {
    debugger
    switch (type) {
        case GET_MAIN_CITY:
            return {
                ...state,
                maincity: [{
                    cityName: payload.name,
                    temperature: (Math.round(payload.main.temp - 273.15)),
                    weather: payload.weather[0].main,
                    icon: payload.weather[0].icon
                }]
            }
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
        case ADD_CITY:
            return {
                ...state,
                cityes: [
                    ...state.cityes,
                    {
                        cityName: payload.name,
                        temperature: (Math.round(payload.main.temp - 273.15)),
                        weather: payload.weather[0].main,
                        icon: payload.weather[0].icon
                    }]
            }
        case DELETE_CITY:
            return {
                ...state,
                cityes: state.cityes.filter(item => item.cityName !== payload.cityName)
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
        )
            .then((data) => dispatch({ type: GET_MAIN_CITY, payload: data.data }))

    } catch (err) {
        console.log(err)
    }
}

export const addCity = (cityName) => async (dispatch) => {
    try {
        await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
        )
            .then((data) => dispatch({ type: ADD_CITY, payload: data.data }))

    } catch (err) {
        console.log(err)
    }
}

export const deleteCity = (cityName) => (dispatch) => {
    dispatch({ type: DELETE_CITY, payload: { cityName } })

}
// }