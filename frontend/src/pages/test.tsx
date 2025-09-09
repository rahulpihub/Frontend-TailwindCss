import { useState } from "react";
import axios from "axios";

export default function TestPage() {
  const [inputData, setInputData] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/test/", {
        data: inputData,
      });
      setResponse(res.data.message);
    } catch (err) {
      console.error(err);
      setResponse("Error occurred while sending request");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-black">Test Page</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Enter something"
          className="border p-2 rounded text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
      {response && <p className="mt-4 text-black">Response: {response}</p>}
    </div>
  );
}
