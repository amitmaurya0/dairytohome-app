import React, { useEffect, useRef, useState } from 'react'
import { Container } from './styled'
import { Text, Divider, Spacer } from '../styles';
import { TouchableOpacity } from 'react-native';
import fonts from '../../configs/fonts';
import VariantItem from './VariantItem';
function AllVariants ({ productVariants=[], onVariantPress })  {
  const [selectedVariant, setSelectedVariant] = useState(productVariants[0] || {});
  const [showModal, setShowModal] = useState(false);

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  const toggleModal = () => {
  setShowModal(!showModal)
  }
  useEffect(() => {
    setSelectedVariant(productVariants[0]|| {})
  }, [productVariants])

  const onItemPress = (item) => {
    setSelectedVariant(item)
    onVariantPress(item)
    // toggleModal();
  }
  const sizeLength  = productVariants.length;
 
  return (
    <Container>
        <Text fontFamily={fonts.bold}>Select Variant</Text>
        <Spacer />
        <Divider />
        <Spacer />
        {
          productVariants.map((item, index) => <TouchableOpacity key={item.id} onPress={() => onItemPress(item)}>
                  <VariantItem variant={item} isSelected={ selectedVariant.id == item.id } />
          </TouchableOpacity> )
        }
      
    </Container>
  );
}

export default AllVariants;
