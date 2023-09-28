import React, { FC, useCallback } from 'react';
import { Box, Stack } from '@react-native-material/core';
import { FlatList } from 'react-native-gesture-handler';
import { DefaultText } from '@components/styles';
import { Dimensions, TouchableOpacity, Image } from 'react-native';
import { ProductsStore } from '@store';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useArrayFilter } from '../hooks/arrayFilter';
import { Routes } from '@navigation';



const { width } = Dimensions.get('screen');
// TODO: DON'T NEED TO RE-DECLARE EVERY RENDER
const equalMargins = (count: number, childW: number, parentW: number) => {
  const numerator = parentW - count * childW;
  const denominator = 2 * count;
  return numerator / denominator
}

const Tab2: FC<any> = () => {
  const { navigate } = useNavigation<NavigationProp<any>>();
  const { serverProduct } = ProductsStore;
  const { toObjArray } = useArrayFilter();

  const data = toObjArray(serverProduct, `category_name`)

  const currentMaring = equalMargins(3, 100, width);

  return (
    <FlatList
      numColumns={3}
      contentContainerStyle={{ alignItems: 'flex-start', flex: 1, backgroundColor: 'white', justifyContent: 'flex-start' }}
      data={data}
      renderItem={({ item, index }) => (
        <Stack direction='column' style={{ alignItems: 'center', backgroundColor: 'transparent', marginHorizontal: currentMaring, marginVertical: currentMaring }} key={index}>
          <TouchableOpacity
            onPress={_ => {
              navigate(Routes.stack.SearchScreen.name, item['value'])
            }}
            style={{ height: 100, width: 100, borderRadius: 5 }}
          >
            <Image
              style={{ flex: 1, borderRadius: 5 }}
              resizeMode='cover'
              source={{ uri: item['value'][0].category_icon }}
            />
          </TouchableOpacity>
          <DefaultText weight={600} size='16px'>
            {`${item['name']} (${item['value'].length})`}
          </DefaultText>
        </Stack>
      )}
    />
  );
};

export default Tab2;
