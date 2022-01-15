import React, { useState } from 'react';

import IconLogo from '../../assets/logo.svg';
import IconAjust from '../../assets/logo2.svg';

import { Container, Header, Option, OptionTitle, Options } from './styles';

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
                    style={{ position: 'absolute', top: 103, left: 136 }}
                />
                <IconAjust
                    width={59}
                    height={115}
                    style={{
                        position: 'absolute',
                        top: 139,
                        left: 226,
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
        </Container>
    );
}
