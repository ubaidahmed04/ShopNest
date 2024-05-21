import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCcTQndAfkiH-Iql_VTgrKbdJFlGo05Ans",
  authDomain: "myfirstproject-425c9.firebaseapp.com",
  projectId: "myfirstproject-425c9",
  storageBucket: "myfirstproject-425c9.appspot.com",
  messagingSenderId: "830774483417",
  appId: "1:830774483417:web:096380ed3aca67377821c8",
  measurementId: "G-95ZQ4YJLW8"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default app 