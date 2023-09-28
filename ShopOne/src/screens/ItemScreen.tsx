import React, { FC } from 'react'
import { DefaultText, StyledScrollView } from '@components/styles'
import { Image } from 'react-native'

const ItemScreen: FC<any> = ({ route: { params }, navigation }) => {
    navigation.setOptions({ headerTitle: params.product_name })

    return (
        // TODO: EACH ITEM
        <StyledScrollView showsVerticalScrollIndicator={false}>
            <Image
                resizeMode='stretch'
                style={{ height: 300, width: '100%', marginBottom: 20 }}
                source={{ uri: params.icon }}
            />

            <DefaultText weight={600} size='24px'>
                {params.product_name}
            </DefaultText>

        </StyledScrollView>
    )
}

export default ItemScreen