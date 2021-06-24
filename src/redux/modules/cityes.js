import axios from 'axios'

const moduleName = 'cityes'

const GET_CITYES = `${moduleName}/GET_CITYES`
const GET_MAIN_CITY = `${moduleName}/GET_MAIN_CITY`
const DELETE_CITY = `${moduleName}/DELETE_CITY`
const ADD_CITY = `${moduleName}/ADD_CITY`
const ERROR = `${moduleName}/ERROR`
const CURRENT_CITY_CALL = `${moduleName}/CURRENT_CITY_CALL`
const CURRENT_CITY_EXIT = `${moduleName}/CURRENT_CITY_EXIT`
const SEARCH_CITY_HANDLE = `${moduleName}/SEARCH_CITY_HANDLE`


const defaultState = {
    maincity: [{
        // cityName: 'Kazan',
        // temperature: 30,
        // weather: 'c',
        // icon: '01d'
    }]
    ,
    error: '',
    searchCityActive: false,
    currentCity: {
        cityName: 'Kazan',
        temperature: 30,
        icon: '01d',
        sunrise: '',
        sunset: '',
        currentCityActive: false
    },
    cityes: [
        {
            cityName: 'Moscow',
            temperature: 30,
            weather: 'жарко',
            icon: '03d'

        },
        {
            cityName: 'New York',
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
        case ERROR:
            return { ...state, error: payload.err.response.data.message }
        case CURRENT_CITY_CALL:
            return {
                ...state,
                currentCity: {
                    cityName: payload.name,
                    temperature: (Math.round(payload.main.temp - 273.15)),
                    icon: payload.weather[0].icon,
                    sunrise: payload.sys.sunrise,
                    sunset: payload.sys.sunset,
                    currentCityActive: true
                },
            }
        case CURRENT_CITY_EXIT:
            return {
                ...state,
                currentCity: {
                    ...state.currentCity,
                    currentCityActive: false
                },
            }
        case SEARCH_CITY_HANDLE:
            return {
                ...state,
                searchCityActive: payload

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

export const addCity = (cityName, cityId) => async (dispatch) => {
    try {
        await axios.get(cityName ?
            (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`) :
            (`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}`)
        )
            .then((data) => dispatch({ type: ADD_CITY, payload: data.data }))

    } catch (err) {
        dispatch({ type: ERROR, payload: { err } })
    }
}

export const deleteCity = (cityName) => (dispatch) => {
    dispatch({ type: DELETE_CITY, payload: { cityName } })

}

export const currentCityCall = (cityName) => async (dispatch) => {
    try {
        await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
            // `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&appid=${API_KEY}`

        )

            .then((data) => dispatch({ type: CURRENT_CITY_CALL, payload: data.data }))

    } catch (err) {
        dispatch({ type: ERROR, payload: { err } })
    }
}

export const currentCityExit = () => (dispatch) => {
    dispatch({ type: CURRENT_CITY_EXIT })

}
export const searchCityHandle = (payload) => (dispatch) => {
    dispatch({ type: SEARCH_CITY_HANDLE, payload: payload })
}


