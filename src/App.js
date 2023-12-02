import { ConfigProvider } from "antd";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./compoment/Layout";
import Sigin from "./pages/signin";
import store from "./store/index";
import { Provider } from "react-redux";
import Home from "./pages/home";
import Expance from "./pages/home/expances";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
       {
       path: "/",
        element: <Expance />,
      },

      {
        path: "/signin",
        element: <Sigin />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <ConfigProvider>
          <RouterProvider router={router} />
        </ConfigProvider>
      </Provider>
      ,
    </>
  );
}

export default App;
