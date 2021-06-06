import "./App.css";
import React, { Suspense } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import routes from "./routes";
import withTracker from "./withTracker";
import Preloader from "./components/preloader/preloader";
function App() {
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker((props) => {
                return (
                  <Suspense fallback={<Preloader />}>
                    <route.layout noNavbar={route.noNavbar} title={route.title}>
                      <route.component {...props} />
                    </route.layout>
                  </Suspense>
                );
              })}
            />
          );
        })}
      </div>
    </Router>
  );
}

export default App;
