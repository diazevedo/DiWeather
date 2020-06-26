import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

const TouchableWithIcon = ({ icon, color, size, onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={icon} color={color} size={size} />
    </TouchableOpacity>
  );
};

TouchableWithIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default TouchableWithIcon;
