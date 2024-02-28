import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

const [amount,setAmount] = useState(0); //amount
const [discount,setDiscount] =useState(0); //discount

const [yousave,setYousave] = useState(0); //save
const [youpay,setYoupay] = useState(0); //pay

console.log(amount,discount);

 const calculate=(e)=>{

const output = amount-(amount*discount)/100;
console.log(output);
setYoupay(output)

const saving = amount*discount/100;
console.log(saving);
setYousave(saving)


}


  return (
    <div className="App">
 
 <div className="container" >
 <div className="col" style={{height:'300px',width:'450px',marginBottom:'50px'}}>
<h1 style={{textAlign:'center',marginTop:'10px'}}>Enter the discount details:</h1>
<div className="form">
<form action>
  <div className="input">
    <br />
  <TextField id="outlined-basic" label="Amount" onChange={(e)=>setAmount(e.target.value)} variant="outlined" />
  <br />
  <TextField id="outlined-basic" label="Discount %" onChange={(e)=>setDiscount(e.target.value)} variant="outlined" />
  <br />
  </div>
<div className="button btn-success">
<Button variant="contained" onClick={e=>calculate(e)}>Calculate %</Button>
</div>

</form>

</div>

 </div>
  <div className="col" style={{height:'300px',width:'450px',marginBottom:'200px'}}>
  <h1 style={{textAlign:'center',marginTop:'10px'}}>After discount:</h1>
<div className="form">
<form action>
  <div className="input">
    <br />
  <TextField id="outlined-basic" label="You Save" variant="outlined" value={yousave} />
  <br />
  <TextField id="outlined-basic" label="You pay" variant="outlined" value={youpay} />
  <br />
  </div>

</form>

</div>
  </div>
 </div>
 <div className="container2" style={{height:'650px',width:'800px'}}>
  <h2 style={{textAlign:'center',marginTop:'10px'}}>Discount Calculator</h2>
  <br />
  <p style={{textAlign:'center',margin:'20px'}}>A discount calculator is a valuable tool used to determine the reduced price of an item after applying a discount percentage. This tool simplifies the process of calculating discounts, making it easier for consumers to understand how much they can save on their purchases. By inputting the original price of the item and the discount percentage offered, the calculator swiftly computes the discounted price, enabling shoppers to make informed decisions about their purchases. Additionally, discount calculators often provide a breakdown of savings, allowing individuals to see the amount saved and the final price they'll pay. Whether used in retail settings or online shopping platforms, discount calculators empower consumers to maximize their savings and make budget-conscious choices.</p>

<div className="result" style={{backgroundColor:'white',margin:'30px',height:'25px'}}>Amount:{amount}</div>
<div className="result" style={{backgroundColor:'white',margin:'30px',height:'25px'}}>Discount Percentage%:{discount}</div>
<div className="result" style={{backgroundColor:'white',margin:'30px',height:'25px'}}>You save:{yousave}</div>
<div className="result" style={{backgroundColor:'white',margin:'30px',height:'25px'}}>Discounted Amount:{youpay}</div>

 </div>

    </div>
  );
}

export default App;
