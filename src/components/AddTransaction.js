import React,{useState}from "react";

function AddTransaction() {
  
    const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")

  function handleSubmit (e){
    e.preventDefault()
    fetch(" http://localhost:3000/transactions",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        
        
        },
        body: JSON.stringify({
            date: date,
            description: description,
            category: category,
            amount: amount
        })

    })
    
  }
    return (
        <div>
            <form onSubmit={handleSubmit} className="transaction-form">
        <div className=" key-fields">
          <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" />
          <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />
          <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="add-button" type="submit">
          Add Transaction
        </button>
      </form>
            
        </div>
    )
}
export default AddTransaction;
