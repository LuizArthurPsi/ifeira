import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform, TouchableOpacity } from 'react-native';

interface OptionProps {
    active: boolean;
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};

    flex: 1;

    align-items: center;

    border-radius: 20px;
    padding: 0 0 ${Platform.OS === 'android' ? 50 : 40}px;
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.background_light};

    width: 100%;
    height: 300px;

    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    justify-content: flex-end;
`;

export const Options = styled.View`
flex-direction: row;
justify-content: space-around;

`;

export const Option = styled(TouchableOpacity)<OptionProps>`
    width: ${RFValue(90)}px;
${({ active }) => active && css`
    border-bottom-width: 3px;
    border-bottom-color: ${({ theme }) => theme.colors.primary_color_item};
`}
`;

export const OptionTitle = styled.Text<OptionProps>`
color: ${({ theme }) => theme.colors.text_color};

font-weight: 600;
font-size: ${RFValue(18)}px;

text-align: center;
line-height: 21px;
margin-bottom: 16px;
`;

export const Content = styled.View`
width: 100%;
height: 100%;
background-color: ${({ theme }) => theme.colors.background};
padding: 50px 50px 0;
`;

export const Wrapper = styled.View`
margin-bottom: ${RFValue(60)}px;
`;

export const InputTitle = styled.Text`
color: ${({ theme }) => theme.colors.text_color};
opacity: 0.4;

font-weight: 600;
font-size: ${RFValue(15)}px;

text-align: left;
line-height: 18px;
`;

export const ForgotPassword = styled(TouchableOpacity)`
margin-bottom: 45px;
`;

export const ForgotPasswordText = styled.Text`
color: ${({ theme }) => theme.colors.primary_color_item};

font-weight: 600;
font-size: ${RFValue(17)}px;

text-align: left;
line-height: 20px;
`;




