import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, Title, BombMessage, ScrollContainer } from "./styles";

import InputTimer from "../../components/PlayTogether/InputTimer";
import TipInput from "../../components/PlayTogether/TipInput";
import InputPassword from "../../components/PlayTogether/InputPassword";
import ButtonComponent from "../../components/Buttons";

import BombService from "../../services/BombApp";
import api from "../../services/api/api";

export default function PlayTogether() {
  const navigation = useNavigation();

  const [started, setStarted] = useState(false);
  const [pin, setPin] = useState(["", "", ""]);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [message, setMessage] = useState("");
  // console.log({pin})
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [intervalId, setIntervalId] = useState();

  function handleStartGame() {
    BombService.bombActivationTogether({
      question,
      pin,
      hours,
      minutes,
      seconds,
      setMessage,
      setStarted,
      setPin,
      handleStartBomb,
      answer,
      setAnswer,
    });
  }

  function handleStartBomb() {
    const diffTime = BombService.getDiffTime({ hours, minutes, seconds });

    BombService.startCountdown({
      setSeconds,
      setMinutes,
      setHours,
      setStarted,
      diffTime,
      setIntervalId,
      intervalId,
      navigation,
    });
  }

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  function handleDisarmBomb() {
    BombService.bombDisarmTogether({
      pin,
      answer,
      setStarted,
      intervalId,
      setPin,
      setAnswer,
      navigation,
    });
  }

  function handleGiveUp() {
    BombService.giveUpGame({
      intervalId,
      navigation,
    });
  }

  return (
    <ScrollContainer>
      <Container>
        <Title>Bomb Game Dupla</Title>
        <InputTimer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />
        {message ? <BombMessage>{message ? message : null}</BombMessage> : null}
        <TipInput
          started={started}
          question={question}
          setQuestion={setQuestion}
        />
        <InputPassword pin={pin} setPin={setPin} />

        {!started ? (
          <>
            <ButtonComponent
              buttonText="Iniciar"
              handlePress={handleStartGame}
            />

            <ButtonComponent
              buttonText="Página Inicial"
              handlePress={handleNavToStart}
            />
          </>
        ) : (
          <>
            <ButtonComponent
              buttonText="Desarmar"
              handlePress={handleDisarmBomb}
            />

            <ButtonComponent buttonText="Disistir" handlePress={handleGiveUp} />
          </>
        )}
      </Container>
    </ScrollContainer>
  );
}
