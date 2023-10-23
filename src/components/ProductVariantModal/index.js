import React, { useState } from 'react'
import deliveryTypes from '../../configs/deliveryTypes'
import {Divider, Spacer, Text} from '../styles';
import { BGOverlvay, DeliveryTypeContainer, MainContainer, ModalContainer } from './styled';
import fonts from '../../configs/fonts';
import colors from '../../configs/colors';
import VariantItem from './VariantItem';

import { DROPDOWN_BLUE } from '../../configs/images';
import { Image, Modal, TouchableOpacity } from 'react-native';
const ProductVariantModal = ({ variants, productName, showModal, closeModal }) => {
    const [size, setSize] = useState();
    // const [showModal, setShowModal] = useState(false);
  

    const onSizeSelect = (val) => {
        setSize(val)
    }

    return (
        <>
           
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
            >   
                <TouchableOpacity onPress={closeModal} style={{ flex: 1, position: 'absolute', height: '100%', width: '100%' }}>
                    <BGOverlvay />
                </TouchableOpacity>
                <ModalContainer>
                    <MainContainer>
                        <Text size={20} fontFamily={fonts.bold} fontSize={20}>Select your variant in {productName}</Text>
                        <Spacer />
                        <Divider />
                        <Spacer />
                        {
                            variants.map((item) => <VariantItem key={item.id} variant={item} />)
                        }
                    </MainContainer>
                </ModalContainer>
            </Modal>
        </>
    )
}

export default ProductVariantModal