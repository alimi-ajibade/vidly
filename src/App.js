import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "./services/authService";
import NavBar from "./components/navBar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rental";
import NotFound from "./components/notFound";
import MovieDetail from "./components/movieDetail";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./styles/movie.css";

class App extends Component {
   state = {};

   componentDidMount() {
      const user = auth.getCurrentUser();
      this.setState({ user });
   }

   render() {
      const user = this.state.user;
      return (
         <React.Fragment>
            <ToastContainer />
            <NavBar user={user} />
            <main className="main">
               <Switch>
                  <Route path="/register" component={RegisterForm} />
                  <Route path="/login" component={LoginForm} />
                  <Route path="/logout" component={Logout} />
                  {/* <ProtectedRoute path="/movies/:_id" component={MovieDetail} /> */}
                  <Route path="/movies/:_id" component={MovieDetail} />
                  <Route
                     path="/movies"
                     render={(props) => <Movies {...props} user={user} />}
                  />
                  <Route path="/customers" component={Customers} />
                  <Route path="/rentals" component={Rentals} />
                  <Route path="/not-found" component={NotFound} />
                  <Redirect from="/" exact to="/movies" />
                  <Redirect to="/not-found" />
               </Switch>
            </main>
         </React.Fragment>
      );
   }
}

export default App;
