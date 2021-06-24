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
        today: {
            temperature: 30,
            icon: '01d',
            sunrise: '',
            sunset: ''
        },
        tomorrow: {
            temperature: 30,
            icon: '01d',
            sunrise: '',
            sunset: '',
        },
        currentCityActive: false,
    },
    cityes: [
        {
            cityName: 'Moscow',
            temperature: 30,
            weather: 'жарко',
            icon: '03d',
            lat: '55.7522',
            lon: '37.6156'

        },
        {
            cityName: 'New York',
            temperature: 25,
            weather: 'норм',
            icon: '02d',
            lat: '40.7143',
            lon: '-74.006'

        },

        {
            cityName: 'London',
            temperature: 27,
            weather: 'good',
            icon: '01d',
            lat: '51.5085',
            lon: '-0.1257'

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
            debugger
            return {
                ...state,
                cityes: [
                    ...state.cityes,
                    {
                        cityName: payload.name,
                        temperature: (Math.round(payload.main.temp - 273.15)),
                        weather: payload.weather[0].main,
                        icon: payload.weather[0].icon,
                        lat: payload.coord.lat,
                        lon: payload.coord.lon
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
            debugger
            return {
                ...state,
                currentCity: {
                    // cityName: cityName,
                    currentCityActive: true,
                    today: {
                        temperature: (Math.round(payload.daily[0].temp.day - 273.15)),
                        icon: payload.daily[0].weather[0].icon,
                        sunrise: payload.daily[0].sunrise,
                        sunset: payload.daily[0].sunset
                    },
                    tomorrow: {
                        temperature: (Math.round(payload.daily[1].temp.day - 273.15)),
                        icon: payload.daily[1].weather[0].icon,
                        sunrise: payload.daily[1].sunrise,
                        sunset: payload.daily[1].sunset
                    },
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

export const currentCityCall = (cityName, lat, lon) => async (dispatch) => {
    try {
        await axios.get(
            // `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
            // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        )

            .then((data) => dispatch({ type: CURRENT_CITY_CALL, payload: data.data, cityName }))
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


