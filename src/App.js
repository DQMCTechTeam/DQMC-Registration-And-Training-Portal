import { Route } from "react-router-dom";
import "./App.css";
import DQMCTrainingRegistration from "./pages/DQMCTrainingRegistration";
import Home from "./pages/Home";
import POAMTracking from "./pages/POAMTracking";
import Questionnaire from "./pages/Questionnaire";
function App() {
  return (
    <div className="App">
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/dqmcTrainingRegistration">
        <DQMCTrainingRegistration />
      </Route>
      <Route path="/poamTracking">
        <POAMTracking />
      </Route>
      <Route path="/questionnaire">
        <Questionnaire />
      </Route>

    </div>
  );
}

export default App;
