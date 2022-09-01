import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function AddTypeModal() {
  const [showAddTypeModal, setShowAddTypeModal] = useState(false);
  return (
    <>
      <Container className="d-flex flex-row-reverse mb-3">
        <Button onClick={() => setShowAddTypeModal(true)}>Add Type</Button>
      </Container>
      <Modal show={showAddTypeModal} fullscreen>
        <Modal.Header closeButton onHide={() => setShowAddTypeModal(false)}>
          <Modal.Title>Add Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Name" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" placeholder="Enter Description" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" name="image" />
          </Form.Group>
          <Button type="submit">Add</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
