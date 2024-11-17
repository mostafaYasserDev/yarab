import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"; // أو المسار الذي يحتوي على الصفحة الرئيسية
import AboutGames from "./pages/AboutGames"; // المسار لصفحة About Games
import GamePrice from "./pages/GamePrice"; // المسار لصفحة GamePage
import AdminDashboard from "./pages/AdminDashboard"; // المسار لصفحة لوحة التحكم
import "./App.css";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* صفحة Home */}
          <Route exact path="/" component={Home} />

          {/* صفحة About Games */}
          <Route path="/about-games" component={AboutGames} />

          {/* صفحة GamePage */}
          <Route path="/game/:id" component={GamePrice} />

          {/* صفحة لوحة التحكم */}
          <Route path="/admin" component={AdminDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
