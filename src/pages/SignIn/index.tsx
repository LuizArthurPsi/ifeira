import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Alert,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

//O Logo da a aplicação não veio com o design no formato adequado
import IconLogo from '../../assets/logo.svg';
import IconAjust from '../../assets/logo2.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
    Container,
    Header,
    HeaderTop,
    Option,
    OptionTitle,
    Options,
    Content,
    InputTitle,
    ForgotPassword,
    ForgotPasswordText,
    Section,
} from './styles';

export default function SignIn() {
    const [option, setOption] = useState<'login' | 'signup'>('login');
    const navigation = useNavigation();

    function handleOptionChange(optionSelected: 'login' | 'signup') {
        setOption(optionSelected);
    }

    function handleSignIn() {
        if (option === 'login') {
            navigation.navigate('Home');
        } else {
            Alert.alert(
                'Sucess',
                'Your account has been successfully created.',
            );
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <IconLogo
                            width={131}
                            height={162}
                            style={{
                                position: 'absolute',
                                left: 136,
                                top: 70,
                            }}
                        />
                        <IconAjust
                            width={59}
                            height={115}
                            style={{
                                position: 'absolute',
                                left: 226,
                                top: 106,
                            }}
                        />
                        <HeaderTop>
                            <Options>
                                <Option
                                    active={option === 'login'}
                                    onPress={() => handleOptionChange('login')}
                                >
                                    <OptionTitle active={option === 'login'}>
                                        Login
                                    </OptionTitle>
                                </Option>
                                <Option
                                    active={option === 'signup'}
                                    onPress={() => handleOptionChange('signup')}
                                >
                                    <OptionTitle active={option === 'signup'}>
                                        Sign-up
                                    </OptionTitle>
                                </Option>
                            </Options>
                        </HeaderTop>
                    </Header>
                    <Content>
                        {option === 'login' ? (
                            <Section>
                                <InputTitle>Email address</InputTitle>
                                <Input
                                    name="email"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    maxLength={30}
                                />
                                <InputTitle>Password</InputTitle>
                                <Input
                                    name="senha"
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    secureTextEntry
                                    maxLength={30}
                                />
                                <ForgotPassword onPress={() => {}}>
                                    <ForgotPasswordText>
                                        Forgot passcode?
                                    </ForgotPasswordText>
                                </ForgotPassword>
                            </Section>
                        ) : (
                            <Section>
                                <InputTitle>Email address</InputTitle>
                                <Input
                                    name="email"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    maxLength={30}
                                />
                                <InputTitle>Password</InputTitle>
                                <Input
                                    name="senha"
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    secureTextEntry
                                    maxLength={30}
                                />
                                <ForgotPassword onPress={() => {}}>
                                    <ForgotPasswordText>
                                        Forgot passcode?
                                    </ForgotPasswordText>
                                </ForgotPassword>
                            </Section>
                        )}
                        <Button
                            title={option === 'login' ? 'Login' : 'Signup'}
                            onPress={handleSignIn}
                        />
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
