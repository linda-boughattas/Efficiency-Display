// /efficiency/assets/js/animations.js
import { push, set, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { productsRef } from './operations.js';

const timeouts = [];

function createProductData() {
    const barcode = Math.floor(Math.random() * 1000000);
    const numInitial = Math.floor(Math.random() * 100);
    const numFinal = Math.floor(Math.random() * 100);
    const timestamp = new Date().toISOString();
    return { barcode, numInitial, numFinal, timestamp };
}

function resetColors() {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.backgroundColor = '#1f2937'; // Original color
    });
}

function clearAllTimeouts() {
    timeouts.forEach(timeoutId => {
        clearTimeout(timeoutId);
    });
    timeouts.length = 0;
}

function animateProduct(product, rowIndex, colIndex, onComplete) {
    const startTimeout = setTimeout(() => {
        product.style.backgroundColor = 'orange'; // Loading

        const data = createProductData();
        const { barcode, numInitial, numFinal, timestamp } = data;

        const newProductRef = push(productsRef);

        set(newProductRef, data)
            .then(() => console.log('Product data saved to Firebase'))
            .catch(error => console.error('Error saving product data:', error));

        const finishTimeout = setTimeout(() => {
            const isSuccess = numFinal > numInitial; // Equation of efficiency (will be adjusted)
            product.style.backgroundColor = isSuccess ? 'green' : 'red';
            console.log(`Product ${rowIndex + 1}-${colIndex + 1} set to ${isSuccess ? 'green' : 'red'}`);
            onComplete();
        }, 1000); // Change color after 1000ms

        timeouts.push(finishTimeout);
    }, rowIndex * 1500);

    timeouts.push(startTimeout);
}

export { resetColors, clearAllTimeouts, animateProduct };

