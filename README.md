# WMLine

WMLine is a display application developed for the automated watermeters efficiency testing line at Sopal. This web app uses Firebase to manage and visualize product data. To ensure the animation of the app is functional, we included a feature to generate random data for each product. The app is modular and responsive, adapting to different screen sizes for a seamless user experience.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Screenshots](#screenshots)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/linda-boughattas/Efficiency-Display.git
    cd efficiency
    ```

2. Install dependencies:
    Make sure you have Firebase set up in your project. You can initialize it using the Firebase configuration in `assets/js/config.js`.

3. Deploy:
    Open `index.html` in your browser to view the app.

## Usage

When you click the Launch button, the app will display the status of products in a table using the following color indicators:
- **Orange**: Scanning/Loading
- **Green**: Efficient
- **Red**: Inefficient
- 
Random data generation ensures that animations function correctly by creating random data for each product. The Stop button resets the table.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes.
4. Push your branch: `git push origin feature-name`.
5. Create a pull request.

## Screenshots

## Firebase Setup

Ensure you have Firebase Realtime Database configured with the following rules:

```json
{
  "rules": {
    "productsList": {
      ".indexOn": ["timestamp"]
    },
    "archivedProducts": {
      ".indexOn": ["timestamp"]
    }
  }
}

