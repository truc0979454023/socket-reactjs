import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from "./components/body/products/Products";
import DetailProduct from './components/body/detailProduct/DetailProduct'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Products />} exact />
          <Route path="/product/:id" element={<DetailProduct />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
