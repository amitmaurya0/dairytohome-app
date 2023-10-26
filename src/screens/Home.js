import React, { useEffect, useState } from 'react'
import MainWrapper from '../components/MainWrapper'
import BannerSlider from '../components/BannerSlider'
import { Spacer, Text } from '../components/styles'
import ProductItem from '../components/ProductItem'
import CategoryItem from '../components/CategoryItem'
import { useSelector } from 'react-redux'
import { getHomeProducts } from '../apis/home'
import { showSnackBarOne } from '../components/showSnackBarOne'
import DeliveryTypeDropdown from '../components/HomeComponents/DeliveryTypeDropdown'
import { TopContainer } from '../components/HomeComponents/styled'
import strings from '../configs/strings'
import deliveryTypes from '../configs/deliveryTypes'
import { IMG_URL } from '../configs'
import { FlatList, View } from 'react-native'
import fonts from '../configs/fonts'
import { CommonActions } from '@react-navigation/native'

const Home = ({ navigation }) => {
    const { deliveryType, user } = useSelector((state) => ({
        deliveryType: state.deliveryType,
        user: state.user,
    }));

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [bannerImages, setBannerImages] = useState([]);

    const fetchHomeProducts = async () => {
        try {
           
            const resp = await getHomeProducts();
            setLoading(false)
            console.log(resp)
            if(resp.status) {
                setProducts(resp.products);
                setCategories(resp.categories);
                setBannerImages(resp.banners || []);
            } else {
                setError(true);
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(true);
            showSnackBarOne(strings.general_error_msg+'sdfsdaa')
        }
    }
    
    useEffect(() => {
        // navigation.pop()
        fetchHomeProducts();
    }, [])

   
    
    return(
        <MainWrapper loading={loading} title={`Welcome ${user.name}`} withCart withUser back={false}>
            <FlatList
                data={[1]}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ outerItem }) => (
                    <View>
                    <TopContainer>
                        <DeliveryTypeDropdown deliveryType={deliveryType.deliveryType} />
                    </TopContainer>
                    <Spacer space={20} />
                    {bannerImages.length > 0 ? <BannerSlider images={bannerImages} /> : null}
                    <Spacer space={20} />
                
                {/*  {
                        categories.map((pro) => {
                            return <CategoryItem key={pro.id} product={pro} onProductPresss={() => navigation.navigate('ProductDetails', { id: pro.id, name: pro.name, image: pro.image })} />
                        })
                    } */}
                    
                       {/*  {
                            categories && categories.length > 0 &&
                                <View>
                                    <Text size={14} fontFamily={fonts.bold}>Categories</Text>
                                    <Spacer space={10} />
                                    <FlatList
                                        data={categories}
                                        renderItem={({item}) => <CategoryItem category={item} onProductPresss={() => navigation.navigate('ProductDetails', { category: item })} />}
                                        keyExtractor={(item) => item.id}
                                        refreshing={false}
                                        onRefresh={() => true}
                                        />
                                </View>
                        } */}
                    <Spacer space={10} />
                    <Text>Choose from our best collection of organic dairy products</Text>
                    <Spacer space={10} />
                
                    <FlatList
                        data={products}
                        renderItem={({item}) => <ProductItem key={item.id} product={item} onProductPresss={() => navigation.navigate('ProductDetails', { id: item.id, name: item.name, image: item.image })} />}
                        keyExtractor={(item) => item.id}
                        refreshing={false}
                        onRefresh={() => true}
                        numColumns={2}
                        key={2} 
                        columnWrapperStyle={{justifyContent: 'space-between'}} 
                    />
                     <Spacer space={10} />
                 </View>
                )}
                />
                
        </MainWrapper>
    )
}

export default Home;