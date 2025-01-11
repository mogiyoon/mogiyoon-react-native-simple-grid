# mogiyoon-react-native-simple-grid

Making react-native simple grid

## Installation

```sh
npm install mogiyoon-react-native-simple-grid
```

## Usage


```js
import { GridComponent } from 'mogiyoon-react-native-simple-grid';

// ...

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
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
