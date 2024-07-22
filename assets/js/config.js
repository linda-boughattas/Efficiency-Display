import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const config = {
    databaseURL: "https://sopal-96234-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(config);
const database = getDatabase(app);

export { database };
