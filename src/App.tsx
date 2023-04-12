import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Main from './pages/main/Main';
import Post from './pages/post/Post';
import Posts from './pages/posts/Posts';
import Error from './pages/error/Error';
import Layout from './layout/Layout';

import { store } from 'store/store';

import './assets/styles/app.scss';

const home = import.meta.env.BASE_URL;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={home} element={<Layout />}>
      <Route index element={<Main />} />
      <Route path={`${home}/posts`} element={<Posts />} />
      <Route path={`${home}/posts/:id`} element={<Post />} />
      <Route path="*" element={<Error message="Page not found" />} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
