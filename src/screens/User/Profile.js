import React from 'react'
import MainWrapper from '../../components/MainWrapper';
import AccountTop from '../../components/ProfileComponents/AccountTop';
import SettingTabs from '../../components/ProfileComponents/SettingTabs';
import { Divider, Spacer } from '../../components/styles';
import { useSelector } from 'react-redux';

const Profile = () => {

  const user = useSelector((state) => state.user)
  const { name, mobile } = user;
  return (
    <MainWrapper title="Account">
      <Spacer space={10} />
      <AccountTop name={name} phone={mobile} /> 
      <Spacer space={20} />
      <Divider />
      <SettingTabs />
    </MainWrapper>
  )
}

export default Profile