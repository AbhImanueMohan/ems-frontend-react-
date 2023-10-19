import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin'
import Add from './Components/Add'
import View from './Components/View'
import Edit from './Components/Edit'
import Pagenotfound from './Components/Pagenotfound'

function App() {
  return (
    <div className="App text-primary">
      <Routes>
        <Route path='' element={<Admin/>}/>            {/* Admin -localhost://3000 */}
        <Route path='add' element={<Add/>} />          {/* Add -localhost://3000/add */}
        <Route path='view/:id' element={<View/>} />    {/* view -localhost://3000/view.5 */}
        <Route path='edit/:id' element={<Edit/>} />    {/* Edit -localhost://3000/edit/5 */} 
        <Route path='*' element={<Pagenotfound/>} />   {/* pagenotfound */}
        </Routes>
  
      
    </div>
  );
}

export default App;
