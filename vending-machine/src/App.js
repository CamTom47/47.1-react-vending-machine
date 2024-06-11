import './App.css';
import VendingMachine from './VendingMachine';
import Snack from './Snack';
import {BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      
      <BrowserRouter >
                <Routes>
                <Route path="/snacks" element={<VendingMachine/>}/>
                <Route path="/snacks/oreos" element={<Snack name="Oreos"/>}/>
                <Route path="/snacks/carrots" element={<Snack name="Carrots"/>}/>
                <Route path="/snacks/turkeyleg" element={<Snack name="Turkey Leg"/>}/>
                </Routes>
            
            </BrowserRouter>
    </div>
  );
}

export default App;
