import React from 'react'
import { Container,TipTitle,InputContainer, Input } from './styles';



export default function TipInput() {
    return (
        <Container>
          <TipTitle>Dica de senha:</TipTitle>
            <InputContainer>
              <Input
                placeholder="Dica para a sua dupla"
              />
            </InputContainer>
        </Container>
      );
}