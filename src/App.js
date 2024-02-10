import './App.css';
import ProductForm from './components/Form';
import Header from './components/Navbar';
import Products from './components/Products';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <ProductForm></ProductForm>
      <Products></Products>
    </div>
  );
}

export default App;
