import "./styles.css";

export default function App() {
  return (
    <div className="paynow">
      <div className="payment-method">
        <div>
          <h2>payment Methods</h2>
          <h3 id="pm-responsive">payment Methods</h3>
        </div>
        <div className="method-list">
          <ul>
            <li>Credit Card</li>
            <li>Netbanking</li>
            <li>UPI</li>
          </ul>
        </div>
      </div>
      <div className="devider"></div>
      <div className="payment-details">
        <h3>payment Details</h3>

        {/* creditcard */}

        {/* <div className="creditcard">
          <div className="credit-inputs">
            <label htmlFor="">Card Number :</label>
            <input type="text" name="" id="cardnumber" />

            <label htmlFor="">Card Holder :</label>
            <input type="text" name="" id="cardholder" />
          </div>
          <div className="credit-inputs">
            <label for="cars">Month:</label>
            <select name="cars" id="months">
              <option>Jan</option>
              <option>Feb</option>
              <option>Mar</option>
              <option>Apr</option>
              <option>may</option>
              <option value="audi">Jun</option>
              <option value="audi">Jul</option>
              <option value="audi">Aug</option>
              <option value="audi">Sep</option>
              <option value="audi">Oct</option>
              <option value="audi">Nov</option>
              <option value="audi">Dec</option>
            </select>

            <label for="year">Year:</label>
            <select name="cars" id="year">
              <option>2030</option>
              <option>2029</option>
              <option>2028</option>
              <option>2027</option>
              <option>2026</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </select>
            <label htmlFor="">cvv: </label>
            <input type="d" name="" id="cvv" />
          </div>
        </div> */}

        {/* Netbanking */}

        {/* <div className="netbanking">
          <div className="bankname" id="bankdrop">
            <label for="year">Bank :</label>
            <select name="cars" id="year">
              <option>Indian Bank</option>
              <option>SBI</option>
              <option>Bank of Baroda</option>
              <option>Kotak Bank</option>
            </select>
          </div>
          <div className="bankname">
            <label htmlFor="">Account Number: </label>
            <input type="text" />
          </div>
          <div className="bankname">
            <label htmlFor="">IFSC Code: </label>
            <input type="text" />
          </div>
        </div> */}

        {/* UPI */}

        <div className="upiid">
          <label htmlFor="">UPI ID: </label>
          <input type="text" />
        </div>

        <button type="sbmit" id="paybutton">
          Proceed payment
        </button>
        <span>Rs.500</span>
      </div>
    </div>
  );
}
