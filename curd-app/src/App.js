import NavBar from "./components/NavBar";
import Vivek from './components/Vivek';
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoFound from "./components/NoFound";



function App() {
  return (
    <BrowserRouter>
      
        <NavBar />
        <Switch>
         <Route exact path="/" component={Vivek} />
         <Route exact path="/all" component={AllUsers} />
         <Route exact path="/add" component={AddUser} />
         <Route exact path="/edit/:id" component={EditUser} />
         <Route component={NoFound} />
        </Switch>   
    </BrowserRouter>
      
  );
}

export default App;
