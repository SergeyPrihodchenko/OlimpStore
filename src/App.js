import { Provider } from "react-redux";
import NavMenu from "./Components/NavMenu";
import Routers from "./Routers/Routers";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavMenu/>
        <Routers/>
      </div>
    </Provider>
  );
}

export default App;
