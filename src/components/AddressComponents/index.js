import React from 'react'
import { AddressItemContainer } from './styled'
import { Divider, RowView, Spacer, Text } from '../styles'
import fonts from '../../configs/fonts';
import Button from '../Button';
import colors from '../../configs/colors';
import { Image, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { CHECK_SELECTED } from '../../configs/images';

const AddressItem = ({ address, selectedId='', onPress = null, editPage=false, editPress=null, deletePress=null  }) => {
    const { id, name, title, apartment, addressLine1, addressLine2, floor, flatNumber, area, phone } = address;
    const isSelected = selectedId === id;
    return (
        <TouchableNativeFeedback onPress={onPress} disabled={editPage}>
            <AddressItemContainer>
                <RowView>
                    <Text size={18} fontFamily={fonts.bold} color={colors.mainColor}>{name}</Text>
                    {isSelected ? <Image source={CHECK_SELECTED} style={{ height: 20, width: 20, resizeMode: 'contain' }} /> : null}
                </RowView>
                <Spacer space={2} />
               {title ? <><Text fontFamily={fonts.bold}>{title}</Text>
                <Spacer space={2} /></> : null}
                {apartment ? <><Text fontFamily={fonts.medium}>{apartment.name}</Text>
                <Spacer space={2} /></> : null}
                <Text>{addressLine1}, {addressLine2}</Text>
                <Spacer space={2} />
                {
                    area ? <>
                     <Text>{area}</Text>
                    <Spacer space={2} />
                    </> : null
                }
                <Text>+91-{phone}</Text>
               {
                editPage ? <>
                    <Spacer space={10} />
                    <Divider />
                    <Spacer space={10} />
                    <RowView style={{ justifyContent: 'space-evenly' }}>
                        <Button onPress={deletePress} transparent={true} buttonStyle={{ width: '50%' }} textStyle={{ color: colors.red }}> Delete </Button>
                        <Spacer space={10} width="10" />
                        <Button onPress={editPress} buttonStyle={{ width: '50%' }}> Edit </Button>
                    </RowView>
                </> : null
               }
            </AddressItemContainer>
        </TouchableNativeFeedback>
    )
}

export default AddressItem