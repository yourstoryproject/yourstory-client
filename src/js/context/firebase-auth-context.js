import React from "react";
import firebase from "firebase/app";

const defaultFirebaseContext = {
  authStatusReported: false,
  email: "",
  isUserSignedIn: false,
  uid: ""
};

export const FirebaseAuthContext = React.createContext(defaultFirebaseContext);

export default class FirebaseAuthProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = defaultFirebaseContext;
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authStatusReported: true,
          email: user.email,
          isUserSignedIn: !!user,
          uid: user.uid
        });
      }
    });
  }

  componentWillUnmount() {}

  render() {
    const {
      props: { children },
      state: { authStatusReported, isUserSignedIn }
    } = this;

    return (
      <FirebaseAuthContext.Provider value={this.state}>
        {/* {authStatusReported && children} */}
        {children}
      </FirebaseAuthContext.Provider>
    );
  }
}
