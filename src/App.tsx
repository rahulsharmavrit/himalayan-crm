import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './assets/css/main.css';
import './assets/css/home.css';
import Playground from './component/playground';
import Dashboard from "./pages/dashboard";
import HolidayTypes from "./pages/holidays/types";
import HolidayDestination from "./pages/holidays/destination";

const App = () => {
  return (<>
  
    <Playground>
    <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/holiday/types' element={<HolidayTypes />} />
        <Route path='/holiday/destination' element={<HolidayDestination />} />

      </Routes>
    </Playground>
  
  </>)
}

export default App