import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";


export const ScreenContainer = styled(SafeAreaView) <{ bgColor?: string }>`
    backgroundColor: ${(props) => props.bgColor ?? "white"}
    flex: 1
    justifyContent: center
    alignItems: center
`


export const AvoidingKeyboardContainer = styled.KeyboardAvoidingView<{ bgColor?: string }>`
    backgroundColor: ${(props) => props.bgColor ?? "white"}
    flex: 1
    justifyContent: center
    alignItems: center
`


export const ItemContainer = styled.TouchableOpacity`
    backgroundColor: white
    width: 90%
    borderWidth: 0.2px
    borderRadius: 5px
    height: 100px
    alignSelf: center
    marginVertical: 10px
`

export const ListContainer = styled(SafeAreaView) <{ bgColor?: string }>`
    backgroundColor: ${(props) => props.bgColor ?? "white"}
    flex: 1
`

export const StyledScrollView = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        showsVerticalScrollIndicator: false
    }
}))`
flex: 1
backgroundColor: white
`

export const TallItemContainer = styled.TouchableOpacity<{ width?: number | string }>`
    borderWidth: 0.2px
    borderRadius: 5px
    backgroundColor: white
    marginHorizontal: 10px
    height: 260px
    width: ${(props) => props.width ? `${props.width}px` : "200px"}
    alignSelf: center
`