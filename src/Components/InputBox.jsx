import React from 'react'
import "./InputBox.css"
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions,
    selectCurrency,
    amountDisable = false,
    currencyDisable = false,
}) {

    return (
        <>
            <div className='box'>
                <div className='label'>
                    <label>{label}</label>
                    <label>Currency Type</label>
                </div>
                <div className='input'>
                    <input type='number'
                        placeholder='Amount'
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                        disabled={amountDisable}
                    />
                    <select value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>

            </div>
           
        </>
    )
}

export default InputBox
