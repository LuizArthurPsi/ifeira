import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

interface OptionProps {
    active: boolean;
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};

    width: 100%;
    height: 100%;

    border-radius: 20px;
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.background_light};

    width: 100%;
    height:  ${RFValue(317)}px;
    justify-content: flex-end;

    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const Options = styled.View`
flex-direction: row;
justify-content: space-around;

`;

export const Option = styled(TouchableOpacity)<OptionProps>`
    width: ${RFValue(100)}px;
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
