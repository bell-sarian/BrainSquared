import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Hello from './src/components/Hello'

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://192.168.0.199:4000/',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text style={styles.title}>My Countries App</Text>
        <Hello />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('MyApplication', () => App);