import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: ${RFValue(100)}%;
    height: ${RFValue(33)}px;
    border-bottom-width: 0.5px;
    border-style: solid;
    border-bottom-color: ${({ theme }) => theme.colors.text_color};
    margin-bottom: ${RFValue(25)}px;

`;

export const TextInput = styled.TextInput`
    color: ${({ theme }) => theme.colors.text_color};

    letter-spacing: .6px;
    font-weight: bold;
    font-size: ${RFValue(13)}px;

    line-height: ${RFValue(13)}px;

`;
