import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const pessoa = { nome: 'Joao', idade: 5, cidade: 'rio de janeiro', avatar: require('C:\Users\aluno\Dowloads\R.jpg')};
function SaudacaoPernosalizada({ saudacao = "Olá" , nome = "Usuário", style}) {
    return (
        <View style={[styles.saudacaoContainer,style]}>
        <Text>{saudacao},{nome}!</Text>
       </View>
    );
}
const Saudacao = ({nome}) => {
    return(
        <View  style = {styles.container} >
            <Text> Olá, {nome}!</Text>
        </View>
    );
};
const ExibirPessoa = ({ nome, idade, cidade,}) => {
    return (
        <View style = {styles.container}>
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
            <Text>Cidade: {cidade}</Text>
        </View>
    );
};
export default function App(){
    return (
        <View style = {styles.appContainer} >
        <SaudacaoPernosalizada saudacao="Bom dia" nome={pessoa.nome}style={styles.SaudacaoPernosalizada}/>
        <Saudacao nome = {pessoa.nome}/>
        <ExibirPessoa {...pessoa}/>
        </View>
    );
};
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    saudacaoContainer: {
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
    },
    SaudacaoPernosalizada: {
        backgroundColor: 'lightblue',
        padding: 10,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
function getHora(){
  const horaAtual = new Date().getHours();

  if (horaAtual>= 5 && horaAtual<12){
    return 'Bom Dia';
  } else if(horaAtual >= 12 && horaAtual < 18){
    return 'Boa Tarde';
  }else{
    return 'Boa Noite';
  }
}

