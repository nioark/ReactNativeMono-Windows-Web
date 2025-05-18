// Router.tsx
import React, {useState, createContext, useContext} from 'react';
import {View, Text} from 'react-native';

export interface Route {
  path: string;
  component: React.ComponentType<any>;
  children?: Route[];
}

interface RouterProps {
  routes: Route[];
  defaultPath?: string;
}

interface RouterContextValue {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextValue | undefined>(undefined);

export const useRouter = (): RouterContextValue => {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used within a Router');
  return ctx;
};

const joinPaths = (parent: string, child: string): string => {
  const base = parent.endsWith('/') ? parent.slice(0, -1) : parent;
  const sub = child.startsWith('/') ? child.slice(1) : child;
  return `${base}/${sub}`;
};

const findRoute = (
  path: string,
  routes: Route[],
  basePath: string = '',
): React.ReactElement | null => {
  for (const route of routes) {
    const fullPath = joinPaths(basePath, route.path);

    if (fullPath === path) {
      const Component = route.component;
      return <Component />;
    }

    if (path.startsWith(fullPath + '/') && route.children) {
      const child = findRoute(path, route.children, fullPath);
      if (child) {
        const Parent = route.component;
        return <Parent>{child}</Parent>;
      }
    }
  }
  return null;
};

export const Router: React.FC<RouterProps> = ({routes, defaultPath}) => {
  const initialPath = defaultPath || routes[0]?.path || '/';
  const [currentPath, setCurrentPath] = useState(initialPath);

  const navigate = (path: string) => {
    const match = findRoute(path, routes);
    if (match) setCurrentPath(path);
    else setCurrentPath(defaultPath || routes[0]?.path || '/');
  };

  const matchedComponent = findRoute(currentPath, routes) || (
    <View>
      <DefaultNotFound />
    </View>
  );

  return (
    <RouterContext.Provider value={{currentPath, navigate}}>
      {matchedComponent}
    </RouterContext.Provider>
  );
};

// Optional fallback component
const DefaultNotFound = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Page not found</Text>
  </View>
);
