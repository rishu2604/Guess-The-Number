# React Native Project Setup Guide
Follow these steps to set up and run the project locally. You can clone the repository or download the ZIP file to begin.

## 1. Install Project Dependencies
After cloning or downloading the repository, navigate to the project directory in your terminal and run:
`npm install`
This command installs all dependencies listed in the package.json file, which are necessary for the React Native app to work. These dependencies include libraries and tools the app relies on to function correctly.

## 2. Install Expo CLI
To work with Expo projects, you'll need the Expo CLI. Install it with the following command:
`npm install -g expo-cli`
### Why?
The Expo CLI is a command-line tool that helps you create, develop, and build Expo projects.
It provides commands for project setup, running, building, and debugging Expo-based React Native apps.

> Note: You can run Expo commands without installing globally using npx expo if you prefer.

## 3. Install Specific Expo Package (expo-linear-gradient)
This project uses expo-linear-gradient to add gradient effects in the UI. To install it, run:
`npx expo install expo-linear-gradient`

### Why?
The expo-linear-gradient package is a native module for creating smooth gradients, which Expo integrates seamlessly.
Using `npx expo install` instead of `npm install` ensures compatibility with the current version of Expo.


## Running the Project
Once the dependencies are installed, you can start the development server by running:
`npx expo start` or `npm start`
This command launches the Expo development server and provides a QR code that you can scan with the Expo Go app on your mobile device for quick testing.
