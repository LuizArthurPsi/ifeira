import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary_color_item};
`;

export const Header = styled.View`
background-color: ${({ theme }) => theme.colors.background};
width: 100%;
height: ${RFValue(292)}px;
padding-left: 54px;
padding-right: 42px;

align-items: flex-start;
`;

export const HeaderTop = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;

margin-top: ${getStatusBarHeight() + 34}px;

`;

export const IconButton = styled(TouchableOpacity)`

`;

export const HeaderBottom = styled.View`
width: 100%;

`;

export const Title = styled.Text`
font-style: normal;
font-weight: bold;
font-size: ${RFValue(34)}px;
line-height: 41px;

margin: 35px 0;
`;
