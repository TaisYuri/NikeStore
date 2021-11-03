import React from 'react';

import { Shadow } from 'react-native-shadow-2';
import { Botao, Container, Card, Tipo, Imagem, Nome, Preco } from './styles';

export default function FlatListHeader({ data }) {
    return (
        <Botao>
            <Tipo> {data.type}</Tipo>

            <Shadow offset={[0, 1]} radius={5}  >
                <Container bgColor={data.bgColor}>
                    <Card>
                        <Nome>{data.name}</Nome>
                        <Preco>{data.price}</Preco>
                    </Card>
                </Container>
            </Shadow>
            <Imagem source={data.img} resizeMode='cover' />

        </Botao>
    );
}