import "./meesho.css";

function Meesho() {
  return (
    
    
    <div className="container">
   
      <div className="column-seller-steps">
        <span className="numberCircle clrGreen">
          <span className="hr-after">1</span>
        </span>
        <div id="four">
          <h3>Sign up for free</h3>
        </div>
        <div id="four">
          <p>
            Register as a Meesho Seller. All you need is an active bank account
            and your GSTIN number.
          </p>
        </div>
      </div>
      <div className="column-seller-steps">
        <span className="numberCircle clrGreen">
          <span className="hr-after">2</span>
        </span>
        <div id="four">
          <h3>upload your product & catalog</h3>
        </div>
        <div id="four">
          <p>
            After completing the registration, upload your product catalog on
            the Meesho Supplier Panel.
          </p>
        </div>
      </div>
      <div className="column-seller-steps">
        <span className="numberCircle clrGreen">
          <span className="hr-after">3</span>
        </span>
        <div id="four">
          <h3>Receive & Ship Orders</h3>
        </div>
        <div id="four">
          <p>
            Meesho charges the lowest shipping cost for deliveries across India.
          </p>
        </div>
      </div>
      <div className="column-seller-steps">
        <span className="numberCircle clrGreen" id="four">
          <span>4</span>
        </span>
        <div id="four">
          <h3>Receive Payments</h3>
        </div>
        <div id="four">
          <p>
            Payment is securely deposited directly to your bank account on
            Meesho following a 7-day payment cycle from order delivery,
            including Cash on Delivery orders.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Meesho;
