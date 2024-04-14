import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function TelaDois() {

  const tasks = [
    { id: '1', title: 'Tarefa 1' },
    { id: '2', title: 'Tarefa 2' },
    { id: '3', title: 'Tarefa 3' },
    { id: '4', title: 'Tarefa 4' },
    { id: '5', title: 'Tarefa 5' },
    { id: '6', title: 'Tarefa 6' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="green" />
      <Image
        style={styles.logo}
        source={{
          uri: 'https://www.univates.br/media/institucional/em_imagens/2.jpg',
        }}
      />
      <FlatList
        style={styles.tasksContainer}
        data={tasks}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.taskText}>• {item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  logo: {
    width: '100%',
    height: 200,
  },
  tasksContainer: {
    padding: 20,
  },
  taskText: {
    fontSize: 30,
  }
});
