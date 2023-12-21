import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */
import {t} from '@oracle-cx-commerce/utils/generic';

import css from './styles.css';

const customfootercontainer = props => {
  return (
    <Styled id="customfootercontainer" css={css}>
      <div>Hello Harini D.......</div> 
      <div className="customfootercontainer"> Base Component customfootercontainer: {t('Hello')}</div>
    </Styled>
  );
};

export default customfootercontainer;
