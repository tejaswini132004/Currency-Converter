import { useState } from "react"
import InputBox from "./Components/InputBox"
import useCurrencyInfo from "./Hooks/useCurrencyInfo"
function App() {

  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)

  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>
      <div className="main">
        <div className="main-container">
          <form
            onSubmit={(e) => (
              e.preventDefault()

            )}
          >
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}

              onAmountChange={(amount) => (setAmount(amount))}
              onCurrencyChange={(currency) => (setFrom(currency))}
              selectCurrency={from}
            />
            <div className="btn-container">
              <button onClick={swap} className="btn">Swap</button>
            </div>
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}

              // onAmountChange={(amount)=>(setAmount(amount))}
              onCurrencyChange={(currency) => (setTo(currency))}
              selectCurrency={to}
              amountDisable
            />
            <div className="btn-container">
              <button onClick={convert} type="submit" className="btn">Convert {from.toUpperCase()} TO {to.toUpperCase()}</button>
            </div>
          </form>

        </div>
      </div >

    </>
  )
}

export default App
