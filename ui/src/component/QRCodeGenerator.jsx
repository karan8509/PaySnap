import React, { useState } from "react";
import Qrcode from "react-qr-code";
export const QRCodeGenerator = () => {
  const [number, setNumber] = useState("");

  const handleClick = () => {
 
  };
  return (
    <div>
      <h1>QRCode Generator</h1>
      <div className="container">
        <input
          type="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={handleClick}>Generator QRcode </button>
        <h1>{number && <Qrcode value={number} />}</h1>
      </div>
    </div>
  );
};
