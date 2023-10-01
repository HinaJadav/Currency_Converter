import useCurrencyInfo from './hooks/useCurrencyInfo'
import { useState } from 'react'
import { InputBox } from './components'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  // use cuntom hooks
  const currencyInfo = useCurrencyInfo(from) // "currencyInfo" : it store one json object with all keys and values 

  const options = Object.keys(currencyInfo) // now for fetch only "currencyInfo" object keys we do this --> hold this all values into one variable

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]) 
  } // it is the state which provide final result to us

  return (
    <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.pexels.com/photos/9494917/pexels-photo-9494917.jpeg?auto=compress&cs=tinysrgb&w=600')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault(); // in this line we prevent, default behaviour of form submit button
                          // but below methon calles when we click on button
                          convert();
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) => {
                                setFrom(currency);
                              }}// it reflect changes in amount after click on converter button
                              selectCurrency={from}
                              onAmountChange={(amount => {
                                setAmount(amount) 
                              })}
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) => {
                                setTo(currency);
                              }}
                              selectCurrency={to}
                              amountDisabled // it automatically true
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App


// Object.keys() : it use for fetch only all keys value from object  
