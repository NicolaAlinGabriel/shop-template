
import React, { FC, useState } from 'react'
import { DefaultText, ScreenContainer } from '@components/styles'
import { Box, Stack } from '@react-native-material/core'
import { Button } from '@components/elements'
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import { useAuth } from '@api';

const full = "checkbox-blank-circle"
const empty = "checkbox-blank-circle-outline"

const SelectCard: FC<any> = ({ item, isSelected, onPress }) => {
    return (
        <TouchableWithoutFeedback style={{ flexDirection: 'row', alignItems: 'center' }} onPress={onPress}>
            <Icon name={isSelected ? full : empty} style={{ marginHorizontal: 5 }} />
            <DefaultText style={{ marginVertical: 10 }}>{item.type}</DefaultText>
        </TouchableWithoutFeedback>
    )
}

const PlaceOrder = () => {
    const [current, setCurrent] = useState<any>();
    const paymentTypes = [
        {
            v: 0,
            type: "Online with card",
        },
        {
            v: 1,
            type: "Cash on delivery",
        },
        {
            v: 2,
            type: "Pick Up yourself",
        }
    ]

    return (
        <ScreenContainer style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'space-between' }} >

            <DefaultText style={{ textAlign: 'center' }} weight={700}>
                Make sure to choose al the right options before placing an order
            </DefaultText>

            <Box style={{ width: '90%', padding: 10 }}>
                {paymentTypes.map((item, index) => (
                    <SelectCard
                        onPress={() => {
                            setCurrent(item)
                        }}
                        key={index}
                        isSelected={item.v === current?.v}
                        item={item}
                    />
                ))}
            </Box>

            <Button
                label='Place Order'
                onPress={() => {
                    console.table(paymentTypes)
                }}
            />
        </ScreenContainer>
    )
}

export default PlaceOrder