import { connect } from 'react-redux'
import moment from 'moment';
import { duration } from 'moment';
import {
  getCityTemp as getCityTempAction,
  deleteCity as deleteCityAction,
  addCity as addCityAction,
  currentCityCall as currentCityCallAction,
  currentCityExit as currentCityExitAction,
  searchCityHandle as searchCityHandleAction
  // searchCityCall as searchCityCallAction
} from './redux/modules/cityes'

import MainCity from './Components/City/MainCity';
import AddButton from './Components/AddButton/AddButton';
import SearchCity from './Components/Form/SearchCity'
import KazanCity from './Components/City/KazanCity'
import { useEffect, useState } from 'react';
import AnyCity from './Components/City/AnyCity'
import CurrentCity from "./Components/Form/CarrentCity"
// import Error from './Components/Form/Error'




function App({ cityes, getCityTemp, deleteCity, addCity, currentCityCall, currentCityExit, searchCityHandle }) {
  // debugger
  // moment().format('LTS'); 
  console.log(cityes)
  console.log(cityes.currentCity.sunrise)
  console.log(cityes.currentCity.sunset)
  let sun = moment(cityes.currentCity.sunrise).format('llll');
  console.log(sun)
  // let set = moment.duration(cityes.currentCity.sunset, 'minutes').format('');
  // moment.duration(123, 'months').format()
  // console.log(set)

  useEffect(() => {
    getCityTemp()
  }, [])
  return (
    <div className="wrapper">
      <MainCity />
      {cityes.maincity.length && cityes.maincity.map(item =>
        <KazanCity
          cityName={item.cityName}
          key={item.cityName}
          temperature={item.temperature}
          weather={item.weather}
          icon={item.icon}
        />)}
      <AddButton
        searchCityHandle={searchCityHandle}
      />
      {cityes.cityes.length ? cityes.cityes.map(item =>

        <AnyCity
          active={item.currentCityActive}
          currentCityCall={currentCityCall}
          deleteCity={deleteCity}
          cityName={item.cityName}
          key={item.cityName}
          temperature={item.temperature}
          weather={item.weather}
          icon={item.icon}
        />) : 'Добавьте город'}
      <SearchCity
        addCity={addCity}
        active={cityes.searchCityActive}
        error={cityes.error}
        searchCityHandle={searchCityHandle}
      />
      {/* <Error /> */}

      <CurrentCity
        error={cityes.error}
        active={cityes.currentCity.currentCityActive}
        currentCityExit={currentCityExit}
        cityName={cityes.currentCity.cityName}
        temperature={cityes.currentCity.temperature}
        icon={cityes.currentCity.icon}
        sunrise={cityes.currentCity.sunrise}
        sunset={cityes.currentCity.sunset}
      />
    </div >
  );
}

export default connect(
  ({ cityes }) => ({ cityes })
  // ({error}) => (error)
  ,
  {
    searchCityHandle: searchCityHandleAction,
    currentCityExit: currentCityExitAction,
    currentCityCall: currentCityCallAction,
    getCityTemp: getCityTempAction,
    deleteCity: deleteCityAction,
    addCity: addCityAction
  }
  // mapStateToProps, mapDispatchToProps

)(App);
