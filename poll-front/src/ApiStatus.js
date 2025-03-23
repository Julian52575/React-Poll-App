import { useState, useEffect } from "react";
const API_URL = "http://localhost:" + process.env.REACT_APP_API_PORT + "/api";


// Components for different states
const LoadingComponent = () => <h2>Loading API...</h2>;
const ErrorComponent = () => <h2 style={{ color: "red" }}>API Unavailable!</h2>;
const SuccessComponent = () => <h2 style={{ color: "green" }}>API is Up! 🎉</h2>;

export default function ApiStatus() {
    const [status, setStatus] = useState("loading"); // 'loading', 'success', 'error'
  
    useEffect(() => {
      const checkAPI = async () => {
        try {
            console.log(`Fetching ${API_URL}`);
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("API not responding");
            }
            setStatus("success");
        } catch (error) {
            setStatus("error");
        }
      };
  
      checkAPI();
    }, []);

    if (status === "loading") {
        return <LoadingComponent />;
    } else if (status === "error") {
        return <ErrorComponent />;
    }
    return <SuccessComponent />;
  };