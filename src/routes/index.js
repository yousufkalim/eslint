// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Construction from "../containers/Construction.js";
import Home from "../containers/Home";
import Blog from "../containers/Blog";
import Article from "../containers/Article";
import About from "../containers/About.js";
import Contenthome from "../containers/ContentHome.js";
import SearchResult from "../containers/SearchResult";
import LandingPage from "../containers/Landingpage";
import UserLandingPage from "../containers/UserLandingPage";
import ContentCreatorLandingPage from "../containers/ContentCreatorLandingPage";
import LandingPartner from "../containers/LandingPartner";
// import ContentDashboard from "../containers/ContentDashboard";
import ProtectedRoutes from "./ProtectedRoutes.js";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/:id" component={Article} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contenthome" component={Contenthome} />
      <Route exact path="/searchresult" component={SearchResult} />
      <Route exact path="/landingpartner" component={LandingPartner} />
      <Route exact path="/landingpage" component={LandingPage} />
      <Route exact path="/userlanding" component={UserLandingPage} />
      <Route exact path="/*" render={() => <ProtectedRoutes />} />
      <Route
        exact
        path="/contentcreator"
        component={ContentCreatorLandingPage}
      />
    </Switch>
  );
};

export default index;
