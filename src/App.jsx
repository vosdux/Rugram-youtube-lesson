import { Provider } from "react-redux";
import PageRoutes from "./components/PageRoutes";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <PageRoutes />
    </Provider>
  );
};

export default App;