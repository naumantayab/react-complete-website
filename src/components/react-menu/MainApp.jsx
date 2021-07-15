import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import Menu from "./Menu";
import User from "./User";
import Services from "./Services";
import Search from "./Search";
import Home from './Home';
import "./router.css";
const Router = () => {
  const Name = () => {
    return <h1> I am a Name Page </h1>;
  };
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/services"
          render={() => <Services name="Service" />}
        />
        <Route exact path="/search" component={Search} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contact/name" component={Name} />
        <Route exact path="/user/:fname/:lname" component={User} />
        {/* <Route component={ErrorPage} /> */}
        <Redirect to="/" />
      </Switch>

      {/* <About />
            <Contact /> */}
    </>
  );
};

export default Router;
