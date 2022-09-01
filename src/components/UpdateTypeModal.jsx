import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function UpdateTypeModal() {
  const [showUpdateTypeModal, setShowUpdateTypeModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowUpdateTypeModal(true)}>
        <i className="fa fa-edit" />
      </Button>
      <Modal show={showUpdateTypeModal} fullscreen>
        <Modal.Header closeButton onHide={() => setShowUpdateTypeModal(false)}>
          <Modal.Title>Update Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter Description"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="image" />
            </Form.Group>
            <Button type="submit">Update</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
