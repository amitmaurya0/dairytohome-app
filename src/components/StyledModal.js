import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

// Styled Container
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// Styled Modal Container
const ModalContainer = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: { width: 0, height: 2 };
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
`;

// Styled Close Button
const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const StyledModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
    <Container>
        <ModalContainer>
        <CloseButton onPress={() => setModalVisible(false)}>
            <Text>Close</Text>
        </CloseButton>
        <Text>This is a popup!</Text>
        </ModalContainer>
    </Container>
    </Modal>
  );
};

export default StyledModal;
