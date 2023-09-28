import React from 'react';
import { DefaultText, ScreenContainer } from '@components/styles';
import { UserStore } from '@store';
import { FlatList, TouchableOpacity } from 'react-native';

const Tab4 = () => {

  const { products } = UserStore

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          key={index}
          style={{ backgroundColor: 'black', alignSelf: 'center', width: '95%', height: 100, borderRadius: 6, marginVertical: 10 }}
        />
      )}
    />
  );
};

export default Tab4;
