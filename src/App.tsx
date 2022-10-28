import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Cart from './pages/Cart';
import Menu from './pages/Menu';
import { Product } from './utils';
import { CartCountContext } from './components/utils/Context';
function App() {



  const [count, setCount] = useState(0);
  const [map, setMap] = useState(new Map<String, number>());

  const addCount = (product: Product) => {
    setCount(count + 1);
    let amount = 0;
    if (map.has(JSON.stringify(product))) {
      amount = map.get(JSON.stringify(product))! + 1;
    } else {
      amount += 1;
    }
    setMap(map.set(JSON.stringify(product), amount ? amount : 1));
  }

  return (
    <CartCountContext.Provider value={{ count: count, callback: addCount,map:map }}>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </CartCountContext.Provider>
  );
}

export default App;
