import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import { db } from '../firebase';
import ListCard from './ListCard';

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
            <ListCard item={item} navigation={navigation} />
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
