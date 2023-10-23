import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { OrderItemContainer, OrderNumberContainer, OrderProductContainer, OrderProductStatusContainer, OrderStatusContainer } from './styled';
import { Divider, Spacer, Text } from '../styles';
import colors, { orderStatusColor } from '../../configs/colors';
import fonts from '../../configs/fonts';
import { OrderStatusText } from '../../configs';

const OrderItem = ({ order, onPress }) => {
    const { orderNumber, items, totalPrice, status, deliveryDate } = order;
    const statusColor = orderStatusColor[status] ? orderStatusColor[status] : colors.red;
    const displayStatus = OrderStatusText[status];
    const itemLength = items.length - 2;
    return (
        <TouchableOpacity onPress={onPress}>
            <OrderItemContainer>
                <OrderNumberContainer>
                    <Text color={colors.mainColor} fontFamily={fonts.bold}>#{orderNumber}</Text>
                    <Text color={colors.mainColor} fontFamily={fonts.bold}>{'\u20B9'} {totalPrice}</Text>
                </OrderNumberContainer>
                <OrderProductStatusContainer>
                    <OrderProductContainer>
                        {
                            items.slice(0, 2).map((item, index) => <View>
                                        <Text size={14} fontFamily={fonts.bold}>{item.productName}({item.productVariant}) X ({item.quantity}){ index == 1 && itemLength > 0 ? ` +${itemLength}`:`` }</Text>
                                    </View>)
                        }
                    </OrderProductContainer>
                    <OrderStatusContainer>
                        <Text color={statusColor} size={14} fontFamily={fonts.bold}>{displayStatus}</Text>
                        <Spacer space={2} />
                        <Text size={14}>{deliveryDate}</Text>
                    </OrderStatusContainer>
                </OrderProductStatusContainer>
            </OrderItemContainer>
        </TouchableOpacity>
    )
}

export default OrderItem