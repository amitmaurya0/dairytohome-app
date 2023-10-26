import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen'
import {connect} from 'react-redux'
import Login from './screens/Auth/Login'
import Otp from './screens/Auth/Otp'
import DeliveryType from './screens/DeliveryType'
import Loading from './components/Loading'
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import CartAddress from './screens/CartAddress';
import Checkout from './screens/Checkout';
import OrderSuccess from './screens/OrderSuccess'
import Profile from './screens/User/Profile'
import EditAccount from './screens/User/EditAccount'
import Addresses from './screens/User/Addresses'
import Orders from './screens/User/Orders'
import OrderDetails from './screens/User/OrderDetails'
import {getCartOfUser, getDataOfUser} from './database/UserData'
import {add_user, logout_user} from './actions/UserAction'
import { initialize_cart } from './actions/CartAction';
const Stack = createNativeStackNavigator();
 function MainRoute ({ add_user, userDetail, logout_user, initialize_cart }) {
    const [hideLoading, setHideLoading] = useState(false)

    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
      try {
        const bootstrapAsync = async () => {
          SplashScreen.hide()
          
          const userData = await getDataOfUser();
          const userCartData = await getCartOfUser();
          if (userData) {
            let user = {
              id: userData.id,
              name: userData.name,
              mobile: userData.mobile,
              image: userData.image,
              token: userData.token,
            }
            setTimeout(() => {

              initialize_cart(userCartData)
            }, 0)
            add_user(user)
            SplashScreen.hide()
            setHideLoading(true)
          } else {
            setHideLoading(true)
            logout_user()
            SplashScreen.hide()
          }
        }
        bootstrapAsync()
      } catch (error) {
        console.log(error);
      }
        
      }, [])

    if (!hideLoading) {
      // We haven't finished checking for the token yet
      return <Loading />
    }

    return (
        <Stack.Navigator initialRouteName="Home"  
          screenOptions={{ headerShown: false }}>
          {userDetail.isLoggedIn == false ? (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Otp" component={Otp} />
              </>
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} />
              <Stack.Screen name="Cart" component={Cart} />
              <Stack.Screen name="CartAddress" component={CartAddress} />
              <Stack.Screen name="Checkout" component={Checkout} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="EditAccount" component={EditAccount} />
              <Stack.Screen name="Addresses" component={Addresses} />
              <Stack.Screen name="Orders" component={Orders} />
              <Stack.Screen name="OrderDetails" component={OrderDetails} />
              <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
              <Stack.Screen name="DeliveryType" component={DeliveryType} />
            </>
          )}
        </Stack.Navigator>
    )
}


const mapStateToProps = (state, ownState) => ({
    userDetail: state.user,
  })
  
  const mapDispatchToProps = {
    add_user,
    logout_user,
    initialize_cart
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MainRoute)