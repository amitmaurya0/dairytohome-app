import React from 'react'
import { useNavigation } from '@react-navigation/core'
import SettingTabItem from './SettingTabItem'
import { Spacer, Text } from '../styles';
import fonts from '../../configs/fonts';
import { logout_user } from '../../actions/UserAction';
import { useDispatch } from 'react-redux';
const SettingTabs = props => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const onPress = (screen) => {
        navigation.navigate(screen)
    }

    const onLogoutPress = () => {
        dispatch(logout_user());
    }


    return (
        <>
            <SettingTabItem title="Orders" onPress={() => onPress('Orders')} />
            <SettingTabItem title="Manage Addresses" onPress={() => onPress('Addresses')} />
            <Spacer space={25} />
            <Text size={22} fontFamily={fonts.bold}>Setting</Text>
            <SettingTabItem title="Account" onPress={() => onPress('Orders')} />
            <Spacer space={25} />
            <Text size={22} fontFamily={fonts.bold}>General</Text>
            <SettingTabItem title="Terms & Conditions" onPress={() => onPress('Orders')} />
            <SettingTabItem color={'red'} title="Logout" onPress={onLogoutPress} />
        </>
    )
}

export default SettingTabs