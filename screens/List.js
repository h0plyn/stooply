import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components';
import { db } from '../firebase';

export default function List({ navigation }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      const firestoreItems = [];
      const itemsRef = db.collection('items');
      const snapshot = await itemsRef.get();
      snapshot.forEach((doc) => {
        firestoreItems.push(doc.data());
      });
      setItems(firestoreItems);
    })();
  }, []);

  return (
    <Container>
      {items && items.length > 0 && (
        <FlatList
          data={items}
          renderItem={({ item }) => (
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
                  {/* Break out into ListCard */}
                  <InfoContainer>
                    <Title>{item.title}</Title>
                    <Info>{item.added}</Info>
                    <ThumbContainer>
                      <MaterialIcons
                        name="thumb-up"
                        color="#00c87b"
                        size={16}
                      />
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
                  {/* End ListCard */}
                </View>
              </ItemContainer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
        />
      )}
    </Container>
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
