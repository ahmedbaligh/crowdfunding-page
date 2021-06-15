import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';

import { Pledge } from './';
import '../stylesheets/PledgeModal.scss';

const BackProject = ({
  firstOpen,
  setFirstOpen,
  secondOpen,
  setSecondOpen,
  onPledge,
  stands,
  trigger
}) => {
  const [selected, setSelected] = useState(null);
  const [pledgeAmount, setPledgeAmount] = useState();

  useEffect(() => {
    isFinite(trigger) && setSelected(trigger);
  }, [trigger]);

  const handlePledge = () => {
    onPledge(Number(pledgeAmount), selected);
    setFirstOpen(false);
    setSecondOpen(true);
  };

  const onFirstClose = () => {
    setSelected(null);
    setFirstOpen(false);
  };

  return (
    <>
      <Modal
        size="small"
        closeIcon
        onClose={onFirstClose}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
      >
        <Modal.Header as="header" className="modal-wrapper">
          <h2 className="title">Back this project</h2>
          <p className="description">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </Modal.Header>

        <Modal.Content className="modal-wrapper">
          <Form onSubmit={handlePledge}>
            <Pledge
              selected={selected}
              onSelect={setSelected}
              onPledge={setPledgeAmount}
            />

            {stands.map((stand, index) => (
              <Pledge
                key={stand.name}
                stand={stand}
                value={index}
                selected={selected}
                onSelect={setSelected}
                onPledge={setPledgeAmount}
              />
            ))}
          </Form>
        </Modal.Content>
      </Modal>

      <Modal
        onClose={() => setSecondOpen(false)}
        open={secondOpen}
        size="small"
      >
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <p>That's everything!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            icon="check"
            content="All Done"
            onClick={() => setSecondOpen(false)}
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default BackProject;
