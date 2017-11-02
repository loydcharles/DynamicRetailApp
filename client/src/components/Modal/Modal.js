import React from "react";

const Modal = props =>
  <div id="id01" classNameName="w3-modal">
    <div className="w3-modal-content w3-card-4 w3-animate-top">
      <header className="w3-container w3-theme-l1">
        <span onclick="document.getElementById('id01').style.display='none'" className="w3-button w3-display-topright">&times;</span>
        <h4>Queen City's Smokehouse Menu</h4>
        <h5>Indulge because you can<i className="fa fa-smile-o"></i></h5>
      </header>
      <div className="w3-padding">
        <button onclick="myFunction('Demo1')" className="w3-btn w3-block w3-black w3-left-align">Beverages</button>
        <div id="Demo1" className="w3-container w3-hide">
          <h4>Beer on Tap $5.50  <a className="w3-button w3-circle w3-large w3-theme-dark"><i className="fa fa-plus"></i></a>
          </h4>
          <p>Come experience the bar keeps favorite</p>
          <h4>Wine  <a className="w3-button w3-circle w3-large w3-theme-dark"><i className="fa fa-plus"></i></a>
          </h4>
          <p>Please ask our wine expert for what goes with your meal</p>
          <h4>Fountain Drinks $1.50  <a className="w3-button w3-circle w3-large w3-theme-dark"><i className="fa fa-plus"></i></a>
          </h4>
          <p>Finest selection of Pepsi and Coke products this side of the river</p>
        </div>

        <button onclick="myFunction('Demo2')" className="w3-btn w3-block w3-black w3-left-align">Appetizers</button>
        <div id="Demo2" className="w3-container w3-hide">
          <h4>Loaded Cheese Fries $6.50 <a className="w3-button w3-circle w3-large w3-theme-dark"><i className="fa fa-plus"></i></a>
          </h4>
          <p>Experience your favorite vegetable, the french fries smothered in cheese</p>
          <h4>Stuffed Jalopenos $5.50 <a className="w3-button w3-circle w3-large w3-theme-dark"><i className="fa fa-plus"></i></a>
          </h4>
          <p>Nice and Spicy</p>
          <h4>Dixie Salad $10.50 <a className="w3-button w3-circle w3-large w3-theme-dark"><i className="fa fa-plus"></i></a>
          </h4>
          <p>Everything is bigger here even our salads which comes packed with BBQ chicken</p>
          <h4>Nachos Libre $8.50 <a className="w3-button w3-circle w3-large w3-theme-dark"><i className="fa fa-plus"></i></a>
          </h4>
          <p>Neverending parade of chips and salsa</p>
        </div>

        <button onclick="myFunction('Demo3')" className="w3-btn w3-block w3-black w3-left-align">The Meat</button>
        <div id="Demo3" className="w3-container w3-hide">
          <h4>The Cuban $11.00 <a className="w3-button w3-circle w3-large w3-theme-dark"><i className="fa fa-plus"></i></a>
          </h4>
          <p>Cuban bread piled with hickory pork, ham, lettuce and tomato</p>
          <h4>Texas Styled Burger $12.50 <a className="w3-button w3-circle w3-large w3-theme-dark"><i className="fa fa-plus"></i></a>
          </h4>
          <p>Texas Styled Beef BBQ layered with Chef's special sauce on Texas toast with smoked red onions.</p>
          <h4>Ribeye 8oz $12.50 <a className="w3-button w3-circle w3-large w3-theme-dark"><i className="fa fa-plus"></i></a>
          </h4>
          <p>USDA Grade A steak comes with choice of salad and fries or potatoes</p>
        </div>
      </div>
    </div>
    </div>

export default Modal;