import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 40px;
    border-bottom-width: 0.5px;
    border-style: solid;
    border-bottom-color: ${({ theme }) => theme.colors.text_color};
    margin-bottom: ${RFValue(30)}px;

`;

export const TextInput = styled.TextInput`
    color: ${({ theme }) => theme.colors.text_color};
    font-size: 17px;
`;
