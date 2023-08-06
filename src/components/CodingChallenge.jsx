import React, { useState } from 'react';

const CodingChallenge = () => {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    // Simulate AI auto-grading (pseudo-code)
    const AIResult = simulateAIAutoGrading(code);

    // Set the result based on AI's evaluation
    setResult(AIResult);
  };

  // Simulated AI auto-grading (pseudo-code)
  const simulateAIAutoGrading = (code) => {
    // Evaluate the code and return a result
    // You can implement this part using actual AI libraries or logic
    // For this example, let's assume a simple scenario
    if (code.includes('console.log')) {
      return 'Pass';
    } else {
      return 'Fail';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-white text-2xl mb-4">Coding Challenge</h2>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
          className="w-full h-32 p-2 mb-4 bg-gray-700 text-white border border-gray-600 rounded"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
        <div className="text-white font-bold mt-4">{result}</div>
      </div>
    </div>
  );
};

export default CodingChallenge;
