import { useState, useEffect } from 'react'
import { View, TextInput, Text } from 'react-native'
import axios from 'axios'

import { Container, FieldContainer, FieldText, FieldTextInput } from './styles'

export const AddAddress = () => {
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  
  useEffect(() => {
    const loadCep = async () => {
      try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        setStreet(data.logradouro)
        setState(data.uf)
        setCity(data.localidade)
        setNeighborhood(data.bairro)
      } catch (error){
        console.log(error)
      }
    }

    if(cep.length === 8) {
      loadCep()
    }
  }, [cep])

  return (
    <Container>
      <FieldContainer>
        <FieldText>Cep</FieldText>
        <FieldTextInput
          placeholder="Cep..."
          placeholderTextColor="gray"
          value={cep} 
          onChangeText={setCep}
        />
      </FieldContainer>
      <FieldContainer>
        <FieldText>Rua</FieldText>
        <FieldTextInput
          placeholder="Rua..."
          placeholderTextColor="gray"
          value={street} 
          onChangeText={setStreet}
        />
      </FieldContainer>
      <FieldContainer>
        <FieldText>Numero</FieldText>
        <FieldTextInput
          placeholder="Numero..."
          placeholderTextColor="gray"
          value={number} 
          onChangeText={setNumber}
        />
      </FieldContainer>
      <FieldContainer>
        <FieldText>Complemento</FieldText>
        <FieldTextInput
          placeholder="Complemento..."
          placeholderTextColor="gray"
          value={complement} 
          onChangeText={setComplement}
        />
      </FieldContainer>
      <FieldContainer>
        <FieldText>Estado</FieldText>
        <FieldTextInput
          placeholder="Estado..."
          placeholderTextColor="gray"
          value={state} 
          onChangeText={setState}
        />
      </FieldContainer>
      <FieldContainer>
        <FieldText>Cidade</FieldText>
        <FieldTextInput
          placeholder="Cidade..."
          placeholderTextColor="gray"
          value={city} 
          onChangeText={setCity}
        />
      </FieldContainer>
      <FieldContainer>
        <FieldText>Bairro</FieldText>
        <FieldTextInput
          placeholder="Bairro..."
          placeholderTextColor="gray"
          value={neighborhood} 
          onChangeText={setNeighborhood}
        />
      </FieldContainer>
    </Container>
  )
}


