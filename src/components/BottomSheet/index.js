import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { SheetContainer } from './styled';

const BottomSheet = ({ show=false, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const translateY = useRef(new Animated.Value(300)).current;

  const toggleSheet = (visible) => {
    console.log(show);
    if (!visible) {
      Animated.timing(translateY, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsVisible(false));
    } else {
      setIsVisible(visible);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    console.log(show);
    toggleSheet(show);
  }, [show])


  return (
    <>
    
      {isVisible && (
        <SheetContainer style={{ transform: [{ translateY }] }}>
          {children}
        </SheetContainer>
      )}
    </>
  );
};

export default BottomSheet;
