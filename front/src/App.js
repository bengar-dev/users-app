import Header from "./components/Header";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <div className='min-h-screen bg-slate-900'>
      <UserContextProvider>
        <Header />
        <AddUser />
        <UsersList />
      </UserContextProvider>
    </div>
  );
}

export default App;
