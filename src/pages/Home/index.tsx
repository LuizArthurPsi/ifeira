import React from 'react';

import IconTabMenu from '../../assets/Vector.svg';
import IconCart from '../../assets/shopping-cart.svg';

import InputSearch from '../../components/InputSearch';

import {
    Container,
    Header,
    HeaderTop,
    IconButton,
    HeaderBottom,
    Title,
} from './styles';

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
                    <InputSearch name="search" placeholder="Search" />
                </HeaderBottom>
            </Header>
        </Container>
    );
}
