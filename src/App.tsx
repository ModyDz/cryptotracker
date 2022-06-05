import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import Crypto, { CryptoInterface } from "./components/Crypto";
import "./globals.css";
const inputStyle = {
  display: "block",
  width: "400px",
  maxWidth: "100%",
  padding: "1rem 2rem",
  fontSize: "1.6rem",
  margin: "1rem auto",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "lightgray",
};
export default function App() {
  const [cryptoData, setCryptoData] = useState<{
    coins: Array<CryptoInterface>;
  }>({
    coins: [],
  });
  const [searchCrypto, setSearchCrypto] = useState("");
  const queriedCryptos = cryptoData.coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchCrypto.toLowerCase());
  });
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchCrypto(e.target.value);
  }
  useEffect(() => {
    async function fetchCrypto() {
      try {
        const response = await axios.get(
          "https://api.coinstats.app/public/v1/coins?skip=0"
        );
        setCryptoData(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCrypto();
    console.log(cryptoData);
  }, []);
  return (
    <div style={{ padding: "1rem" }}>
      <input
        placeholder="filter coins"
        onChange={handleChange}
        style={inputStyle}
      />
      {queriedCryptos &&
        queriedCryptos.map((coin: CryptoInterface) => {
          return <Crypto key={coin.id} {...coin} />;
        })}
    </div>
  );
}
