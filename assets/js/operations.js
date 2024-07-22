import { ref, push, set, onValue, query, orderByChild, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { database } from './config.js';

const productsRef = ref(database, "productsList");
const archivedRef = ref(database, "archivedProducts");

function archiveData() {
    return new Promise((resolve, reject) => {
        const timestamp = new Date().toISOString();
        const datePath = timestamp.split('T')[0];
        const archivePath = `archivedProducts/${datePath}/${timestamp}`;

        onValue(productsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const archivePathRef = ref(database, archivePath);
                set(archivePathRef, data)
                    .then(() => resolve())
                    .catch(error => reject(error));
            } else {
                resolve(); // Resolve if no data to archive
            }
        }, { onlyOnce: true });
    });
}

function resetProducts() {
    return set(productsRef, {});
}

function getProductsSorted() {
    const sortedQuery = query(productsRef, orderByChild('timestamp'));
    return get(sortedQuery).then(snapshot => {
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    });
}

export { productsRef, archivedRef, archiveData, resetProducts, getProductsSorted };
