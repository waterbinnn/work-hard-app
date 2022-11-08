import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable } from 'react-native';
import { theme } from './color';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
      <TouchableOpacity>
        <Text style={styles.btnText}>Work</Text>
      </TouchableOpacity>
      <TouchableHighlight underlayColor={'yellow'} activeOpacity={0.5} onPress={()=>console.log('press')}>
        <Text style={styles.btnText}>Travel</Text>
      </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal:20,
  },
  header: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:100,
  },
  btnText: {
    fontSize:30,
    fontWeight:'700',
    // color:theme.grey,
    color:'white',
  }
});
