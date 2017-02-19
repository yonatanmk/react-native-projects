import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderColor: '#DDD',
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export default CardSection;
