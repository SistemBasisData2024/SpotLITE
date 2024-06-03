import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import AlbumPage from "./components/AlbumPage.jsx";
import ArtistPage from "./components/ArtistPage.jsx";
import HomePage from "./components/HomePage.jsx";
import PlaylistPage from "./components/PlaylistPage.jsx";
import PlayMusicPage from "./components/PlayMusicPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "album",
        element: <AlbumPage />,
      },
      {
        path: "artist",
        element: <ArtistPage />,
      },
      {
        path: "playlist",
        element: <PlaylistPage />,
      },
      {
        path: "playmusic",
        element: <PlayMusicPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);