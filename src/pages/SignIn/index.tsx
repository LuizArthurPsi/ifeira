import React, { useState } from 'react';
import {
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
} from 'react-native';

import IconLogo from '../../assets/logo.svg';
import IconAjust from '../../assets/logo2.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

import {
    Container,
    Header,
    Option,
    OptionTitle,
    Options,
    Content,
    InputTitle,
    ForgotPassword,
    ForgotPasswordText,
    Wrapper,
} from './styles';

export default function SignIn() {
    const [option, setOption] = useState<'login' | 'signup'>('login');

    function handleOptionChange(optionSelected: 'login' | 'signup') {
        setOption(optionSelected);
    }

    return (
        <Container>
            <Header>
                <IconLogo
                    width={131}
                    height={162}
                    style={{
                        position: 'absolute',
                        left: 136,
                        top: 98,
                    }}
                />
                <IconAjust
                    width={59}
                    height={115}
                    style={{
                        position: 'absolute',
                        left: 226,
                        top: 134,
                    }}
                />
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
            </Header>
            <Content>
                <Wrapper>
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
                        maxLength={25}
                    />
                    <ForgotPassword onPress={() => {}}>
                        <ForgotPasswordText>
                            Forgot passcode?
                        </ForgotPasswordText>
                    </ForgotPassword>
                </Wrapper>
                <Button title="Login" />
            </Content>
        </Container>
    );
}
