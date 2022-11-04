import './App.css';
import { BrowserRouter } from "react-router-dom";
import CustomProvider from './components/CustomProvider';
import NavBar from './components/NavBar'

function App() {
      return (
        <>
        <CustomProvider>
          <BrowserRouter>
            <NavBar/>
          </BrowserRouter>
        </CustomProvider>           
        </>
      );
}

export default App;
