import React from 'react';
import { Alert, Image } from 'react-native';

import food_1 from '../../assets/food_1.png';

import {
    ItemContainer,
    ItemContent,
    PhotoContainer,
    ItemDescription,
    ItemTitle,
    ItemValue,
} from './styles';

export default function Food() {
    function handleFoodDetails() {
        Alert.alert('Food Details');
    }

    return (
        <ItemContainer>
            <ItemContent onPress={handleFoodDetails}>
                <PhotoContainer>
                    <Image
                        source={food_1}
                        style={{
                            width: 140,
                            height: 140,
                            borderRadius: 90,
                        }}
                    />
                </PhotoContainer>
                <ItemDescription>
                    <ItemTitle>Veggie tomato mix</ItemTitle>
                    <ItemValue>N1,900</ItemValue>
                </ItemDescription>
            </ItemContent>
        </ItemContainer>
    );
}
