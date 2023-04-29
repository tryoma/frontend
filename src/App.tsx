import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import NotFound from './components/NotFound';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { GuestRoute, PrivateRoute } from './AuthRoute';
import client from './appolloClient';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/signin"
            element={<GuestRoute children={<SignIn />}></GuestRoute>}
          />
          <Route
            path="/signup"
            element={<GuestRoute children={<SignUp />}></GuestRoute>}
          />
          <Route
            path="/"
            element={<PrivateRoute children={<Main />}></PrivateRoute>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
