import { connect } from 'react-redux'
import { getCityTemp as getCityTempAction } from './redux/modules/cityes'

import MainCity from './Components/MainCity/MainCity';
import AddButton from './Components/AddButton/AddButton';
import Form from './Components/Form/Form'
import City from './Components/City/City'
import { useEffect } from 'react';



function App({ cityes, getCityTemp }) {
  // debugger;
  useEffect(() => {
    getCityTemp()
  }, [])



  console.log(cityes)
  // getCityTemp()
  return (
    <div className="wrapper">
      <MainCity />
      {/* <AddButton /> */}
      {/* <City cityName={cityes} key='efe' /> */}
      {cityes.length && cityes.map(item =>
        <City
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
  ({ cityes }) => (cityes),
  {
    getCityTemp: getCityTempAction
  }
  // mapStateToProps, mapDispatchToProps

)(App);
