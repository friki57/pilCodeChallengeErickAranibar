import './App.css';

import Products from './pages/Products';
import {Routes, Route, Link} from "react-router-dom";
import Header from './components/Header';
import NameProducts from './pages/Name';

function App() {
  return (
    <div>
      <Header></Header>
      <div className='container d-flex justify-content-center'>
        <Routes>
          <Route path='/' element={<Products/>}></Route>
          <Route path='/name' element={<NameProducts/>}></Route>
          <Route path='/:pag' element={<Products/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
