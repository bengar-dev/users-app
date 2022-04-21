import { Routes, Route } from "react-router-dom";

import Home from './containers/Home'
import ModalEdit from "./containers/ModalEdit";

import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <div className='flex justify-center min-h-screen bg-slate-900'>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit-user/:id' element={<ModalEdit />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
