import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ItemContainer = styled.View`
margin-top: ${RFValue(85)}px;
margin-left: ${RFValue(18)}px;
width: ${RFValue(182)}px;
height: ${RFValue(210)}px;
`;

export const ItemContent = styled(TouchableOpacity)`
background-color: ${({ theme }) => theme.colors.background_light};
align-items: center;
border-radius: ${RFValue(25)}px;
margin: 0 ${RFValue(5)}px;
height: ${RFValue(91)}%;
justify-content: center;
`;

export const PhotoContainer = styled.View`
width: ${RFValue(140)}px;
height: ${RFValue(140)}px;
border-radius: ${RFValue(90)}px;
align-items: center;
position: relative;
top: ${RFValue(11)}px;;
`;

export const ItemDescription = styled.View`
width: ${RFValue(50)}%;
margin: ${RFValue(30)}px ${RFValue(20)}px;
margin-bottom: ${RFValue(80)}px;
`;

export const ItemTitle = styled.Text`
letter-spacing: .1px;
font-weight: bold;
font-size: ${RFValue(17)}px;
font-family: ${({ theme }) => theme.fonts.rounded};

line-height: 17px;
margin: ${RFValue(10)}px 0;
text-align: center;

`;

export const ItemValue = styled.Text`
color: ${({ theme }) => theme.colors.primary_color_item};

font-weight: bold;
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.rounded};

text-align: center;
margin-top: ${RFValue(3)}px;
`;
