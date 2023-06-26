import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import { api } from './src/services';

import Header from './src/components/header';
import Card from './src/components/card';

const senacCoin = [
  {
    id: 1,
    data: '05-02-2023',
    titulo: 'Titulo',
    valor: 20
  }
]

export default function App() {
  const [movimentacoes, setMovimentacoes] = useState([]);
  useEffect(() => {
    async function getSenacCoin() {
        const response = await api.get('/api/SenacCoinMovimentacao');
  
        setMovimentacoes(response.data);
        // console.log(response.data);
    }
  
    getSenacCoin();
  }, []);
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <FlatList
        numColumns={1}
        data={movimentacoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
