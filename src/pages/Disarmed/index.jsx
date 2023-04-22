import React from "react";
import { Container, Logo, SucessImg, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

import ButtonComponent from "../../components/Buttons";

import logoImg from "../../assets/logoDark.png";
import sucessImg from "../../assets/bomba_cortada_matrix.png";

export default function Disarmed() {
    const navigation = useNavigation()

    function handleNavToStart() {
        navigation.navigate("Start");
    }
  return (
    <Container>
      <Logo source={logoImg} style={{ resizeMode: "contain" }} />
      <Title>Parabéns!!!{"\n"}Você desarmou</Title>
      <SucessImg source={sucessImg} style={{ resizeMode: "contain" }} />
      <ButtonComponent buttonText="Página Inicial" handlePress={handleNavToStart} />
    </Container>
  );
}