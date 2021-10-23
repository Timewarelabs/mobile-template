import React from 'react'
import { StyleProp, TextStyle, TextBase } from 'react-native'

import { Text } from './styles'

interface Props {
  align?: string;
  size?: number;
  color?: string;
  weight?: string | number;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
}

const TextComponent: React.FC<Props> = ({ children, ...props }) => {
  return <Text {...props }>{ children }</Text>
}

TextComponent.defaultProps = {
  size: 16,
  weight: 'normal',
  align: 'left'
}

export default TextComponent
