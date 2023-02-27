import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Form from './components/Form'
import SignIn from './components/SignIn'
import Chat from './components/Chat';

function App() {
 
  
  return (
    <div className="App">
    
      <Routes>
        <Route path='/NavBar' element={<NavBar/>}/>
        <Route path='/Form' element={<Form/>}/>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/Chat' element={<Chat/>}/>
      </Routes>
    </div>
  );
}

export default App;
