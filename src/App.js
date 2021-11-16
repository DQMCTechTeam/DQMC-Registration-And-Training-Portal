import { Route } from "react-router-dom";
import "./App.css";
import DQMCTrainingRegistration from "./pages/DQMCTrainingRegistration";
import Home from "./pages/Home";
import POAMTracking from "./pages/POAMTracking";
function App() {
  return (
    <div className="App">
      <Route path="/">
        <Home/>
      </Route>
      <Route path="/dqmcTrainingRegistration">
        <DQMCTrainingRegistration />
      </Route>
      <Route path="/poamTracking">
        <POAMTracking />
      </Route>
    </div>
  );
}

export default App;
