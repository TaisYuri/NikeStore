import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {Container, Titulo} from './styles';

export default function Header() {
 return (
   <Container>
       <Icon name='menu' size={30}/>
       <Titulo> SHOE SELECTOR </Titulo>
       <Icon name='search' color='#BEC1D2'size={28}/>
   </Container>
  );
}
