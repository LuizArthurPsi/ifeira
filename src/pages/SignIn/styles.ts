import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

interface OptionProps {
    active: boolean;
}

export const Container = styled.View`
    width: ${RFValue(100)}%;
    background-color: ${({ theme }) => theme.colors.background};

`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.background_light};

    width: ${RFValue(87)}%;
    height: ${RFValue(290)}px;

    border-bottom-left-radius: ${RFValue(30)}px;
    border-bottom-right-radius: ${RFValue(30)}px;
    align-items: center;
    justify-content: flex-end;

`;
//distancia login e signup
export const HeaderTop = styled.View`
    width: ${RFValue(89)}%;
`;

export const Options = styled.View`
flex-direction: row;
justify-content: space-around;

`;

export const Option = styled(TouchableOpacity)<OptionProps>`
    width: ${RFValue(105)}px;
${({ active }) => active && css`
    border-bottom-width: ${RFValue(3)}px;
    border-bottom-color: ${({ theme }) => theme.colors.primary_color_item};
`}
`;

export const OptionTitle = styled.Text<OptionProps>`
color: ${({ theme }) => theme.colors.text_color};

font-weight: bold;
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.text};

text-align: center;
line-height: ${RFValue(15)}px;
letter-spacing: .4px;

margin-bottom: ${RFValue(10)}px;
`;

export const Content = styled.View`
width: ${RFValue(82)}%;
height: ${RFValue(55)}%;
background-color: ${({ theme }) => theme.colors.background};
padding: 0 ${RFValue(50)}px;
justify-content: space-evenly;

`;

export const Section = styled.View`
height: ${RFValue(50)}%;
`;

export const InputTitle = styled.Text`
color: ${({ theme }) => theme.colors.text_color};
opacity: 0.4;

letter-spacing: .4px;
font-weight: bold;
font-size: ${RFValue(12)}px;
font-family: ${({ theme }) => theme.fonts.text};

text-align: left;
line-height: ${RFValue(12)}px;
margin-top: ${RFValue(9)}px;
`;

export const ForgotPassword = styled(TouchableOpacity)`
`;

export const ForgotPasswordText = styled.Text`
color: ${({ theme }) => theme.colors.primary_color_item};

letter-spacing: .4px;
font-weight: bold;
font-size: ${RFValue(13)}px;
font-family: ${({ theme }) => theme.fonts.text};

text-align: left;
line-height: ${RFValue(14)}px;
`;




