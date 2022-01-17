import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: ${RFValue(90)}%;
    height: ${RFValue(48)}px;
    background-color: ${({ theme }) => theme.colors.input_search};
    padding: 0 ${RFValue(16)}px;
    border-radius: ${RFValue(30)}px;

    flex-direction: row;
    align-items: center;

`;

export const TextInput = styled.TextInput`
    flex: 1;
    color: ${({ theme }) => theme.colors.text_color};
    font-weight: 600;
    font-size: ${RFValue(13)}px;
    line-height: ${RFValue(20)}px;

    margin-left: ${RFValue(10)}px;
    `;

