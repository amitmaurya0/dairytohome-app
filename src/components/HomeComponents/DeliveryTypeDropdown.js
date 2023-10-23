import React, { useState } from 'react'
import deliveryTypes from '../../configs/deliveryTypes'
import {Divider, Spacer, Text} from '../styles';
import { BGOverlvay, DeliveryTypeContainer, MainContainer, ModalContainer } from './styled';
import fonts from '../../configs/fonts';
import colors from '../../configs/colors';

import { DROPDOWN_BLUE } from '../../configs/images';
import { Image, Modal, TouchableOpacity } from 'react-native';
import DeliveryTypeItem from '../DeliveryTypeItem';
const DeliveryTypeDropdown = ({ deliveryType }) => {
   
    const [showModal, setShowModal] = useState(false);
    const { title } = deliveryTypes[deliveryType];  
    const onDropdownPress = () => {
        setShowModal(!showModal)
    }

    const onDeliveryTypePress = () => {
        onDropdownPress();
    }

    return (
        <>
            <TouchableOpacity onPress={onDropdownPress}>
                <DeliveryTypeContainer>
                    <Text color={colors.mainColor} fontFamily={fonts.bold}>{title}</Text>
                    <Spacer space={'0'} width={10} />
                    <Image source={DROPDOWN_BLUE} style={{ height: 25, width: 25 }} />
                </DeliveryTypeContainer>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
            >   
                <BGOverlvay />
                <ModalContainer>
                    <MainContainer>
                        <Text onPress={onDropdownPress} size={20} fontFamily={fonts.bold}> Please Select Delivery Type</Text>
                        <Spacer space={15} />
                        <Divider />
                        <Spacer space={20} />
                        <DeliveryTypeItem data={deliveryTypes.SLOT} onPress={onDeliveryTypePress} />
                        <Spacer space={30} />
                        <DeliveryTypeItem  data={deliveryTypes.INSTANT} onPress={onDeliveryTypePress} />
                    </MainContainer>
                </ModalContainer>
            </Modal>
        </>
    )
}

export default DeliveryTypeDropdown