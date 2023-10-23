import React, { useEffect, useRef, useState } from 'react'
import { Container, ItemType, PickerContainer } from './styled'
import {Picker} from '@react-native-picker/picker';
import AddToCartButton from '../AddToCartButtons';
import SizeTypeDropdown from '../ProductVariantModal';
import { Text, Divider, Spacer } from '../styles';
import { TouchableOpacity } from 'react-native';
import fonts from '../../configs/fonts';
function AllProductSizes ({ productVariants=[] })  {
  const [selectedSize, setSelectedSize] = useState(productVariants[0] || {});
  const [showModal, setShowModal] = useState(false);
    const items = [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
    ];

    const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  const toggleModal = () => {
  setShowModal(!showModal)
  }
  useEffect(() => {
    setSelectedSize(productVariants[0]|| {})
  }, [productVariants])

  const onItemPress = (item) => {
    setSelectedSize(item)
    toggleModal();
  }
  const sizeLength  = productVariants.length;
  return (
    <Container>
      <SizeTypeDropdown closeModal={toggleModal} showModal={showModal} label={selectedSize.name} sty> 
        <Text size={18} fontFamily={fonts.bold}>Select Variant</Text>
        <Spacer />
        <Divider />
        {
          productVariants.map((item, index) => <TouchableOpacity key={item.id} onPress={() => onItemPress(item)}>
                  <ItemType style={ sizeLength-1 == index ? { borderBottomWidth: 0 } : {}}>
                    <Text>{item.name}</Text>
                  </ItemType>
          </TouchableOpacity> )
        }
      </SizeTypeDropdown>
      <AddToCartButton />
    </Container>
  );
}

export default AllProductSizes;
