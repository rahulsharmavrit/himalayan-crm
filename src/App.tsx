import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './assets/css/main.css';
import './assets/css/home.css';
import Playground from './component/playground';
import Dashboard from "./pages/dashboard";
const App = () => {
  return (<>
  
    <Playground>
    <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Playground>
  
  </>)
}

export default App