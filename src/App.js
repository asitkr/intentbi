import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

// components
import Navbar from './components/Navbar';
import store from './redux-toolkit/store';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Congrats from './pages/Congrats';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/congrats' element={<Congrats />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
