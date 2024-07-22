# WMLine

WMLine is a display application developed for the automated watermeters efficiency testing line at Sopal. This web app uses Firebase to manage and visualize product data. To ensure the app's animations are functional, we included a feature to generate random data for each product. The app is modular and responsive, adapting to different screen sizes for a seamless user experience. 

This project was created as part of a Makeathon competition in [NRW6.0](https://www.facebook.com/NationalRoboticsWeekend).

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
  
Random data generation ensures that animations function correctly by creating random data for each product. The Stop button resets the table.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes.
4. Push your branch: `git push origin feature-name`.
5. Create a pull request.

## Screenshots
![Screenshot 2024-07-22 123233](https://github.com/user-attachments/assets/8dd90aee-e587-4871-830b-21763e63c86a)
![Screenshot 2024-07-22 134723](https://github.com/user-attachments/assets/3623da71-1c46-4157-99d5-446ea0958d3f)
![Screenshot 2024-07-22 134708](https://github.com/user-attachments/assets/2223a307-0d45-4974-9306-616289b15028)

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

