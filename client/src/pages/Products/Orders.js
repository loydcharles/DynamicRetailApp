import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import Quantity from "../../components/Quantity";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import moment from 'moment';



class Orders extends Component {
  // Setting our component's initial state
  state = {
    orders: [],    
    customer_name: "",
    date: "",
    price: "",
    total: ""
  }
  
  // When the component mounts, load all orders and save them to this.state.orders
  componentDidMount() {
    this.loadOrders();
  }

  // Loads all orders  and sets them to this.state.orders
  loadOrders = () => {
    API.getOrders()
      .then(res => {
        this.setState({ orders: [...this.state.orders, ...res.data]})
        console.log(this.state.orders);
      })
      .catch(err => console.log(err));
  };


  // Deletes a order from the database with a given id, then reloads orders from the db
  deleteOrder = id => {
    API.deleteOrder(id)
      .then(res => this.loadOrders())
      .catch(err => console.log(err));
  };

  // When the form is submitted, use the API.saveOrder method to save the order data
  // Then reload orders from the database
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.quantity);
    if (this.state.quantity) {
      API.saveOrder({
        customer_name: this.state.customer_name,        
        date: this.state.date,
        cart: this.state.cart[{}]
      })
        .then(res => this.loadOrders())
        .catch(err => console.log(err));
    }
  };

   
  render() {
    console.log(this.state.orders); 
    return (
      <Container fluid>
    
          { <Col size="md-6">
            <Jumbotron>
              <h1>Orders On My List</h1>
            </Jumbotron>                       
            {this.state.orders.length ? (                  
              <List>
                {this.state.orders.map(order => {
                  return (
                    <ListItem key={order._id}>   
                    < a href={"/orders/" + order._id}>                                          
                        <strong>

                        

                          Customer: {order.customer_name} Order Date: {order.date} 
                        </strong>
                        </a>
                      <List>
                      {order.cart.map((item, idx) => {
                        return (
                          <ListItem key={idx} >
                         
                            <strong>
                              {item.item}
                              </strong>
                              <div className="box-footer" style={{textAlign:"left"}}> 
                            
                              Quantity: {item.quantity}
                              </div>
                             
                             <div className="box-footer" style={{textAlign:"left"}}> 
                            
                              Price: ${item.price}
                              </div>
                          <div className="box-footer" style={{textAlign:"right"}}>

                            Sub Total: ${item.price * item.quantity}
                            </div>
                          
                          </ListItem>
                         

                            
                      )
                      
                    }
                                      )
                                        }
                      </List>                     
                      <div className="box-footer" style={{textAlign:"center"}}>Total: $                      
                      </div>
                    </ListItem>                    
                  );                  
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>}        
      </Container>
    );
  }
}


export default Orders;

