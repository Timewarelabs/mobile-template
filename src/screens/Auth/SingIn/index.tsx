import React, { ReactNode } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from 'styled-components'

import Text from '../../../components/Text';
import { Container } from './styles';

interface SingInProps {
  children: ReactNode;
}

function SingIn() {
  const theme = useTheme().colors.themeColors

  return (
    <Container>
      <SafeAreaView>
      <Text size={30} weight={700} align="center" color={theme.text.dark}>Olá Novamente!</Text>
      
      <Text size={20} align="center" color={theme.text.dark}>Bem vindo de volta,</Text>
      <Text size={20} align="center" color={theme.text.dark}>você fez falta!</Text>
      </SafeAreaView>
    </Container>
  );
};

export default SingIn;
