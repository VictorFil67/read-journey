import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { persistor, store } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import AppTest from "./AppTest.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/read-journey">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <AppTest /> */}
        <App />
        <ToastContainer autoClose={1500} />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
