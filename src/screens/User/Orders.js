import React, { useEffect, useState } from 'react'
import MainWrapper from '../../components/MainWrapper';
import { Divider, Spacer } from '../../components/styles';
import { useSelector } from 'react-redux';
import { getOrders } from '../../apis/order';
import { showSnackBarOne } from '../../components/showSnackBarOne';
import OrderItem from '../../components/OrderComponents/OrderItem';
import strings from '../../configs/strings';
import { FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import EmptyPage from '../../components/EmptyPage';

const Orders = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [orders, setOrders] = useState([]);
    // const navigation = useNavigation();

    const onPress = (id) => {
        navigation.navigate('OrderDetails', { orderId: id})
    }

    const fetchOrders = async() => {
        try {
            const resp = await getOrders();
            if(resp.status) {
                setLoading(false);
                setOrders(resp.orders);
            } else {
                showSnackBarOne(resp.message)
            }
        } catch (error) {
            console.log(error.message);
            showSnackBarOne(strings.general_error_msg)
        }
    }

    useEffect(() => {
        fetchOrders();
    }, [])
    
 
    return (
        <MainWrapper title="Orders" error={error} loading={loading}>
        <Spacer space={10} />

        <FlatList
            data={orders}
            renderItem={({item}) =><OrderItem key={item.id} order={item} onPress={() => onPress(item.id)} />}
            keyExtractor={(item) => item.id}
            refreshing={false}
            onRefresh={fetchOrders}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyPage title={strings.empty_address_title} subTitle={strings.empty_address_sub_title} />}
            key={1} 
        />
        </MainWrapper>
    )
}

export default Orders