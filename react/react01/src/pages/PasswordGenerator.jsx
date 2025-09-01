import React, { useState, useEffect, useRef ,useCallback} from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passwordGeneratr, setPasswordGenerator] = useState("");
  const passRef = useRef();

  const passwordGeneratorz = useCallback(()=> {
    
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let chr = "!@#$%^&*()_+";
    let num = "1234567890";

    if (numberAllowed) {
      str += num;
    }
    if (charAllowed) {
      str += chr;
    }

    for (let i = 0; i < length; i++) {
      let randomNum = Math.floor(Math.random() * str.length);
      pass += str[randomNum];
    }
    setPasswordGenerator(pass);
  
  } ,[length, numberAllowed, charAllowed])

  function passwordCopy() {
    window.navigator.clipboard.writeText(passwordGeneratr);
    passRef.current.select();
  }

  useEffect(() => {
    passwordGeneratorz();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f4f4f4",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: "400px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Password Generator</h1>

        <div style={{ marginBottom: "15px" }}>
          <input
            ref={passRef}
            type="text"
            value={passwordGeneratr}
            readOnly
            style={{
              padding: "10px",
              width: "100%",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
          />
        
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>
            Length: {length}
            <input
              type="range"
              min={5}
              max={45}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              style={{ width: "100%" }}
            />
          </label>
        </div>

        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
          }}
        >
          <label>
            <input
              type="checkbox"
              onChange={(e) => setNumberAllowed(e.target.checked)}
            />{" "}
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => setCharAllowed(e.target.checked)}
            />{" "}
            Include Special Characters
          </label>
        </div>

        <button
          onClick={passwordGeneratorz}
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Generate
        </button>

          <button
            onClick={passwordCopy}
            style={{
              padding: "10px 20px",
              background: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          >
            Copy
          </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
