import { archiveData, resetProducts, getProductsSorted } from './operations.js';
import { resetColors, clearAllTimeouts, animateProduct } from './animations.js';

const launchButton = document.querySelector('.launch');

function launch() {
    launchButton.disabled = true;
    resetColors();
    clearAllTimeouts();

    const rows = document.querySelectorAll('table tr');
    console.log('Launch function called', rows);

    let animationsRemaining = 0;

    const onCompletion = () => {
        animationsRemaining--;
        if (animationsRemaining === 0) {
            launchButton.disabled = false;
        }
    };

    rows.forEach((row, rowIndex) => {
        const products = row.querySelectorAll('.product');
        animationsRemaining += products.length;

        products.forEach((product, colIndex) => {
            animateProduct(product, rowIndex, colIndex, onCompletion);
        });
    });
}

function stop() {
    clearAllTimeouts();
    resetColors();
    launchButton.disabled = false;


    archiveData()
        .then(() => {
            console.log('Product data successfully archived');
            return getProductsSorted();
        })
        .then(data => {
            if (data) {
                console.log('Sorted products data:', data);
            }
        })
        .catch(error => console.error('Error:', error))
        .finally(() => {
            resetProducts()
                .then(() => console.log('Products list successfully reset'))
                .catch(error => console.error('Error resetting products list:', error));
        });
}


launchButton.addEventListener('click', launch);
document.querySelector('.stop').addEventListener('click', stop);
