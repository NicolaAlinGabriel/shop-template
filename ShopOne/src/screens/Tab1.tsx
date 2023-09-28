import React, { FC } from 'react';
import { DefaultText, TallItemContainer } from '@components/styles';
import { observer } from 'mobx-react-lite';
import { ProductsStore } from '@store';
import { useEffect } from 'react';
import { StyledScrollView } from '@components/styles';
import { Dimensions, FlatList, Image } from 'react-native';
import { Box, Icon, Stack } from '@react-native-material/core';
import Carousel from 'react-native-reanimated-carousel';
import StarRating from 'react-native-star-rating-widget';

const { width } = Dimensions.get("screen");

const Tab1: FC<any> = ({ navigation }): JSX.Element => {

  const { campagins, fetchCampaigns, fetchServerProducts, serverProduct } = ProductsStore;

  useEffect(() => {
    // TODO: DON'T FETCH ALL DATA AT ONCE, PERFORMANCE ISSUE(TIMEOUT ?? LONG WAIT TIME ?? MEMORY ISSUE)
    fetchServerProducts();
  }, [serverProduct.length]);


  useEffect(() => {
    fetchCampaigns();
  }, [campagins.length]);

  return (
    <StyledScrollView showsVerticalScrollIndicator={false}>
      <Carousel
        autoPlay={true}
        autoPlayInterval={4000}
        scrollAnimationDuration={1000}
        loop
        width={width}
        style={{ marginBottom: 80 }}
        height={250}
        data={campagins}
        renderItem={({ item }) => (
          <Image
            resizeMode='contain'
            style={{ width: '100%', height: '100%' }}
            source={{ uri: item.icon }}
          />
        )}

      />

      <Stack direction='column' w={'100%'} spacing={20} style={{ padding: 15, marginBottom: 30 }}>
        <DefaultText weight={700} style={{ marginHorizontal: 10 }}>Head #1</DefaultText>
        <Box>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={serverProduct}
            horizontal
            renderItem={({ item, index }) => (
              <TallItemContainer
                width={width / 2 - 35}
                key={index}
                onPress={() => {
                  navigation.navigate("Item", item)
                }}
              >
                <Image style={{ width: '100%', flex: 2, alignSelf: 'center', justifyContent: 'center' }} source={{ uri: item.icon }} resizeMode='contain' />
                <Box style={{ flex: 1, justifyContent: 'center', padding: 5 }}>
                  <DefaultText style={{ textAlign: 'center' }} weight={700} size={'12px'}>{item.product_name}</DefaultText>
                </Box>
                <Box style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                  <StarRating
                    starSize={22}
                    rating={2}
                    style={{ alignSelf: 'flex-start', justifyContent: 'center', height: '100%', width: '100%' }}
                    onChange={() => {

                    }}
                  />
                </Box>
                <Box style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', padding: 5, borderBottomEndRadius: 6, borderBottomStartRadius: 6 }}>
                  <DefaultText weight={700} size={'16px'} >{item.price}</DefaultText>
                </Box>
              </TallItemContainer>
            )}
          />
        </Box>
      </Stack>
      {/* 
      <Stack direction='column' w={'100%'} spacing={20} style={{ padding: 15, marginBottom: 30 }}>
        <DefaultText weight={700} style={{ marginHorizontal: 10 }}>Head #1</DefaultText>
        <Box>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={products}
            horizontal
            renderItem={({ item, index }) => (
              <TallItemContainer
                width={width / 2 - 35}
                key={index}
                onPress={() => {
                  navigation.navigate("Item", item)
                }}
              >
                <Image style={{ width: '100%', flex: 2, alignSelf: 'center', justifyContent: 'center' }} source={{ uri: item.icon }} resizeMode='contain' />
                <Box style={{ flex: 1, justifyContent: 'center', padding: 5 }}>
                  <DefaultText style={{ textAlign: 'center' }} weight={700} size={'12px'}>{item.name}</DefaultText>
                </Box>
                <Box style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                  <StarRating //temporary
                    starSize={22}
                    rating={item.rating}
                    style={{ alignSelf: 'flex-start', justifyContent: 'center', height: '100%', width: '100%' }}
                    onChange={() => { console.log("asdsa") }}
                  />
                </Box>
                <Box style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', padding: 5, borderBottomEndRadius: 6, borderBottomStartRadius: 6 }}>
                  <DefaultText weight={700} size={'16px'} >{item.price}</DefaultText>
                </Box>
              </TallItemContainer>
            )}
          />
        </Box>
      </Stack>

      <Stack direction='column' w={'100%'} spacing={20} style={{ padding: 15, marginBottom: 30 }}>
        <DefaultText weight={700} style={{ marginHorizontal: 10 }}>Head #1</DefaultText>
        <Box>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={products}
            horizontal
            renderItem={({ item, index }) => (
              <TallItemContainer
                width={width / 2 - 35}
                key={index}
                onPress={() => {
                  navigation.navigate("Item", item)
                }}
              >
                <Image style={{ width: '100%', flex: 2, alignSelf: 'center', justifyContent: 'center' }} source={{ uri: item.icon }} resizeMode='contain' />
                <Box style={{ flex: 1, justifyContent: 'center', padding: 5 }}>
                  <DefaultText style={{ textAlign: 'center' }} weight={700} size={'12px'}>{item.name}</DefaultText>
                </Box>
                <Box style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                  <StarRating
                    starSize={22}
                    rating={item.rating}
                    style={{ alignSelf: 'flex-start', justifyContent: 'center', height: '100%', width: '100%' }}
                    onChange={() => { console.log("asdsa") }}
                  />
                </Box>
                <Box style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', padding: 5, borderBottomEndRadius: 6, borderBottomStartRadius: 6 }}>
                  <DefaultText weight={700} size={'16px'} >{item.price}</DefaultText>
                </Box>
              </TallItemContainer>
            )}
          />
        </Box>
      </Stack> */}
    </StyledScrollView>
  );
};

export default observer(Tab1);
