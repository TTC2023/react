import './App.css';
import FirstVehicle from './components/FirstVehicle/FirstVehicle'
import SecondVehicle from './components/SecondVehicle/SecondVehicle';
import NavBar from './components/NavBar/NavBar'


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <div>
        <FirstVehicle/>
        <SecondVehicle/>
      </div>
    </div>
  );
}

export default App;

