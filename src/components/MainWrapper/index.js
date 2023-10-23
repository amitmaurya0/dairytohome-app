import React from 'react'
import StyledWrapper, {HeadingContainer, ImageIcon, LeftSideContainer, ImageContainer} from './styled'
import { MainHeading, SubHeading } from '../Headings'
import { Image, TouchableOpacity } from 'react-native'
import { BACK_ICON, CART_BLUE, CART_EMPTY, USER_ICON } from '../../configs/images'
import { Spacer } from '../styles'
import { useNavigation } from '@react-navigation/core'
import Loading from '../Loading'
import { useSelector } from 'react-redux'

const MainWrapper = ({ title="This is page title", withCart=false, withUser=false, children, subHeading, back=true, loading=false  }) => {
    const cart = useSelector((state) =>  state.cart);
    const navigation = useNavigation();
    
    return (
        <StyledWrapper>
            <HeadingContainer>
                <LeftSideContainer>
                    {
                        back && (<TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={BACK_ICON} style={{ height: 25, width: 25 }}></Image>
                        <Spacer space={'0'} width={'30'} />
                        </TouchableOpacity>)
                    }
                    <MainHeading>{title}</MainHeading>
                </LeftSideContainer>
                {
                    (withCart || withUser) && <ImageContainer>
                    {withCart && <TouchableOpacity onPress={()=>navigation.navigate('Cart')}> 
                                          {(cart && cart.length > 0 ) ?  <ImageIcon source={CART_BLUE} /> :  <ImageIcon source={CART_EMPTY} />}
                                </TouchableOpacity>}
                    {withUser && (<TouchableOpacity onPress={()=>navigation.navigate('Profile')}> 
                                    <ImageIcon source={USER_ICON} style={{ height: 25, width: 25 }} />
                                </TouchableOpacity>)}
                </ImageContainer>
                }
                
            </HeadingContainer>
            {subHeading && <SubHeading>{subHeading}</SubHeading>}
            <Spacer />
            {loading ? <Loading/> : children}
        </StyledWrapper>
    )
}

export default MainWrapper;