import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { SettingItemContainer } from './styled'
import { CARET_RIGHT } from '../../configs/images'
import { Text } from '../styles'
import colors from '../../configs/colors'
import fonts from '../../configs/fonts'

const SettingTabItem = ({ title, onPress, color=colors.textBlack }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <SettingItemContainer>
            <Text fontFamily={fonts.bold} color={color}>{title}</Text>
            <Image style={{ height: 30, width: 30 }} source={CARET_RIGHT} />
        </SettingItemContainer>
    </TouchableOpacity>
  )
}

export default SettingTabItem