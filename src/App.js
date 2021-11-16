import { Route } from "react-router-dom";
import "./App.css";
import DQMCTrainingRegistration from "./pages/DQMCTrainingRegistration";
function App() {
  return (
    <div className="App">
      <Route path="/dqmcTrainingRegistration">
        <DQMCTrainingRegistration />
      </Route>
    </div>
  );
}

export default App;
