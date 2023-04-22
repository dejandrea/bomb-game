import React from "react";
import { Container, Logo, SucessImg, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

import ButtonComponent from "../../components/Buttons";

import logoImg from "../../assets//logoLightRed.png";
import sucessImg from "../../assets/bomba_explodiu.png";

export default function Exploded() {
    const navigation = useNavigation()

    function handleNavToStart() {
        navigation.navigate("Start");
    }
  return (
    <Container>
      <Logo source={logoImg} style={{ resizeMode: "contain" }} />
      <Title>A bomba Explodiu.{"\n"}Você falhou!</Title>
      <SucessImg source={sucessImg} style={{ resizeMode: "contain" }} />
      <ButtonComponent buttonText="Página Inicial" handlePress={handleNavToStart} />
    </Container>
  );
}