import { NavigationContainer } from "@react-navigation/native";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import { useRoute } from "./router";

export default function App() {
  const routing = useRoute(false);
  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
