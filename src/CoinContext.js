import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CoinContext = ({ children }) => {
	const [currency, setCurrency] = useState("ZAR");
	const [symbol, setSymbol] = useState("R");

	useEffect(() => {
		switch (currency) {
			case "ZAR":
				setSymbol("R");
				break;
			case "USD":
				setSymbol("$");
				break;
			case "EUR":
				setSymbol("€");
				break;
			case "NGN":
				setSymbol("₦");
				break;
			default:
				setSymbol(""); // or a default symbol if needed
				break;
		}
	}, [currency]);

	return (
		<Crypto.Provider value={{ currency, setCurrency, symbol }}>
			{children}
		</Crypto.Provider>
	);
};

export default CoinContext;

export const CoinState = () => {
	return useContext(Crypto);
};
