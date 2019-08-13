import firebase from "firebase/app";
import "firebase/auth";

export const uiConfig = {
  //TODO: Add routes for redirects
  signInSuccessUrl: "/home",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: "<your-tos-url>",
  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign("<your-privacy-policy-url>");
  }
};
