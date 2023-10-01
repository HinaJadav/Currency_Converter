import React from 'react'
import {useId} from 'react' 

function InputBox(
    {
        label, 
        amount, 
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [], // here, reason of get default value is if user not currectly use this array, on that case website not crash 
        selectCurrency = "usd",
        amountDisabled = false,
        currencyDisabled = false,
        className = "",
    }) 
    {

    const amountInputId = useId() // it give uniqe value inform of random string

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId} // build uniqe ID with input for using httpFor
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    // now, if amount change than what we do --> for that we use "onChange()"
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)} // how to use "onChange()" so all components know about if any changes is occured --> by passing event and using it call method "onAmoutChange"
                    // for check that "onAmoutChange" : use = onAmountChange && onAmountChange()
                    

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
                    value={selectCurrency} // it give default/selected currency value
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}

                >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}> 
                        {currency}
                    </option>
                ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
