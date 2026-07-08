import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
<>
  <App />

  <Toaster
    position="top-right"
    toastOptions={{
      duration: 2500,
      style: {
        borderRadius: "12px",
        background: "#fff",
        color: "#1e293b",
      },
    }}
  />
</>    </>
  </StrictMode>
);