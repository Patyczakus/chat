import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyBqt4RNoAbBRqDwmxJHJz79k62m6ZnZBmY",
    authDomain: "chat-e8253.firebaseapp.com",
    // For databases not in the us-central1 location, databaseURL will be of the
    // form https://[databaseName].[region].firebasedatabase.app.
    // For example, https://your-database-123.europe-west1.firebasedatabase.app
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "chat-e8253.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();