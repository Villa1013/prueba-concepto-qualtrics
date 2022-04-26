import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Qualtrics from 'react-native-qualtrics';

export default function App() {

  function initMe() {
   Qualtrics.evaluateProject(targetingResults => {
    console.log(targetingResults, ' targetingResults');
    for (var intercept in targetingResults) {
      let result = targetingResults[intercept];
      if (result.passed) {
        Qualtrics.display();
      }
    }
    console.log('Evaluation Done');
  });
  }

  React.useEffect(() => {
    // 'BRAND ID', 'PROJECT ID', 'INTERCEPT ID'
    Qualtrics.initializeProjectWithExtRefId('chiper', 'ZN_3RiJ4aRvLXcYmW2', '', (initializationResults) => {
      console.log(initializationResults, ' test initializationResults')
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
