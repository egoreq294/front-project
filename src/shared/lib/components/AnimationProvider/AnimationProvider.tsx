import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
  Gesture?: GestureType;
  Spring?: SpringType;
  isLoaded?: boolean;
}

interface AnimationProviderProps {
  children: ReactNode;
}

const AnimationContext = createContext<AnimationContextPayload>({});

const getAsyncAnimationModules = async (): Promise<
  [spring: SpringType, gesture: GestureType]
> => {
  return Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react'),
  ]);
};

export const AnimationProvider: FC<AnimationProviderProps> = ({ children }) => {
  const SpringRef = useRef<SpringType>();
  const GestureRef = useRef<GestureType>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(
    () => ({
      Spring: SpringRef.current,
      Gesture: GestureRef.current,
      isLoaded,
    }),
    [isLoaded],
  );

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationModules = (): Required<AnimationContextPayload> => {
  return useContext(AnimationContext) as Required<AnimationContextPayload>;
};
