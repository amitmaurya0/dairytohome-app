import React, { useEffect, useState } from 'react'
import { Spacer, Text } from '../components/styles'
import MainWrapper from '../components/MainWrapper';

import AddressItem from '../components/AddressComponents'
import FloatingButton from '../components/FloatingButton'
import AddressForm from '../components/AddressForm'
import { FlatList, ScrollView, View } from 'react-native';
import { showSnackBarOne, snackBarType } from '../components/showSnackBarOne';
import BottomFloatingButton from '../components/BottomFloatingButton';
import EmptyPage from '../components/EmptyPage';
import strings from '../configs/strings';
import { ARROW_RIGHT, CARET_RIGHT, PLUS_ICON } from '../configs/images';
import { getAddresses } from '../apis/user';

const CartAddress = ({ navigation, route }) => {
    const [addresses, setAddresses] = useState([]);
    const [showAddressFrom, setShowAddressFrom] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState({});
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { totalPrice } = route.params;
    const fetchAddresses = async () => {
        try {
            setLoading(true);
            const details = await getAddresses();
            setLoading(false);
            
            if(details.status) {
                setAddresses(details.addresses);
            } else {
                setError(false);
                showSnackBarOne(details.message);
            }
        } catch (error) {
        console.log(error);
        setLoading(false);
        setError(false);
        showSnackBarOne(strings.general_error_msg);
        }
    }
    const onAddressPress = (data) => {
        setSelectedAddress(data)
    }
    const onCheckoutPress = () => {
        if(!selectedAddress.id) {
            showSnackBarOne(strings.select_your_address, snackBarType.error);
            return;
        }
        navigation.navigate('Checkout', { address: selectedAddress })
    }

    const onSuccess = () => {
        fetchAddresses();
        setShowAddressFrom(false);
    }

    useEffect(() => {
        fetchAddresses();
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <MainWrapper loading={loading} title="Select Address" >
                <FlatList
                    data={addresses}
                    renderItem={({item}) => <AddressItem key={item.id} selectedId={selectedAddress.id} address={item} onPress={() => onAddressPress(item)} />}
                    keyExtractor={(item) => item.id}
                    refreshing={false}
                    onRefresh={fetchAddresses}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<EmptyPage title={strings.empty_address_title} subTitle={strings.empty_address_sub_title} />}
                    key={1} 
                />
               
                <FloatingButton image={PLUS_ICON} title="Add Address" onPress={() => setShowAddressFrom(!showAddressFrom)} />
                <BottomFloatingButton 
                    buttonText="Checkout"
                    onPress={onCheckoutPress}
                    price={totalPrice}
                    icon={ARROW_RIGHT}
                />
            
            </MainWrapper>
            <AddressForm onSuccess={onSuccess} onCancel={() => setShowAddressFrom(false)} visible={showAddressFrom} />
        </View>
    )
}


export default CartAddress