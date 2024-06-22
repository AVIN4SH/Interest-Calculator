import CompoundInterest from "./components/CompoundInterest";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SimpleInterest from "./components/SimpleInterest";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );

}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'si',
        element: <SimpleInterest />,
      },
      {
        path: 'ci',
        element: <CompoundInterest />,
      },
    ],
  },
]);

export { appRouter };
export default App;