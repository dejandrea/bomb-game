import React from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Title, BombMessage, ScrollContainer } from "./styles";
import InputTimer from "../../components/PlayTogether/InputTimer";
import TipInput from "../../components/PlayTogether/TipInput";
import InputPassword from "../../components/PlayTogether/InputPassword";
import ButtonComponent from "../../components/Buttons";


export default function PlayTogether() {
  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  function handleStartGame() {
    Alert.alert("O jogo começou");
  }
  return (
    <ScrollContainer>
    <Container>
      <Title>Bomb Game Dupla</Title>
      <InputTimer />
      <BombMessage>Mensagem de erro temporária!</BombMessage>
      <TipInput />
      <InputPassword />

      <ButtonComponent buttonText="Iniciar" handlePress={handleStartGame} />
      <ButtonComponent
        buttonText="Página Inicial"
        handlePress={handleNavToStart}
      />
    </Container>
    </ScrollContainer>
  );
}
