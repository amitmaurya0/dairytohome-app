import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { OrderItemContainer, OrderNumberContainer, OrderProductContainer, OrderProductStatusContainer, OrderStatusContainer, RowContainer } from './styled';
import { Divider, Spacer, Text } from '../styles';
import colors, { orderStatusColor } from '../../configs/colors';
import fonts from '../../configs/fonts';
import PriceInfo from './PriceInfo';
import StepMarker from './StepMarker';
import AddressItem from '../AddressComponents';
import Button from '../Button';
import { OrderStatus } from '../../configs';

const data = [
    { title: 'Order Placed', status: 'PENDING', isCurrent: false },
    { title: 'Order Packed', status: 'CONFIRMED', isCurrent: false },
    { title: 'On your way', status: 'OUT_FOR_DELIVERY', isCurrent: false },
    { title: 'Order Delivered', status: 'DELIVERED', isCurrent: false },
  ];

const OrderInfo = ({ order, onDeletePress }) => {
    const { orderNumber, products=[], totalPrice, status, orderStatus,  deliveryDate, address={} } = order;
    console.log('orderStatus==>', orderStatus, OrderStatus.CANCELLED)
    return (
        <>
            <OrderItemContainer>
                {
                    products.map(item => <OrderProductContainer key={item.productVariantId}>
                                <Text fontFamily={fonts.bold}>{item.productName}({item.productVariant}) X {item.quantity}</Text>
                                <Text color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {item.price}</Text>
                            </OrderProductContainer>)
                }
                <PriceInfo order={order} />
            </OrderItemContainer>
            { 
                (orderStatus != OrderStatus.CANCELLED && orderStatus != OrderStatus.DELIVERED) ?
                <Button onPress={onDeletePress} textStyle={{ color: colors.red }} buttonStyle={{ borderColor: colors.red, borderWidth: 1, }} transparent={true}>Cancel Order</Button>
                : null
            }
            <Spacer />
            <Text fontFamily={fonts.bold}>Delivery Address</Text>
            <Spacer />
            <AddressItem address={address} />
            <Text fontFamily={fonts.bold}>Order Status</Text>
            <Spacer />
            <StepMarker deliveryDate={order.deliveryDate} data={data} statuses={status} currentStatus={orderStatus} />
        </> 
    )
}

export default OrderInfo