import styled from "styled-components/native";

export const DefaultText = styled.Text<{color?:string, size?: string, weight?: number}>`
    color: ${(props)=> props.color ?? 'black'}
    fontSize: ${(props)=>props.size ?? '16px'}
    fontWeight: ${(props)=> props.weight ?? 300}
`