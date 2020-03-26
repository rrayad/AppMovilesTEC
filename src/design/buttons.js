import React from 'react';
import {Button as NBButton} from 'native-base';
import {StylesPropsHelper} from '../Helpers/StylesPropsHelper';

export const Buttons = ({children, onPress, style = {}, ...rest}) => (
  <NBButton {...RulesButton.applyRules(rest, style)}>{children}</NBButton>
);

const StylesButtton = {
  'btn--red': {backgroundColor: 'green'},
  'btn--main': {
    width: 300,
  },
};

const RulesButton = new StylesPropsHelper(
  {
    colorMain: 'btn--red',
    main: 'btn--red btn--main',
  },
  [StylesButtton],
);
