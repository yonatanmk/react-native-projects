import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { onPress, children } = props;
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle : {
    alignSelf: 'center',
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 13,
    // paddingBottom: 10,
  },
  buttonStyle: {
    height: 50,
    // alignSelf: 'stretch',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginLeft: 60,
    marginRight: 60,
  }
};

export default Button;
