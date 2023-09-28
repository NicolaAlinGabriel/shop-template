import styled from "styled-components/native";


export const DefaultButton = styled.TouchableOpacity<{color?: string|any , type?: "outlined"|"link"}>`
    backgroundColor: ${(props) => props.color ?? "black"}
    borderWidth: ${(props)=>(props.type === "outlined" ? 1 : 0)}
    width: 70%
    height: 55px
    borderRadius: 5px
    justifyContent: center
    alignItems: center
    marginVertical: 5px
`