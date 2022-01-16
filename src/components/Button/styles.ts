import styled from "styled-components/native";
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps extends TouchableOpacityProps {
    color: string;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
    width: 100%;
    height: 60px;
    border-radius: 26px;

    justify-content: center;
    align-items: center;

    background-color:${({ color, theme }) => color ? color : theme.colors.primary_color_item};
`;

export const Title = styled.Text`
    font-weight: 600;
    line-height: 20px;
    font-size: ${RFValue(17)}px;

    color:${({ theme }) => theme.colors.background};
`;
