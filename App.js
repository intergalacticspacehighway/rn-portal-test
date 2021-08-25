/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react';
import {ModalPortal, ModalRoot} from './src/Modal';
import {Button, SafeAreaView, Text} from 'react-native';

const Context = React.createContext({state: ''});

const App = () => {
  const [show, setShow] = React.useState(false);
  const [text, setText] = React.useState('');
  const [show2, setshow2] = React.useState(false);

  React.useEffect(() => {
    setInterval(() => {
      setText('testing update phase ' + Math.random());
    }, 1000);
  }, []);

  return (
    <ModalRoot>
      <SafeAreaView>
        <Context.Provider value={{state: 'testing context state'}}>
          <Button title="open" onPress={() => setShow(!show)} />
          <Button title="open one more" onPress={() => setshow2(!show2)} />
          {show ? (
            <ModalPortal>
              <SafeAreaView style={{borderWidth: 1}} pointerEvents="none">
                <MyComponent />
                <Text>{text}</Text>
              </SafeAreaView>
            </ModalPortal>
          ) : null}

          {show2 ? (
            <ModalPortal>
              <SafeAreaView style={{borderWidth: 1}} pointerEvents="none">
                <MyComponent />
                <Text>{text}</Text>
              </SafeAreaView>
            </ModalPortal>
          ) : null}
        </Context.Provider>
      </SafeAreaView>
    </ModalRoot>
  );
};

const MyComponent = () => {
  const {state} = useContext(Context);
  return <Text>Hello from modal {state}</Text>;
};

export default App;
