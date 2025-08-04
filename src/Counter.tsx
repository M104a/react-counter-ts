import { useState } from "react";
import { MoonIcon,StarIcon } from "@heroicons/react/24/outline"; // ※線タイプの場合

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const handleReset = () => {
    setCount(0);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

  };

  //+-ボタンの共通スタイル
  const btnStyle = {
    padding: "8px 16px",
    margin: "4px",
    fontSize: "24px",
    backgroundColor: "#d8bfd8",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  //Resetボタンのスタイル
  const resetbtnStyle = {
    padding: "10px 16px",
    margin: "4px",
    fontSize: "16px",
    backgroundColor: "#d8bfd8",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const containerStyle = {
    textAlign: "center",
    marginTop: "50px",
    backgroundColor: isDarkMode ? "#a4a8d4" : "#f5f5f5",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h1
        style={{
          color: "#696969",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <StarIcon style={{ width: "24px", height: "24px", color: "#f4a460" }} />
        カウント
        <MoonIcon style={{ width: "24px", height: "24px", color: "#ffd700", cursor:"pointer" }}  onClick={toggleDarkMode} />
        <span style={{ fontSize: "12px", color: "#aaa" }}>click</span>
      </h1>

      <h2 style={{ color: "#696969" }}>{count}</h2>
      <button style={btnStyle} onClick={handleIncrement}>
        +
      </button>
      <button style={btnStyle} onClick={handleDecrement}>
        -
      </button>
      <button style={resetbtnStyle} onClick={handleReset}>
        リセット
      </button>
    </div>
  );
};

export default Counter;
