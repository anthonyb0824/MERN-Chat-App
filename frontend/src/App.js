import { Route } from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/Homepage"
import ChatPage from "./Pages/Chatpage"

function App() {
  return (
    <div className="App">
      <Route path='/' component = {HomePage} exact/>
      <Route path='/chats' component = {ChatPage}/>
    </div>
  );
}

export default App;
