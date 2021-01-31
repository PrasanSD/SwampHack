import React from "react";
import Signup from "./authentication/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./authentication/Profile";
import Projects from "./Projects";
import Browse from "./Browse";
import CreateProject from "./CreateProject";
import Login from "./authentication/Login";
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";
import Dashboard from "./Dashboard";
import ViewDetails from "./ViewDetails";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
          <PrivateRoute exact path="/user" component={Profile} />
          <PrivateRoute exact path="/createProject" component={CreateProject} />
          <PrivateRoute exact path="/projects" component={Projects} />
          <PrivateRoute exact path="/browse" component={Browse} />
          <PrivateRoute exact path="/viewDetails" component={ViewDetails} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
