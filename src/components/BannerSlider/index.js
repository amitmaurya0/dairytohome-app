import React, { useState } from 'react';
import { Dimensions, FlatList, Image, View } from 'react-native';
import { Dot, DotContainer, ImageItemContainer } from './styled';
import { SLIDER_IMAGE } from '../../configs/images';
import { IMG_URL } from '../../configs';

const window = Dimensions.get('window');

const Dots = ({ index, images }) => {
  return (
    <DotContainer>
      {images.map((_, i) => {
        return <Dot key={i}  active={i === index} />;
      })}
    </DotContainer>
  );
};

const BannerSlider = ({ images }) => {
    const [index, setIndex] = useState(0);
    const width = window.width - 40;
    console.log('index', images)
    return (
        <View>
          <FlatList
              data={images}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={ev => {
              setIndex(Math.floor(ev.nativeEvent.contentOffset.x / width));
              }}
              renderItem={({ item, index }) => {
                  return (
                  <ImageItemContainer key={item.id} style={{ width, shadowOffset: { width: 2, height: 2 } }}>
                      <Image source={{ uri: `${IMG_URL}${item.image}` }} style={{ width: '100%', height: '100%', borderRadius: 12 }} />
                  </ImageItemContainer>
              )}}
          />
          {images.length > 1 && <Dots index={index} images={images} />}
        </View>
    );
};

export default BannerSlider;
