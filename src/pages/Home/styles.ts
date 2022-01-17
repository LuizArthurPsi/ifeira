import { FlatList, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled, { css } from 'styled-components/native';

interface OptionProps {
    active: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
background-color: ${({ theme }) => theme.colors.background};
width: 100%;
height: ${RFValue(270)}px;
padding-left: 54px;
padding-right: 42px;

align-items: flex-start;
`;

export const HeaderTop = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;

margin-top: ${getStatusBarHeight() + 34}px;
margin-bottom: 5px;
`;

export const IconButton = styled(TouchableOpacity)`

`;

export const HeaderBottom = styled.View`
    width: 100%;
`;

export const Title = styled.Text`
font-style: normal;
font-weight: bold;
font-size: ${RFValue(27)}px;
line-height: 35px;

margin: 25px 0;
`;

export const Options = styled.View`
    height: 100%;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 70px;

`;

export const Option = styled(TouchableOpacity)<OptionProps>`
    width: ${RFValue(80)}px;

`;

export const OptionTitle = styled.Text<OptionProps>`
    color: ${({ theme }) => theme.colors.text_color_secondary};

    ${({ active }) => active && css`
    color:  ${({ theme }) => theme.colors.primary_color_item};
    border-bottom-width: 3px;
    border-bottom-color: ${({ theme }) => theme.colors.primary_color_item};
    `}

    font-weight: 600;
    font-size: ${RFValue(15)}px;
    text-align: center;
    margin-bottom: 16px;
    letter-spacing: .6px;

    padding-bottom: 8px;
`;

export const ItemList = styled(FlatList).attrs({
    contentContainerStyle: {
        marginLeft: 34,
        marginTop: 10,
    },
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})``;


