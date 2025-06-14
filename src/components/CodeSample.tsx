import React from "react";

interface CodeSampleProps {
  code: string;
}

const CodeSample: React.FC<CodeSampleProps> = ({ code }) => {
  return (
    <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
      <code>{code}</code>
    </pre>
  );
};

export default CodeSample;
