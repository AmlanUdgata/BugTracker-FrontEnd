import "./App.css";
import React from "react";
import Header from "./components/common/Header";
import BugDashboard from "./components/BugDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";
import ProjectDashboard from "./components/ProjectDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes , Route} from "react-router-dom";
import AddBug from "./components/bug/AddBug";
import Addemployee from "./components/employee/Addemployee";
import AddProject from "./components/projects/AddProject";
import { Provider } from "react-redux";
import  store  from "./store";
import { createBrowserHistory } from "history";
import UpdateBug from "./components/bug/UpdateBug";

function App() {
  const history=createBrowserHistory();
  return (
    <Provider store={store}>
    <BrowserRouter>
     <Header/>
     <Routes>
     <Route  exact path="/bugDashboard" element={<BugDashboard/>} />
     <Route  exact path="/employeeDashboard" element={<EmployeeDashboard/>} />
     <Route  exact path="/projectDashboard" element={<ProjectDashboard/>} />
     <Route  exact path="/addProject" element={<AddProject history={history}/>}/>
     <Route  exact path="/addBug" element={<AddBug history={history}/>}  />
     <Route  exact path="/addEmployee" element={<Addemployee history={history}/>}  />
      <Route exact path="/updateBug/:id" element={<UpdateBug history={history}/>}/>
     

    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;