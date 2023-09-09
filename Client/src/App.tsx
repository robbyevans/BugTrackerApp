import { Provider } from "react-redux";
import store from "./Redux/Store";
import BugsContainer from "./Components/Bugs/BugsContainer";

const App = () => {
  return (
    <Provider store={store}>
      <BugsContainer />
    </Provider>
  );
};

export default App;
