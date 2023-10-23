import React, { useEffect, useState } from 'react'
import { Spacer, Text } from '../components/styles'
import MainWrapper from '../components/MainWrapper';
import ProductImage from '../components/ProductDetailsComponents/ProductImage'
import AllVariants from '../components/ProductDetailsComponents/AllVariants'
import BottomCard from '../components/ProductDetailsComponents/BottomCard'
import { ScrollView } from 'react-native';
import { getProductDetails } from '../apis/home';
import { showSnackBarOne } from '../components/showSnackBarOne';
import strings from '../configs/strings';
import { IMG_URL } from '../configs';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';
import fonts from '../configs/fonts';

const des = `Discover the pure essence of dairy with our organic milk. Sourced from happy, pasture-grazed cows, our milk is free from synthetic hormones and pesticides. It's nature's finest, delivering a rich and creamy taste that's as wholesome as it is delicious. Embrace a healthier choice for your family and the planet with our organic milk, nourishing both body and environment alike. Elevate your daily dairy experience today!`
const ProductDetails = ({ navigation, route }) => {
  const { cart=[] } = useSelector((state) => state);
  console.log('cart==>', cart)
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState(true);
  const [error, setError] = useState(false);
  const { id, name, image } = route.params || {}
  console.log(`${IMG_URL}${image}`);
  const fetchProductDetails = async () => {
    try {
        const details = await getProductDetails(id);
        setLoading(false);
        if(details.status) {
          setProduct(details.product);
          setSelectedVariant(details.product.productVariants[0])
        } else {
          setError(false);
          showSnackBarOne(details.message);
        }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(false);
      showSnackBarOne(strings.general_error_msg);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [])

  const onVariantPress = (item) => {
    setSelectedVariant(item)
  }

  return (
    <MainWrapper title={name} withCart >
      <ScrollView showsVerticalScrollIndicator={false}>
      <Spacer />
        <ProductImage imgUrl={`${IMG_URL}${image}`} />
        <Spacer />
        {
          loading ? <Loading /> :
          <>
            <Spacer />
            <Text size={20} fontFamily={fonts.bold}>{product.name}</Text>
            <Text size={13} >{product.categoryName}</Text>
            <Spacer />
            <AllVariants onVariantPress={onVariantPress} productVariants={product.productVariants}/>
            <Spacer space={20} />
            <Text style={{ lineHeight: 20 }}>{product.description}</Text>
            <Spacer space={100} />
          </>
        }
      </ScrollView>
      <BottomCard selectedVariant={selectedVariant} />
    </MainWrapper>
  )
}


export default ProductDetails