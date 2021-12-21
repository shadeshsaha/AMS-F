import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import ExploreDrones from "./components/ExploreDrones/ExploreDrones";
import AuthProvider from "./contexts/AuthProvider";
import BookingProvider from "./contexts/BookingProvider";
import useLoading from "./hooks/useLoading";
import PrivateRoute from "./routes/PrivateRoute";
import BookingScreen from "./screens/BookingScreen";
import Error from "./screens/Error";
import HomeScreen from "./screens/HomeScreen";
import MyBookingScreen from "./screens/MyBookingScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SignInScreen from "./screens/SignInScreen";

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = useLoading();

  //loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <BookingProvider>
          {loading ? (
            spinner
          ) : (
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route exact path="/home">
                <HomeScreen />
              </Route>
              <Route path="/register">
                <RegisterScreen />
              </Route>
              <Route path="/login">
                <SignInScreen />
              </Route>
              <Route path="/explore">
                <ExploreDrones />
              </Route>
              <PrivateRoute exact path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute exact path="/booking/:id">
                <BookingScreen />
              </PrivateRoute>
              <PrivateRoute exact path="/my-bookings">
                <MyBookingScreen />
              </PrivateRoute>
              <Route exact path="*">
                <Error></Error>
              </Route>
            </Switch>
          )}
        </BookingProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
