/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import messages from './messages';

export default function HomePage(props) {
  const handleClick = () => {
    props.history.push('/about');
  };
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: red;
  `;
  const CenterDiv = styled.div`
    text-align: center;
  `;
  return (
    <>
      <Title>
        <FormattedMessage {...messages.header} />
      </Title>
      <CenterDiv>
        <Button type="primary" onClick={handleClick}>
          Go To About
        </Button>
      </CenterDiv>
    </>
  );
}
