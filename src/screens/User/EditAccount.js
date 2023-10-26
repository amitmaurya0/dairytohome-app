import React from 'react'
import MainWrapper from '../../components/MainWrapper';
import AccountTop from '../../components/ProfileComponents/AccountTop';
import SettingTabs from '../../components/ProfileComponents/SettingTabs';
import { Divider, RowView, Spacer, Text } from '../../components/styles';
import { useSelector } from 'react-redux';
import EditAccountRow from '../../components/ProfileComponents/EditAccountRow';
import colors from '../../configs/colors';
import fonts from '../../configs/fonts';
import { TouchableNativeFeedback } from 'react-native';

const EditAccount = () => {

  const user = useSelector((state) => state.user)
  const { name, mobile } = user;
  const onPress = () => {

  }
  return (
    <MainWrapper title="Edit Account">
      <Spacer space={10} />
      <EditAccountRow title="Name" value={name} onPress={onPress} />
      <Spacer space={10} />
      <EditAccountRow title="Phone Number" value={`+91-${mobile}`} onPress={onPress} />
    </MainWrapper>
  )
}

export default EditAccount