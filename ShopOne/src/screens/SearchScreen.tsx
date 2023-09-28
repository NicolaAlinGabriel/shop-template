import React, { FC } from 'react';
import { DefaultText, TallItemContainer } from '@components/styles';

import { Dimensions, FlatList, Image } from 'react-native';
import { Box, Stack } from '@react-native-material/core';
import StarRating from 'react-native-star-rating-widget';

const { width } = Dimensions.get("screen");

const equalMargins = (count: number, childW: number, parentW: number) => {
    const numerator = parentW - count * childW;
    const denominator = 2 * count;
    return numerator / denominator;
}


const SearchScreen: FC<any> = ({ route: { params }, navigation: { navigate } }) => {


    const currentMaring = equalMargins(2, width / 2 - 35, width);

    return (
        <Stack style={{ flex: 1, justifyContent: 'space-around', backgroundColor: 'white' }}>
            <FlatList
                contentContainerStyle={{ alignItems: 'flex-start', flex: 1, backgroundColor: 'white', justifyContent: 'flex-start' }}
                showsHorizontalScrollIndicator={false}
                data={params}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <TallItemContainer
                        style={{ alignSelf: 'center', marginHorizontal: currentMaring, marginVertical: currentMaring }}
                        width={width / 2 - 35}
                        key={index}
                        onPress={() => {
                            navigate("Item", item)
                        }}
                    >
                        <Image style={{ width: '90%', flex: 2, alignSelf: 'center', justifyContent: 'center' }} source={{ uri: item.icon }} resizeMode='contain' />
                        <Box style={{ flex: 1, justifyContent: 'center', padding: 5 }}>
                            <DefaultText style={{ textAlign: 'center' }} weight={700} size={'12px'}>{item.product_name}</DefaultText>
                        </Box>
                        <Box style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                            <StarRating
                                starSize={22}
                                rating={Number(item.rating) ?? 2}
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
        </Stack>
        //     {/* </Stack> */}
        // </StyledScrollView>
    )
}

export default SearchScreen