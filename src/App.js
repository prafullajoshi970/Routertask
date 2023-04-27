import Home from "./components/Home";
import Product from "./components/Product";
import Addtocart from "./components/Addtocart";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Product" element={<Product/>}></Route>
        <Route path="/Addtocart/:id" element={<Addtocart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
