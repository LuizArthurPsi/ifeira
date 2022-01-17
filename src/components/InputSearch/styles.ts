import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 98%;
    height: 55px;
    background-color: ${({ theme }) => theme.colors.input_search};
    padding: 0 16px;
    border-radius: 30px;

    flex-direction: row;
    align-items: center;

`;

export const TextInput = styled.TextInput`
    flex: 1;
    color: ${({ theme }) => theme.colors.text_color};
    font-weight: 600;
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(20)}px;

    margin-left: 10px;
    `;

