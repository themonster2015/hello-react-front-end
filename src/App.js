import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Greeting from './components/Greeting';
import { Provider } from "react-redux";
import store from './configureStore'



function App() {
  return (
    <Provider store={store()}>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Greeting />} />
    </Routes>
    </BrowserRouter>
    </Provider>
    
   
  );
}

export default App;
