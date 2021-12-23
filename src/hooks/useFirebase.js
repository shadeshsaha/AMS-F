import {
  createUserWithEmailAndPassword, getAuth,
  GoogleAuthProvider,
  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,
  signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import initAuthentication from "../config/firebase";

// initialize firebase
initAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const history = useHistory();
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const currentUser = auth.currentUser;

  //on State Change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  //sign up functionality
  const signUpUser = ({ email, name, password, photoURL }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        saveUser(email, name, photoURL, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          swal(
            "Welcome!",
            `Let's explore your favorite gaming laptops ${res.user.displayName}`,
            "Success"
          );
          history.push("/");
        });
      })
      .catch((err) => swal("Something went wrong!", `${err.message}`, "error"));
  };

  //sign in functionality
  const signInUser = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        swal(
          "Sign in Successful!",
          `Welcome back ${res.user.displayName}`,
          "Success"
        );
        history.push("/");
      })
      .catch((err) => swal("Something went wrong!", `${err.message}`, "error"));
  };

  //google sign in
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUser(user.email, user.displayName, user.photoURL, "PUT");
        // console.log(user);
        swal("Welcome!", "Account has been created!", "success");
        history.push("/");
      })
      .catch((error) => {
        swal("Something went wrong!", `${error.message}`, "error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // admin data load
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  //Sign out
  const signOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        swal("Logout Successfully!", "You are logged out!", "Success");
        history.push("/register");
      })
      .catch((err) => {
        swal("Something went wrong!", `${err.message}`, "error");
      })
      .finally(() => setIsLoading(false));
  };
  //   console.log(user);
  // save user
  const saveUser = (email, displayName, photoURL, method) => {
    const user = { email, displayName, photoURL };
    fetch("http://localhost:5000/user/", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    currentUser,
    user,
    admin,
    signUpUser,
    signInUser,
    handleGoogleSignIn,
    signOutUser,
    isLoading,
  };
};

export default useFirebase;
