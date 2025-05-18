# React Native + Web + Windows Starter

This project is initialized using the official React Native CLI (@react-native-community/cli) and extended to support:

- ✅ Web support using `react-native-web`, `react-dom`, and custom `webpack` configuration
- ✅ Windows support via `react-native-windows`

This allows you to develop and run your app for both web and Windows platforms from a single codebase.

---

## Getting Started

### Installation

Make sure you have Node.js and Yarn installed.

```bash
yarn install
```

---

## Running the App

### Web

Start the web version (via Webpack):

```bash
yarn web
```

### Windows

Make sure your environment is set up for React Native Windows: [Setup instructions](https://microsoft.github.io/react-native-windows/docs/rnw-dependencies)

Then run:

```bash
yarn windows
```

---

## Scripts

| Script         | Description                                |
| -------------- | ------------------------------------------ |
| `yarn web`     | Start the web app using webpack dev server |
| `yarn windows` | Run the Windows application                |

---

## Technologies Used

- React Native CLI
- React Native Windows
- React Native Web
- React DOM
- Webpack
- ***

## Setup Reference for Web

For a detailed guide on adding web support to a React Native project, check out:

👉 [Adding Web Support to a React Native Project in 2023](https://dev.to/mikehamilton00/adding-web-support-to-a-react-native-project-in-2023-4m4l)

---

## Reactron

Reactron is a powerful desktop app for inspecting your React Native apps. It can help with debugging, performance monitoring, and more.

### Quick Start

1. Install Reactron:

```bash
yarn add reactotron-react-native --dev
```

2. Configure Reactron in your app (e.g., in `App.tsx` or a separate config file):

```typescript
import Reactotron from 'reactotron-react-native';

Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
```

**Note for React Native Windows Users:** If you are experiencing issues with the standard React Native debuggers when working with `react-native-windows`, Reactron can be a valuable alternative for debugging your application.
