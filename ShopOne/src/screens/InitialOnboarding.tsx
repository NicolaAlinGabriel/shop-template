import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { ScreenContainer } from '@components/styles';
import { Button } from '@components/elements';
import { useNavigation } from '@react-navigation/native';

const InitialOnboarding: FC<any> = () => {
  const { navigate } = useNavigation<any>();

  return (
    <ScreenContainer>
      <Button label="Sign In" onPress={() => {
        navigate('SignIn')
      }} />
      <Button label="Sign Up" onPress={() => {
        navigate('SingUp')
      }} />
    </ScreenContainer>
  );
};

export default observer(InitialOnboarding);
