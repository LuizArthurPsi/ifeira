import React from 'react';

import IconTabMenu from '../../assets/Vector.svg';
import IconCart from '../../assets/shopping-cart.svg';

import {
    Container,
    Header,
    HeaderTop,
    IconButton,
    HeaderBottom,
    Title,
} from './styles';
import Input from '../../components/Input';

export default function Home() {
    function handleTabMenu() {}

    function handleCart() {}

    return (
        <Container>
            <Header>
                <HeaderTop>
                    <IconButton onPress={handleTabMenu}>
                        <IconTabMenu width={22} height={15} fill="#000000" />
                    </IconButton>
                    <IconButton onPress={handleCart}>
                        <IconCart width={24} height={24} />
                    </IconButton>
                </HeaderTop>
                <HeaderBottom>
                    <Title>Delicious{'\n'}food for you</Title>
                    <Input />
                </HeaderBottom>
            </Header>
        </Container>
    );
}
