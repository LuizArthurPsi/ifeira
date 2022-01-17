import { FlatList, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled, { css } from 'styled-components/native';

interface OptionProps {
    active: boolean;
}

export const Container = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
background-color: ${({ theme }) => theme.colors.background};
width: ${RFValue(100)}%;
height: ${RFValue(270)}px;
padding-left: ${RFValue(50)}px;
padding-right: ${RFValue(90)}px;

align-items: flex-start;
`;

export const HeaderTop = styled.View`
width: ${RFValue(100)}%;
flex-direction: row;
justify-content: space-between;

margin-top: ${getStatusBarHeight() + 34}px;
margin-bottom: ${RFValue(5)}px;
`;

export const IconButton = styled(TouchableOpacity)`

`;

export const HeaderBottom = styled.View`
    width: ${RFValue(100)}%;
`;

export const Title = styled.Text`
font-style: normal;
font-weight: bold;
font-size: ${RFValue(27)}px;
font-family: ${({ theme }) => theme.fonts.rounded};

line-height: ${RFValue(35)}px;

margin-top: ${RFValue(20)}px;
margin-bottom: ${RFValue(25)}px;
`;

export const Options = styled.View`
    height: ${RFValue(100)}%;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: ${RFValue(65)}px;

`;

export const Option = styled(TouchableOpacity)<OptionProps>`
    width: ${RFValue(80)}px;

`;

export const OptionTitle = styled.Text<OptionProps>`
    color: ${({ theme }) => theme.colors.text_color_secondary};

    ${({ active }) => active && css`
    color:  ${({ theme }) => theme.colors.primary_color_item};
    border-bottom-width: ${RFValue(3)}px;
    border-bottom-color: ${({ theme }) => theme.colors.primary_color_item};
    `}

    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.text};
    text-align: center;
    letter-spacing: ${RFValue(.6)}px;

    padding-bottom:${RFValue(1)}px;
`;

export const ItemList = styled(FlatList).attrs({
    contentContainerStyle: {
        marginLeft: 34,
        marginTop: 10,
    },
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})``;


