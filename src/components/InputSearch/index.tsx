import React from 'react';
import { TextInputProps } from 'react-native';

import theme from '../../global/styles/theme';
import IconSearch from '../../assets/search_icon.svg';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
    name?: string;
}

export default function InputSearch({ name, ...rest }: InputProps) {
    return (
        <Container>
            <IconSearch width={18} height={18} style={{ marginLeft: 15 }} />
            <TextInput
                placeholderTextColor={theme.colors.placeholder}
                {...rest}
            />
        </Container>
    );
}
