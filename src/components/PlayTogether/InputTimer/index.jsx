import React, { useRef } from "react";
import { ImageBackground} from "react-native";
import { Timer, InputContainer, Input,TextTimer } from "./styles";


import bombImg from "../../../assets/bomba.png";

export default function InputTimer() {
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
            onChangeText={(value) => {
              value.length > 1 && input2.current.focus();
              hoursInput(value);
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
            onChangeText={(value) => {
              value.length > 1 && input3.current.focus();
              minutesInput(value);
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
            onChangeText={(value) => {
              value.length > 1 && Keyboard.dismiss();
              secondsInput(value);
            }}
          />
        </InputContainer>
      </Timer>
    </ImageBackground>
  );
}
