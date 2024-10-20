import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './App';
import AnchorTemporaryDrawer from "./components/drawer"

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/drawer",
    element: <AnchorTemporaryDrawer/>,
  },

]);

const logPerformanceMetrics = (metric) => {
  console.log(metric); // Здесь будет объект со всеми метриками
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(logPerformanceMetrics);
