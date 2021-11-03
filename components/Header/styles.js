import styled from 'styled-components';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
flex-direction: row;
justify-content: space-between;
width: 90%;
margin-left: 15px;
padding-top: ${5 + getStatusBarHeight()};
margin-bottom: 15px;
`;

export const Titulo = styled.Text`
color: #BEC1D2;
font-size: 30px;
`;