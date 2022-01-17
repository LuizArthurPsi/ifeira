import styled from "styled-components/native";
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps extends TouchableOpacityProps {
    color: string;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
    width: ${RFValue(100)}%;
    height: ${RFValue(55)}px;
    border-radius: ${RFValue(23)}px;

    justify-content: center;
    align-items: center;

    background-color:${({ color, theme }) => color ? color : theme.colors.primary_color_item};
`;

export const Title = styled.Text`
    letter-spacing: .4px;
    ;
    line-height: ${RFValue(14)}px;
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.text};

    color:${({ theme }) => theme.colors.background};
`;
