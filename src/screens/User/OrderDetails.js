import React, { useEffect, useState } from 'react'
import MainWrapper from '../../components/MainWrapper';
import { BGOverlvay, LabelView, RowView, Spacer, Text } from '../../components/styles';
import { cancelOrder, getOrders } from '../../apis/order';
import { showSnackBarOne } from '../../components/showSnackBarOne';
import OrderInfo from '../../components/OrderDetailsComponents/OrderInfo';
import strings from '../../configs/strings';
import { ActivityIndicator, Alert, ScrollView } from 'react-native';
import fonts from '../../configs/fonts';
import colors from '../../configs/colors';

const OrderDetails = ({ route }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [order, setOrder] = useState({});
    const [processing, setProcessing] = useState(false);


    const { orderId } = route.params;
  
    const fetchOrderDetails = async () => {
        try {
            const resp = await getOrders(orderId);
            setLoading(true);
            if(resp.status) {
                setLoading(false);
                setOrder(resp.details);
            } else {
                showSnackBarOne(resp.message)
            }
        } catch (error) {
            console.log(error.message);
            showSnackBarOne(strings.general_error_msg)
        }
    }

    useEffect(() => {
        fetchOrderDetails();
    }, [])
    
    const sendDeleteRequest = async () => {
        try {
            setProcessing(true)
            const resp = await cancelOrder(orderId);
            setProcessing(false);
            if(resp.status) {
                fetchOrderDetails();
            } else {
                showSnackBarOne(resp.message)
            }
        } catch (error) {
            setProcessing(false);
            showSnackBarOne(strings.general_error_msg)
        }
    }

    const onDeletePress = (add) => {
        const id = add.id;
        Alert.alert('Confirm', 'Do you want to cancel this order?', [
           
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'Proceed', onPress: sendDeleteRequest},
          ]);
    }
    
 
    return (
        <MainWrapper title="Order Details" error={error} loading={loading}>
            { processing &&  <BGOverlvay full={true}> 
                            <ActivityIndicator color={colors.white} />
                        </BGOverlvay>
            }
            <RowView>
                <Text fontFamily={fonts.bold} size={18}>{order.orderNumber}</Text>
                <LabelView>
                    <Text size={12} fontFamily={fonts.bold} color={colors.white}>
                        { order.deliveryType == 1 ? 'Instant Delivery' : 'Slot Delivery' }
                    </Text>
                </LabelView>
            </RowView>
            <Spacer space={20} />
            <ScrollView showsVerticalScrollIndicator={false}>
            <OrderInfo order={order} onDeletePress={onDeletePress} />
            </ScrollView>
        </MainWrapper>
    )
}

export default OrderDetails