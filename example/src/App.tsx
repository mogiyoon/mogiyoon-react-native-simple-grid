import { Text, SafeAreaView, View } from 'react-native';
import { GridComponent } from 'mogiyoon-react-native-simple-grid';

const testList = [1, 2, 3, 4, 5]

export default function App() {
  return (
    <SafeAreaView>
      <GridComponent 
        columnNumber={2}
        data={testList}
        maxHeight={500}
        isFull={true}
        renderItem={({item}) => (
          <View>
            <Text>
              {item}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}