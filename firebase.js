import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

window.onload = () => {
    var config = {
        apiKey: "AIzaSyBqt4RNoAbBRqDwmxJHJz79k62m6ZnZBmY",
        authDomain: "chat-e8253.firebaseapp.com",
        databaseURL: "https://databaseName.firebaseio.com",
        storageBucket: "chat-e8253.appspot.com"
    };
    
    const app = initializeApp(config);
    console.log(getDatabase(app))
}