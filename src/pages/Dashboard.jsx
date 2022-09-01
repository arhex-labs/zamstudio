import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import BreadCrumb from "react-bootstrap/Breadcrumb";
import Pagination from "react-bootstrap/Pagination";
import UpdateTypeModal from "../components/UpdateTypeModal";
import AddTypeModal from "../components/AddTypeModal";
import Navigation from "../components/Navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Dashboard() {
  const { currentPage, lastPage, types } = useSelector((state) => state.dashboard);
  let pg = []
  for (let pageNumber = 1; pageNumber <= parseInt(lastPage); pageNumber++) {
    pg.push(
      <Pagination.Item key={pageNumber} active={pageNumber === parseInt(currentPage)}>
        {pageNumber}
      </Pagination.Item>
    );
  }
  return (
    <>
      <Navigation />
      <Container>
        <Card className="my-3">
          <Card.Header>
            <Card.Title>Dashboard</Card.Title>
          </Card.Header>
          <Card.Body>
            <BreadCrumb>
              <BreadCrumb.Item>Home</BreadCrumb.Item>
              <BreadCrumb.Item active>Dashboard</BreadCrumb.Item>
            </BreadCrumb>
          </Card.Body>
        </Card>
        <AddTypeModal />
        <Table responsive className="mb-3">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {types.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.image}</td>
                <td>
                  <UpdateTypeModal />
                </td>
                <td>
                  <Button>
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Container className="d-flex flex-row-reverse my-3">
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            {pg}
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Container>
      </Container>
    </>
  );
}
