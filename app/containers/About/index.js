/**
 *
 * About
 *
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Modal, Button } from 'antd';

export function About() {
  const CenterDiv = styled.div`
    text-align: center;
  `;
  const [visible, setVisible] = useState(false);

  const showModal = e => {
    const urlReplace = '#' + 'modalOpen';
    history.pushState(null, null, urlReplace);
    window.addEventListener('popstate', function(event) {
      setVisible(false);
    });
    setVisible(true);
  };

  const handleOk = e => {
    window.history.back();
    setVisible(false);
  };

  const handleCancel = e => {
    window.history.back();
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

export default React.memo(About);
