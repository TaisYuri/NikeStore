import styled from 'styled-components';

export const Botao = styled.TouchableOpacity`
width: 180px;
height: 240px;
margin-left: 15px;

`;

export const Container = styled.View`
flex:1;
padding: 2px;
border-radius: 10px;
justify-content: flex-end;
background-color: ${props => props.bgColor};
padding-right: 24px;
`;

export const Tipo= styled.Text`
margin-bottom: 15px;
color: #BEC1D2;
`;

export const Card = styled.View`
height: 35%;

justify-content: space-between;
padding: 10px;
margin-bottom: 20px;
`;

export const Nome= styled.Text`
color: rgba(255,255,255,0.9);
font-size: 19px;


`;
export const Preco= styled.Text`
font-size: 23px;
color:rgba(255,255,255,0.9);
font-weight: bold;
margin-top:10px;

`;
export const Imagem = styled.Image`
position: absolute;
top: 50px;
right: 0px;
width: 98%;
height: 80px;
transform:rotate(-15deg);


`;
