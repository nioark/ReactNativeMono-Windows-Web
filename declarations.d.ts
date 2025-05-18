interface Console {
  tron: import('reactotron-react-native').Reactotron<any>;
}

interface CustomGlobal extends globalThis {
  originalConsoleLog: (...args: any[]) => void;
}

declare const global: CustomGlobal;
