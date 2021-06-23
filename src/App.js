import { connect } from 'react-redux'
import {
  getCityTemp as getCityTempAction,
  deleteCity as deleteCityAction,
  addCity as addCityAction,
  currentCityCall as currentCityCallAction,
  currentCityExit as currentCityExitAction
} from './redux/modules/cityes'

import MainCity from './Components/City/MainCity';
import AddButton from './Components/AddButton/AddButton';
import ModalForm from './Components/Form/ModalForm'
import KazanCity from './Components/City/KazanCity'
import { useEffect, useState } from 'react';
import AnyCity from './Components/City/AnyCity'
import CurrentCity from "./Components/Form/CarrentCity"




function App({ cityes, getCityTemp, deleteCity, addCity, currentCityCall, currentCityExit }) {
  debugger
  const [modalActive, setModalActive] = useState(true)

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
        setModalActive={setModalActive}
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
      <ModalForm
        addCity={addCity}
        active={modalActive}
        error={cityes.error}
        setActive={setModalActive} />
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
    currentCityExit: currentCityExitAction,
    currentCityCall: currentCityCallAction,
    getCityTemp: getCityTempAction,
    deleteCity: deleteCityAction,
    addCity: addCityAction
  }
  // mapStateToProps, mapDispatchToProps

)(App);
