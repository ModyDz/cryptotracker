import { CSSProperties } from "react";

const cryptoStyle = {
  background: "black",
  color: "white",
  maxWidth: "400px",
  fontSize: "2rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",
  padding: "2rem 0",
  gap: "1rem",
  borderRadius: "10px",
};
export interface CryptoInterface {
  name: string;
  id: string;
  icon: string;
  price: number;
  priceChange1d: number;
  symbol: string;
}
export default function Crypto(props: CryptoInterface) {
  return (
    <div style={cryptoStyle as CSSProperties}>
      <img alt={props.symbol} src={props.icon} />
      <div>{props.name}</div>
      <div>${props.price.toFixed(3)}</div>
      <div
        style={{
          padding: "0.5rem 1.2rem",
          backgroundColor: `${props.priceChange1d > 0 ? "#00ac6b" : "#ff5569"}`,
          borderRadius: "10px",
        }}
      >
        {props.priceChange1d}
      </div>
    </div>
  );
}
