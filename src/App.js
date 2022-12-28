import { Provider } from "react-redux";
import Routers from "./Routers/Routers";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routers/>
      </div>
    </Provider>
  );
}

export default App;
