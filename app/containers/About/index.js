/**
 *
 * About
 *
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Modal, Button } from 'antd';

export function About(props) {
  const CenterDiv = styled.div`
    text-align: center;
  `;
  let [visible, setVisible] = useState(false);
  useEffect(() => {
    history.pushState(null , null, location.href);
    setVisible(true);
    window.addEventListener('popstate', function(event) {
      setVisible(false);
    });
  }, [])

  const showModal = e => {
    history.pushState(null , null, location.href);
    window.addEventListener('popstate', function(event) {
      setVisible(false);
    });
    setVisible(true);
  };

  const handleOk = e => {
    window.history.go(-1)
    setVisible(false);
  };

  const handleCancel = e => {
    window.history.go(-1)
    setVisible(false);
  };
  return (
    <>
      <div>
        <Helmet>
          <title>About</title>
          <meta name="description" content="Description of About" />
        </Helmet>
      </div>
      <CenterDiv>
        <div>
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <Modal
            title="Basic Modal"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
      </CenterDiv>
    </>
  );
}

export default About;
