import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './style.css'

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialCode = '', language = 'javascript' }) => {
  const [code, setCode] = useState(initialCode);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <textarea
        value={code}
        onChange={handleCodeChange}
        className="w-full h-40 p-2 border rounded"
        placeholder="Escribe tu código aquí..."
      ></textarea>
      <div className="mt-4">
        <SyntaxHighlighter language={language} style={okaidia}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeEditor;
