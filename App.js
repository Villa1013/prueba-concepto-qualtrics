// import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Qualtrics from 'react-native-qualtrics';

export default function App() {

  function initMe() {
    console.log("Initializing...");
    Qualtrics.initializeProjectWithExtRefId(
      'chiper', 'ZN_3RiJ4aRvLXcYmW2', 'SI_4ZpHlbrcPJD1BoW',
      initializationResults => {
      console.log(initializationResults);
      console.log('Initialization Done');
      },
    );
  }

  useEffect(() => {
    // 'BRAND ID', 'PROJECT ID', 'INTERCEPT ID'
    Qualtrics.initialize('chiper', 'ZN_3RiJ4aRvLXcYmW2', 'SI_4ZpHlbrcPJD1BoW', (initializationResult) => {
      console.log(initializationResult)
      if (targetingResult.passed) {
        Qualtrics.displayTarget();
      }
      console.log('Initialization Done');
    });
  });

  return (
    <View style={styles.container}>
      <Text>[Prueba Qualtrics]!</Text>
      <Button title="Initialize Me" onPress={() => initMe()} />
      <StatusBar style="auto" />
    </View>
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
