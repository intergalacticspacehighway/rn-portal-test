import * as React from 'react';
import {createPortal} from 'react-native/Libraries/Renderer/shims/ReactNative';
import {findNodeHandle, View} from 'react-native';

let ref = React.createRef();
let nodeHandle = null;

function ModalPortal(props) {
  return createPortal(props.children, getModalRootHandle());
}

function ModalRoot(props) {
  React.useEffect(() => {
    nodeHandle = findNodeHandle(ref.current);
  }, []);

  return (
    <>
      {props.children}
      <View
        pointerEvents="box-none"
        style={{
          position: 'absolute',
          zIndex: 4,
          elevation: 4,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        ref={ref}
      />
    </>
  );
}

const getModalRootHandle = () => nodeHandle;

export {ModalRoot, ModalPortal, getModalRootHandle};
