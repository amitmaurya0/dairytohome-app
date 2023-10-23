import React from 'react'
import { CategoryContainer, CategoryImage,  ImageContainer } from './styled';
import { Spacer, Text } from '../styles';
import fonts from '../../configs/fonts';
import colors from '../../configs/colors';
import { TouchableNativeFeedback } from 'react-native';
import { IMG_URL } from '../../configs';



const CategoryItem = ({ category={}, onCategoryPress }) => {
    const { name,  image='', id } = category
    console.log(category)
    return(
        <TouchableNativeFeedback onPress={onCategoryPress}>
            <CategoryContainer >
                <ImageContainer>
                    <CategoryImage source={{ uri: `${IMG_URL}${image}` }} />
                </ImageContainer>
                <Spacer space="5" />
                <Text color={colors.mainColor} fontFamily={fonts.bold} size={12}>{name}</Text>
            </CategoryContainer>
        </TouchableNativeFeedback>
    )
}

export default CategoryItem;