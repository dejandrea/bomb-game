import React, { useRef } from "react";
import { ImageBackground, Keyboard } from "react-native";
import { Timer, InputContainer, Input, TextTimer } from "./styles";

import bombImg from "../../../assets/bomba.png";

export default function InputTimer({
  hours,
  minutes,
  seconds,
  setHours,
  setMinutes,
  setSeconds,
}) {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();

  return (
    <ImageBackground
      source={bombImg}
      resizeMode="cover"
      style={{
        marginTop: 50,
        minHeight: 130,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Timer>
        {/* horas */}
        <InputContainer>
          <Input
            keyboardType={"number-pad"}
            maxLength={2}
            placeholder="00"
            placeholderTextColor="#bbb"
            ref={input1}
            value={hours}
            onChangeText={(value) => {
              value.length > 1 && input2.current.focus();
              setHours(value);
            }}
          />
        </InputContainer>
        <TextTimer>:</TextTimer>
        {/* minutos */}
        <InputContainer>
          <Input
            keyboardType={"number-pad"}
            maxLength={2}
            placeholder="00"
            placeholderTextColor="#bbb"
            ref={input2}
            value={minutes}
            onChangeText={(value) => {
              value.length > 1 && input3.current.focus();
              setMinutes(value);
            }}
          />
        </InputContainer>
        <TextTimer>:</TextTimer>
        {/* segundos */}
        <InputContainer>
          <Input
            keyboardType={"number-pad"}
            maxLength={2}
            placeholder="00"
            placeholderTextColor="#bbb"
            ref={input3}
            value={seconds}
            onChangeText={(value) => {
              value.length > 1 && Keyboard.dismiss();
              setSeconds(value);
            }}
          />
        </InputContainer>
      </Timer>
    </ImageBackground>
  );
}
