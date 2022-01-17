import React, { useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import IconTabMenu from '../../assets/Vector.svg';
import IconCart from '../../assets/shopping-cart.svg';
import food_1 from '../../assets/food_1.png';

import InputSearch from '../../components/InputSearch';

import {
    Container,
    Header,
    HeaderTop,
    IconButton,
    HeaderBottom,
    Title,
    Option,
    OptionTitle,
    Options,
    ItemList,
    ItemContainer,
    ItemContent,
    PhotoContainer,
    ItemDescription,
    ItemTitle,
    ItemValue,
} from './styles';
import Food from '../../components/Food';

export default function Home() {
    const [option, setOption] = useState<
        'Foods' | 'Drinks' | 'Snacks' | 'Sauce'
    >('Foods');

    function handleTabMenu() {}

    function handleCart() {}

    function handleOptionChange(
        optionSelected: 'Foods' | 'Drinks' | 'Snacks' | 'Sauce',
    ) {
        setOption(optionSelected);
    }

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
            <SafeAreaView>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <Options>
                        <Option
                            active={option === 'Foods'}
                            onPress={() => handleOptionChange('Foods')}
                        >
                            <OptionTitle active={option === 'Foods'}>
                                Foods
                            </OptionTitle>
                        </Option>
                        <Option
                            active={option === 'Drinks'}
                            onPress={() => handleOptionChange('Drinks')}
                        >
                            <OptionTitle active={option === 'Drinks'}>
                                Drinks
                            </OptionTitle>
                        </Option>
                        <Option
                            active={option === 'Snacks'}
                            onPress={() => handleOptionChange('Snacks')}
                        >
                            <OptionTitle active={option === 'Snacks'}>
                                Snacks
                            </OptionTitle>
                        </Option>
                        <Option
                            active={option === 'Sauce'}
                            onPress={() => handleOptionChange('Sauce')}
                        >
                            <OptionTitle active={option === 'Sauce'}>
                                Sauce
                            </OptionTitle>
                        </Option>
                    </Options>
                </ScrollView>
            </SafeAreaView>
            <ItemList
                data={[1, 2, 3]}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => <Food data={item} />}
            />
        </Container>
    );
}
