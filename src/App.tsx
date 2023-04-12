import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Main from './pages/Main';
import Post from './pages/Post';
import Posts from './pages/Posts';
import Error from './pages/Error';
import Layout from './layout/Layout';

import './assets/styles/app.scss';

const home = import.meta.env.BASE_URL;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={home} element={<Layout />}>
      <Route index element={<Main />} />
      <Route path={`${home}/posts`} element={<Posts />} />
      <Route path={`${home}/posts:id`} element={<Post />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
