import React from 'react';
import { Image , Text} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {Botao,Container, Lista, Imagem, Nome, Preco} from './styles';

export default function FlatListBody({data}) {
 return (
     
    
     <Botao>
   <Container>
            <Imagem source={data.img} resizeMode='contain'/>
       <Lista>
            <Nome> {data.name} </Nome>
            <Preco> {data.price} </Preco>
       </Lista>
            
   </Container>
   </Botao>
   
  
  );
}