import React, { FC, useEffect, useRef, useState } from 'react';
import { DefaultButton, DefaultText, ItemContainer, ScreenContainer } from '@components/styles';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { ProductsStore as ps } from '@store';
import { Box, Stack } from '@react-native-material/core';
import { Divider } from 'react-native-flex-layout';
import { Button } from '@components/elements';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Routes } from '@navigation';
import { useArray, useArrayFilter } from '@customHooks';

const Tab3 = () => {
  const { first } = useArray();
  const { toObjArray } = useArrayFilter();
  const { stack: { PlaceOrder, ItemScreen } } = Routes
  const { navigate } = useNavigation<NavigationProp<any>>();
  const { serverProduct } = ps;
  const sliced = serverProduct.slice(0, 2);
  const transport = (0).toFixed(2)

  const [myCart, setMyCart] = useState<any[]>(sliced);
  const currentData = toObjArray(myCart, 'product_name');

  const getTotal = (array: any[]): string => {
    let total: number = 0;
    for (let item of array) {
      total = total + Number(item.price)
    }
    return total.toFixed(2);
  };

  const addToArray = (array: any[], item: any) => {
    return [...array, item]
  };

  const removeFromArray = (array: any[], itemToRm?: any) => {
    let indexToRm = 0;

    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i].product_name === itemToRm) {
        indexToRm = i
        break
      }
    };

    const newArr = [...array]
    newArr.splice(indexToRm, 1);
    return newArr;

  };

  const QuantityControl: FC<any> = ({ item }): JSX.Element => {
    return (
      <Stack style={{ flex: 1, backgroundColor: 'white', justifyContent: 'space-evenly', flexDirection: 'row', borderRadius: 10 }}>
        <TouchableOpacity
          onPress={() => {
            setMyCart(removeFromArray(myCart, item['name']));
          }}
          style={{ flex: 1, borderWidth: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <DefaultText>-</DefaultText>
        </TouchableOpacity>
        <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <DefaultText>{item['value'].length}</DefaultText>
        </Box>
        <TouchableOpacity
          onPress={() => {
            setMyCart(addToArray(myCart, first(item['value'])))
          }}
          style={{ flex: 1, borderWidth: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <DefaultText>+</DefaultText>
        </TouchableOpacity>
      </Stack>
    )
  };

  return (
    myCart.length > 0 ?
      <Stack style={{ flex: 1, justifyContent: 'space-around', backgroundColor: 'white' }}>
        <FlatList
          data={currentData}
          renderItem={({ item }) => (
            // USE CART-ITEM COMPONENT ?
            <TouchableOpacity
              onPress={_ => navigate(ItemScreen.name, item['value'][0])}
              style={{ alignSelf: 'center', height: 185, backgroundColor: 'transparent', width: '98%', marginVertical: 10, borderRadius: 10, borderWidth: 0.2, flexDirection: 'row', padding: 5 }}
            >
              <Stack style={{ flexDirection: 'column', flex: 1 }}>
                <Image
                  resizeMode='contain'
                  style={{
                    flex: 3
                  }}
                  source={{ uri: first(item['value']).icon }}
                />
                <QuantityControl item={item} />
              </Stack>
              <Stack
                style={{ flex: 1.5, backgroundColor: 'transparent', padding: 10 }}
              >
                <Box style={{ flex: 3, justifyContent: 'flex-start' }}>
                  <DefaultText size='24px' weight={500} style={{ alignSelf: 'center' }}>
                    {item.name}
                  </DefaultText>
                </Box>
                <Box style={{ flex: 1, justifyContent: 'center' }}>
                  <DefaultText size='24px' weight={700} style={{ alignSelf: 'center' }}>
                    {getTotal(item['value'])} lei
                  </DefaultText>
                </Box>
              </Stack>
            </TouchableOpacity>
          )}
        />
        {/* BOTTOM VIEW  */}
        <Stack
          direction='column'
          style={{ marginTop: 30, padding: 15, height: '35%', width: '98%', backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, borderTopWidth: 0.2, borderLeftWidth: 0.2, borderRightWidth: 0.2, alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between' }} >
          <Box style={{ width: '90%', height: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <DefaultText>Products({myCart.length}): </DefaultText>
            <DefaultText>{getTotal(myCart)} lei</DefaultText>
          </Box>
          <Box style={{ width: '90%', height: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <DefaultText>Transport: </DefaultText>
            <DefaultText>{transport} lei</DefaultText>
          </Box>
          <Divider style={{ width: '100%', alignSelf: 'center', backgroundColor: 'darkgrey' }} />
          <Box style={{ width: '90%', height: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <DefaultText>Total: </DefaultText>
            <DefaultText>{getTotal(myCart) + transport}</DefaultText>
          </Box>
          <Button
            label='Continue'
            onPress={() => navigate(PlaceOrder.name)}
          />
        </Stack>
      </Stack> :
      <DefaultText>Nothing to see here </DefaultText>
  );
};

export default Tab3;
