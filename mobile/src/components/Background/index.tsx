import React from 'react';
import {ImageBackground} from 'react-native';
import {Background as bg} from '../../assets/img';

const Background: React.FC = () => {
  return (
    <ImageBackground
      source={bg}
      resizeMode={'cover'}
      style={{position: 'absolute', width: '100%', height: '100%'}}
    />
  );
};

export default Background;
