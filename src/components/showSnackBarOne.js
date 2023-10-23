import Snackbar from 'react-native-snackbar'
import colors from '../configs/colors'

export const snackBarType = {
  error: 'error',
  success: 'success',
}

const snackBarColor = {
  'error': colors.red,
  'success': colors.green
}

export const showSnackBarOne = async (message, type) =>  {
    await new Promise((resolve) => setTimeout(resolve, 200))
    Snackbar.show({
      textColor: 'white',
      backgroundColor: snackBarColor[type] ? snackBarColor[type] : '#717171',
      text: message,
      duration: Snackbar.LENGTH_SHORT,
    })
  }
export const showSnackBarOneFast = async (message) =>  {
    Snackbar.show({
      textColor: 'white',
      backgroundColor: '#717171',
      text: message,
      duration: Snackbar.LENGTH_SHORT,
    })
  }