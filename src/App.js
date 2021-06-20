import { connect } from 'react-redux'
import {
  getCityTemp as getCityTempAction,
  deleteCity as deleteCityAction,
  addCity as addCityAction
} from './redux/modules/cityes'

import MainCity from './Components/City/MainCity';
import AddButton from './Components/AddButton/AddButton';
import Form from './Components/Form/Form'
import KazanCity from './Components/City/KazanCity'
import { useEffect } from 'react';
import AnyCity from './Components/City/AnyCity'




function App({ cityes, getCityTemp, deleteCity, addCity }) {

  // const []
  // debugger;
  useEffect(() => {
    getCityTemp()
  }, [])

  console.log(cityes)
  // getCityTemp()
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
        addCity={addCity}

      />
      {cityes.cityes.length && cityes.cityes.map(item =>
        <AnyCity
          deleteCity={deleteCity}
          cityName={item.cityName}
          key={item.cityName}
          temperature={item.temperature}
          weather={item.weather}
          icon={item.icon}
        />)}

      {/* <Form /> */}
    </div >
  );
}

export default connect(
  ({ cityes }) => ({ cityes }),
  {
    getCityTemp: getCityTempAction,
    deleteCity: deleteCityAction,
    addCity: addCityAction
  }
  // mapStateToProps, mapDispatchToProps

)(App);
