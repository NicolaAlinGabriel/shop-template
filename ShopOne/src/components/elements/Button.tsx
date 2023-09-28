import React, { FC } from 'react';
import { DefaultButton, DefaultText } from '@components/styles';
import { DefaultButtonInterface } from '@customTypes/components';

const Button: FC<DefaultButtonInterface> = ({ label, onPress, extraProps }) => {
  return (
    <DefaultButton onPress={onPress ?? (() => console.log("PLACEHOLDER FN"))} style={extraProps}>
      <DefaultText color={extraProps?.color ?? "white"} weight={600}>
        {label}
      </DefaultText>
    </DefaultButton>
  );
};

export default Button;
