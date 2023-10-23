import React, { useEffect, useState } from 'react'
import MainWrapper from '../../components/MainWrapper';

import AddressItem from '../../components/AddressComponents'
import FloatingButton from '../../components/FloatingButton'
import AddressForm from '../../components/AddressForm'
import { ActivityIndicator, Alert, Dimensions, FlatList, Image, ScrollView, View } from 'react-native';
import { showSnackBarOne, snackBarType } from '../../components/showSnackBarOne';
import BottomFloatingButton from '../../components/BottomFloatingButton';
import EmptyPage from '../../components/EmptyPage';
import strings from '../../configs/strings';
import { ARROW_RIGHT, CARET_RIGHT, PLUS_ICON } from '../../configs/images';
import { deleteAddress, getAddresses } from '../../apis/user';
import Button from '../../components/Button';
import colors from '../../configs/colors';
import { BGOverlvay } from '../../components/styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Addresses = ({ navigation }) => {
    const [addresses, setAddresses] = useState([]);
    const [showAddressFrom, setShowAddressFrom] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState({});
    
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(false);
    const fetchAddresses = async () => {
        try {
            setLoading(true);
            const details = await getAddresses();
            setLoading(false);
            
            if(details.status) {
                console.log(details.addresses);
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

    const sendDeleteRequest = async (addressId) => {
        try {
            setProcessing(true);
            const details = await deleteAddress(addressId);
            setProcessing(false);
            if(details.status) {
                fetchAddresses();
            } else {
                showSnackBarOne(details.message);
            }
        } catch (error) {
        setProcessing(false);
        showSnackBarOne(strings.general_error_msg);
        }
    }

    const onEditPress = (data) => {
        setShowAddressFrom(true)
        setSelectedAddress(data)
    }

    const onDeletePress = (add) => {
        const id = add.id;
        Alert.alert('Confirm', 'Do you want to delete this address?', [
           
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'Proceed', onPress: () => sendDeleteRequest(id)},
          ]);
    }

    const onSuccess = () => {
        setShowAddressFrom(false)
        fetchAddresses();
    }

    useEffect(() => {
        fetchAddresses();
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <MainWrapper loading={loading} title="Select Address" >
            { processing &&  <BGOverlvay full={true}> 
                <ActivityIndicator color={colors.white} />
            </BGOverlvay>}
               { <FlatList
                    data={addresses}
                    renderItem={({item}) =><AddressItem editPage={true} address={item} editPress={() => onEditPress(item)} deletePress={() => onDeletePress(item)} />}
                    keyExtractor={(item) => item.id}
                    refreshing={false}
                    onRefresh={fetchAddresses}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<EmptyPage title={strings.empty_address_title} subTitle={strings.empty_address_sub_title} />}
                    key={1} 
                />}
                <View style={{ paddingTop:10, paddingBottom: 10 }}>
                    <Button onPress={() => setShowAddressFrom(!showAddressFrom)}>
                        <Image source={PLUS_ICON} tintColor={colors.white} style={{ height: 20, width: 20 }} />
                        Add Address
                    </Button>
                </View>
                
            </MainWrapper>
            <AddressForm address={selectedAddress} onSuccess={onSuccess} onCancel={() => setShowAddressFrom(false)} visible={showAddressFrom} />
        </View>
    )
}


export default Addresses