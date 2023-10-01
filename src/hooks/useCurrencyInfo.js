import {useEffect, useState} from 'react'

function useCurrencyInfo(currency) {

    const [data, setData] = useState({})

    useEffect(() => {
        // using fetch we can get Data from APIs. Mostly this Data com into "string" formate and we need to convert it into "JSON" object so we easily use it
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        )
        .then((res) => res.json())
        .then((res) => setData(res[currency])) // it set specific value of currency and based on it data fetch from APIs
        console.log(data);
    }, [currency]) // here, "currency" is dependensies bcs we want call this HOOK wheneve our currency is changed
    console.log(data);
    return data;
}

export default useCurrencyInfo;

// below is ex. of Custom Hook 


