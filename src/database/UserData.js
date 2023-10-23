import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveDataOfUser = async userData => {

  try {
    await AsyncStorage.setItem('UserData', JSON.stringify(userData))
  } catch (e) {
    //console.log(e)
    // saving error
  }
}

export const updateDataOfUser = async result => {
  try {
    await AsyncStorage.getItem('UserData')
      .then(data => {
        //console.log(data);
        data = JSON.parse(data)
        //console.log(data);
        data.full_name = result.full_name
        data.image = result.image
        data.email = result.email
        //console.log(data);
        //save the value to AsyncStorage again
        AsyncStorage.setItem('UserData', JSON.stringify(data))
      })
      .done()
  } catch (e) {
    // error reading value
  }
}
export const updateDataOfUserAddress = async result => {
  try {
    await AsyncStorage.getItem('UserData')
      .then(data => {
        //console.log(data);
        data = JSON.parse(data)
        //console.log(data);
        data.lat = result.position.lat
        data.lng = result.position.lng
        data.address = result.formattedAddress
        //console.log(data);
        //save the value to AsyncStorage again
        AsyncStorage.setItem('UserData', JSON.stringify(data))
      })
      .done()
  } catch (e) {
    // error reading value
  }
}
export const updateDataOfUserKey = async (type, dataReceive) => {
  try {
    await AsyncStorage.getItem('UserData')
      .then(data => {
        //console.log(data);
        data = JSON.parse(data)
        console.log(dataReceive)

        data.name = dataReceive.name
        data.email = dataReceive.email
        data.image = dataReceive.image

        AsyncStorage.setItem('UserData', JSON.stringify(data))
      })
      .done()
  } catch (e) {
    // error reading value
  }
}


export const saveCartOfUser = async data => {
  try {
    await AsyncStorage.setItem('UserCart', JSON.stringify(data))
  } catch (e) {
    throw 'Error while saving user cart.'
  }
}
export const getCartOfUser = async _ => {
  try {
    let data = await AsyncStorage.getItem('UserCart');
    if(data) {
      return JSON.parse(data)
    } {
      return [];
    }
  } catch (e) {
    throw 'Error while saving user cart.'
  }
}

export const getDataOfUser = async () => {
  try {
    const userData = await AsyncStorage.getItem('UserData')
    console.log('userData=>', userData)
    if (userData !== null) {
      return JSON.parse(userData)
      // value previously stored
    }
  } catch (e) {
    console.log(e)
    throw e;
    // error reading value
  }
}
export const logoutUser = async () => {
  try {
    const userData = await AsyncStorage.clear()
    //console.log(userData)
  } catch (e) {
    //console.log(e)
    // error reading value
  }
}
export const saveSoundStatus = async result => {
  // console.log(result)

  try {
    await AsyncStorage.setItem('sound', result)
    // await AsyncStorage.clear()
  } catch (e) {
    // console.log(e)
    // saving error
  }
}
export const getSoundStatus = async () => {
  try {
    const langData = await AsyncStorage.getItem('sound')
    if (langData !== null) {
      return langData
      // value previously stored
    } else {
      return '1'
    }
  } catch (e) {
    // error reading value
  }
}

export const saveLanguage = async result => {
  // console.log(result)

  try {
    await AsyncStorage.setItem('lang', result)
    // await AsyncStorage.clear()
  } catch (e) {
    // console.log(e)
    // saving error
  }
}
export const getLanguage = async () => {
  try {
    const langData = await AsyncStorage.getItem('lang')
    if (langData !== null) {
      return langData
      // value previously stored
    } else {
      return 'en'
    }
  } catch (e) {
    // error reading value
  }
}
