import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import Quantity from "../../components/Quantity";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Orders extends Component {
  // Setting our component's initial state
  state = {
    products: [],
    quantity: ""
  };

  // When the component mounts, load all orders and save them to this.state.products
  componentDidMount() {
    this.loadOrders();
  }

  // Loads all orders  and sets them to this.state.orders
  loadOrders = () => {
    API.getOrders()
      .then(res =>
        this.setState({ Orders: res.data, products: "", quantity: ""})
      )
      .catch(err => console.log(err));
  };

  // Deletes a order from the database with a given id, then reloads orders from the db
  deleteOrder = id => {
    API.deleteOrder(id)
      .then(res => this.loadOrders())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveOrder method to save the order data
  // Then reload orders from the database
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.quantity);
    if (this.state.quantity) {
      API.saveOrder({
        quantity: this.state.quantity,
        product: this.state.product
      })
        .then(res => this.loadOrders())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>My Order</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.quantity}
                onChange={this.handleInputChange}
                name="quantity"
                placeholder="Quantity (required)"
              />
            </form>
          </Col>
          { <Col size="md-6">
            <Jumbotron>
              <h1>Products On My List</h1>
            </Jumbotron>
            {this.state.products.length ? (
              <List>
                {this.state.products.map(product => {
                  return (
                    <ListItem key={product._id}>
                      <a href={"/products/" + product._id}>
                        <strong>
                          {product.category} ==> {product.item} ==> {product.price}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteProduct(product._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>}
        </Row>
      </Container>
    );
  }
}

export default Orders;
