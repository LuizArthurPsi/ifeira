import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ItemContainer = styled.View`
margin-top: 60px;
margin-left: 20px;
width: 200px;
height: 235px;
`;

export const ItemContent = styled(TouchableOpacity)`
background-color: ${({ theme }) => theme.colors.background_light};
align-items: center;
border-radius: 30px;
margin: 0 5px;
height: 100%;
justify-content: center;
`;

export const PhotoContainer = styled.View`
width: 140px;
height: 140px;
border-radius: 90px;
align-items: center;
position: relative;
top: 8px;
`;

export const ItemDescription = styled.View`
width: 50%;
margin: 30px 20px;
margin-bottom: 80px;
`;

export const ItemTitle = styled.Text`
font-weight: 600;
font-size: ${RFValue(17)}px;
line-height: 17px;
margin: 10px 0;
font-weight: bold;
text-align: center;

`;

export const ItemValue = styled.Text`
color: ${({ theme }) => theme.colors.primary_color_item};
font-weight: bold;
font-size: ${RFValue(14)}px;
text-align: center;
margin-top: 8px;
margin-bottom: 3px;
`;
