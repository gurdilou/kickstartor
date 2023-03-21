import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Welcome} from "./welcome/Welcome";
import {PetsAPI} from "./pets/PetsAPI";
import {ErrorPage} from "./error/ErrorPage";
import {EchoWS} from "./echo-ws/EchoWS";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Welcome/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    index: true,
                    element: <EchoWS/>
                },
                {
                    path: "/rest",
                    element: <PetsAPI/>
                }
            ],
        }
    ]);


    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
