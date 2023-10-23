import React, {Component} from 'react'
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native'

import Snackbar from 'react-native-snackbar'
import {logout} from '../../api/NetworkRequest'
import StatusBarComponent from '../../components/StatusBarComponent'
import {logoutUser} from '../../database/UserData'
import {colorPrimary, windowBackground} from '../../styles/Color'
import {pagePadding} from '../../styles/Dimens'
import {logout_user} from '../../actions/UserAction'
import { connect } from 'react-redux'

class LogoutPage extends Component {
  state = {
    clickOn: '0',
    loader: true,
    userDetail: {},
  }
  constructor (props) {
    super(props)
  }

  loaderUpdate (status) {
    this.setState({
      loader: status,
    })
  }

  componentDidMount () {
    this.getUserDetail()
  }

  getUserDetail = async () => {
    console.log(this.props)
    setTimeout(()=>
        {
        logoutUser()
        this.props.logout_user()
      }, 2000)
      
    // if (this.props.route.params.isLogout) {
    //   console.log('inside')
    //   this.onItemPress()
    // } else {
    //   setTimeout(()=>
    //     {
    //     logoutUser()
    //     this.props.logout_user()
    //   }, 2000)
    // }
  }

  onItemPress = async () => {
    //   Keyboard.dismiss()

    this.loaderUpdate(true)

    const homeDetail = await logout()
    console.log(homeDetail)
    if (homeDetail.status == 200) {
      // await new Promise((resolve) => setTimeout(resolve, 3000))
      console.log("Logout")

      logoutUser()
      this.props.logout_user()

    } else {
      console.log("hkjnkjnkj")

      logoutUser()
      this.props.logout_user()
      
      this.loaderUpdate(false)
    }
  }

  async showSnackBar (message) {
    //console.log('first')
    await new Promise((resolve) => setTimeout(resolve, 200))
    //console.log('Second')

    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_LONG,
    })
  }

  render () {
    return (
      <View
        style={{
          padding: pagePadding,
          backgroundColor: windowBackground,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBarComponent />
        <ActivityIndicator color={colorPrimary} size='small' />
        <Text style={{textAlign: 'center'}}>{'Log Out'}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, ownState) => ({
  userDetail: state.user,
})
const mapDispatchToProps = {
  logout_user,
}
export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage)
