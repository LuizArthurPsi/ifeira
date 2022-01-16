import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';
import theme from '../../global/styles/theme';

interface Props extends TouchableOpacityProps {
    title: string;
    color?: string;
    disabled?: boolean;
    loading?: boolean;
}

export default function Button({
    title,
    color,
    disabled = false,
    loading = false,
    ...rest
}: Props) {
    return (
        <Container
            {...rest}
            color={color}
            disabled={disabled}
            style={{ opacity: disabled === true || loading === true ? 0.6 : 1 }}
        >
            {loading ? (
                <ActivityIndicator color={theme.colors.background} />
            ) : (
                <Title>{title}</Title>
            )}
        </Container>
    );
}
