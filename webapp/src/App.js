import './App.css';

import Login from './components/Login';
import ProductList from './components/ProductList';
import OrderForm from './components/OrderForm';

function App() {

  return (
    <div className="App">

      <h1>E-Commerce Store</h1>

      <Login />

      <hr />

      <ProductList />

      <hr />

      <OrderForm />

    </div>
  );

}

export default App;
