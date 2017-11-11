import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Input1 } from "../../components/Quantity";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Products extends Component {
  // Setting our component's initial state
  state = {
    products: [],
    category: "",
    item: "",
    desc: "",
    price: ""
  };

  // When the component mounts, load all products and save them to this.state.products
  componentDidMount() {
    this.loadProducts();
  }

  // Loads all products and sets them to this.state.products
  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({ products: res.data, category: "", item: "", desc: "", price: "" }) 
      )
      .catch(err => console.log(err));      
  };

  // Deletes a product from the database with a given id, then reloads products from the db
  deleteProduct = id => {
    API.deleteProduct(id)
      .then(res => this.loadProducts())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveProduct method to save the product data
  // Then reload products from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.category && this.state.item && this.state.price) {
      API.saveProduct({
        category: this.state.category,
        item: this.state.item,
        desc: this.state.desc,
        price: this.state.price
      })
        .then(res => this.loadProducts())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>May I take your order?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Category (required)"
              />
              <Input
                value={this.state.item}
                onChange={this.handleInputChange}
                name="item"
                placeholder="Item (required)"
              />
              <Input
                value={this.state.price}
                onChange={this.handleInputChange}
                name="price"
                placeholder="Price (required)"
              />
              <TextArea
                value={this.state.desc}
                onChange={this.handleInputChange}
                name="desc"
                placeholder="Desc (Optional)"
                maxlength="2"
              />
              <FormBtn
                disabled={!(this.state.category && this.state.item && this.state.price)}
                onClick={this.handleFormSubmit}
              >
                Submit Product
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Products On My List</h1>
            </Jumbotron>
            {this.state.products.length ? (
              <List>
                {this.state.products.map(product => {
                  return (
                    <ListItem key={product._id} >

                      <a href={"/products/" + product._id}><strong> {product.category}  </strong>
                      : {product.item}
                      <DeleteBtn onClick={() => this.deleteProduct(product._id)} />
                      </a>
                                    
                      <p>
                      Price $ {product.price} 
                      </p>
                       <Input1
                value={this.state.quantity}
                onChange={this.handleInputChange}
                name="quantity"
                placeholder="(Qty)"
                class="input1"
                maxlength="2"
              />
             
                    </ListItem>
                    
                  );
                  
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Products;
