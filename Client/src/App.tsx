import { Provider } from "react-redux";
import ConfigureStore from "./Redux/ConfigureStore";
import BugsContainer from "./Components/Bugs/BugsContainer";

const store = ConfigureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BugsContainer />;
    </Provider>
  );
};

export default App;
