# mogiyoon-react-native-simple-grid
https://www.npmjs.com/package/mogiyoon-react-native-simple-grid
!!!Making react-native simple grid!!!
## Installation

```sh
npm install mogiyoon-react-native-simple-grid
```

## Usage


```js
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

## Example
```js
import React from 'react';
import styled from 'styled-components/native';
import { GridComponent } from 'mogiyoon-react-native-simple-grid';

const Container = styled.View`
  flex: 1;
`;
const StyledContainer = styled.View`
  height: 120px;
  background-color: #ffbebe;
  margin: 5px;
  justify-content: center;
  align-items: center;
`
const StyledText = styled.Text`
  font-size: 30px;
`;

const testList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const TestSetting = () => {

  return (
    <Container>
      <GridComponent
        columnNumber={4}
        maxHeight={300}
        data={testList}
        renderItem={({item}) => (
          <StyledContainer>
            <StyledText>
              {item}
            </StyledText>
          </StyledContainer>
        )}
      />
    </Container>
  );
};
```
<img src="https://github.com/user-attachments/assets/f77e2e51-6ce2-4133-ae40-2b5e88a1159f" width="300" height="600"/>

```js
import React from 'react';
import styled from 'styled-components/native';
import { GridComponent } from 'mogiyoon-react-native-simple-grid';

const Container = styled.View`
  flex: 1;
`;
const StyledContainer = styled.View`
  height: 120px;
  background-color: #8e8e8e;
  border-radius: 5px;
  margin: 5px;
  justify-content: center;
  align-items: center;
`
const StyledText = styled.Text`
  font-size: 30px;
`;

const testList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const TestSetting = () => {

  return (
    <Container>
      <GridComponent
        columnNumber={3}
        maxHeight={600}
        isFull={true}
        data={testList}
        renderItem={({item}) => (
          <StyledContainer>
            <StyledText>
              {item}
            </StyledText>
          </StyledContainer>
        )}
      />
    </Container>
  );
};
```
<img src="https://github.com/user-attachments/assets/ab6bbd72-bb16-4769-9ce6-f88a173a8a13" width="300" height="600"/>


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
