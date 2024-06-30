/*socket.on('watermeter_update', (data) => {
    console.log('Received watermeter data update:', data);
  
    // Loop through the received water meter data
    for (let i = 0; i < data.length; i++) {
      const watermeter = data[i];
      const product1Cell = document.getElementById(`p${i + 1}1`); // Get the first cell for the water meter
      const product2Cell = document.getElementById(`p${i + 1}2`); // Get the second cell for the water meter
  
      updateWaterMeterColor(product1Cell, product2Cell, watermeter);
    }
  });
  
  function updateWaterMeterColor(cell1, cell2, watermeter) {
    if (watermeter.barcode !== "" && watermeter.n0 === 0 && watermeter.nf === 0) {
      cell1.classList.add('orange'); // Set background color to orange
      cell2.classList.add('orange');
    } else if (watermeter.barcode !== "" && watermeter.n0 !== 0 && watermeter.nf !== 0) {
      const difference = watermeter.nf - watermeter.n0;
      if (difference >= 100 && difference <= 130) {
        cell1.classList.add('green'); // Set background color to green
        cell2.classList.add('green');
      } else {
        cell1.classList.add('red'); // Set background color to red
        cell2.classList.add('red');
      }
    }
  }*/


// Get the launch button element
const launchButton = document.querySelector('.launch');

// Variable to hold the timeout IDs for each product animation
let animationTimeouts = [];

function launch() {
    // Disable the launch button
    launchButton.disabled = true;

    // Reset all product colors to initial state
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.backgroundColor = '#1f2937'; // Original color
    });

    const rows = document.querySelectorAll('table tr');
    console.log('Launch function called', rows);

    // Track how many animations are still running
    let animationsRunning = rows.length; // Track rows only, not individual products

    // Clear any existing animation timeouts
    animationTimeouts.forEach(timeoutId => {
        clearTimeout(timeoutId);
    });
    animationTimeouts = [];

    rows.forEach((row, rowIndex) => {
        const products = row.querySelectorAll('.product');

        // Array to hold timeouts for each product in this row
        const timeoutsForRow = [];

        // Simultaneously change colors for products in this row
        products.forEach((product, colIndex) => {
            timeoutsForRow.push(setTimeout(() => {
                product.style.backgroundColor = 'orange'; // Loading color

                animationTimeouts.push(setTimeout(() => {
                    const isSuccess = Math.random() > 0.2; // Bias towards green (adjust probability as needed)
                    product.style.backgroundColor = isSuccess ? 'green' : 'red';
                    console.log(`Product ${rowIndex + 1}-${colIndex + 1} set to ${isSuccess ? 'green' : 'red'}`);

                    // Check if all animations for this row are completed
                    if (timeoutsForRow.every(timeout => timeout._called)) {
                        animationsRunning--;
                        if (animationsRunning === 0) {
                            // Enable the launch button once all animations are finished
                            launchButton.disabled = false;
                        }
                    }
                }, 1000)); // Change color after 1000ms (1 second)
            }, rowIndex * 1500)); // Adjust timing as needed

            animationTimeouts.push(...timeoutsForRow);
        });
    });
}

function stop() {
    // Clear all animation timeouts
    animationTimeouts.forEach(timeoutId => {
        clearTimeout(timeoutId);
    });
    animationTimeouts = [];

    // Reset all product colors to initial color
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.backgroundColor = '#1f2937'; // Original color
    });

    // Enable the launch button if it was disabled
    launchButton.disabled = false;
}
