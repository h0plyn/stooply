import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components';

export default function ListCard({ navigation, item }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('GiftDetail', item)}
      key={item.id}
    >
      <ItemContainer>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            margin: 10,
          }}
        >
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: item.imageUrl,
            }}
          />
          <InfoContainer>
            <Title>{item.title}</Title>
            <Info>{item.added}</Info>
            <ThumbContainer>
              <MaterialIcons name="thumb-up" color="#00c87b" size={16} />
              <Count>{item.thumbsUp}</Count>
              <MaterialIcons
                style={{ marginLeft: 6 }}
                name="thumb-down"
                color="#fd5240"
                size={16}
              />
              <Count>{item.thumbsDown}</Count>
            </ThumbContainer>
          </InfoContainer>
        </View>
      </ItemContainer>
    </TouchableOpacity>
  );
}

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
  box-shadow: 1px 1px 5px lightgrey;
`;
const Title = styled.Text`
  color: black;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
`;

const InfoContainer = styled.View`
  margin-left: 10px;
  justify-content: center;
  margin-top: 12px;
`;

const Info = styled.Text`
  color: black;
  font-size: 16px;
`;

const Count = styled.Text`
  font-size: 14px;
  margin-left: 3px;
`;

const ThumbContainer = styled.View`
  margin-top: 8px;
  flex: 1;
  flex-direction: row;
`;
