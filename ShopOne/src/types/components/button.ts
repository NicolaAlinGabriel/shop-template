import { StyleProp } from "react-native";

export interface DefaultButtonInterface {
    label: string,
    onPress?: () => void,
    extraProps?: StyleProp<any>
}