import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Playground from './component/playground';
const App = () => {
  return (<>
  
    <Playground>
    <Routes>
        <Route path='/' element={""} />
      </Routes>
    </Playground>
  
  </>)
}

export default App