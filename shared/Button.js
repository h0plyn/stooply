import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';

export default function StoopButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ItemContainer>
        <Text>{text}</Text>
        {text === 'Camera Roll' && <Ionicons name="md-image" size={43} />}
      </ItemContainer>
    </TouchableOpacity>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ItemContainer = styled.View`
  border-width: 2px;
  border-radius: 2px;
  background-color: white;
  border-top-width: 1px;
  border-left-width: 1px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 1px 1px 5px lightgrey;
  justify-content: center;
  align-items: center;
`;
