import "./App.css";
import { gzipSync } from "zlib";
import { useState } from "react";

function App() {
  const [convertedJSON, setConvertedJSON] = useState<string>("");
  const [messageCopied, setMessageCopied] = useState<boolean>(false);
  const [invalidJSON, setInvalidJSON] = useState<boolean>(false);

  const validateJSON = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const json = JSON.parse(e.target.value);
      setInvalidJSON(false);
      parseJSON(JSON.stringify(json));
    } catch (e) {
      setInvalidJSON(true);
    }
  };

  const parseJSON = (stringifiedJSON: string) => {
    const gzipped = gzipSync(stringifiedJSON);
    const base64 = gzipped.toString("base64");
    setConvertedJSON(() => base64);
  };

  const copyMessage = () => {
    if (convertedJSON) {
      navigator.clipboard.writeText(convertedJSON);
      setMessageCopied(() => true);
      setTimeout(() => {
        setMessageCopied(() => false);
      }, 3000);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>JSON to GZIP to Base64 Converter</h1>
      </header>
      <div className="textarea-container">
        {invalidJSON ? <div className="snackbar error">JSON invalido</div> : ""}
        <textarea
          placeholder="Insert JSON here..."
          onChange={validateJSON}
        ></textarea>
      </div>
      <div className="textarea-container">
        <textarea
          placeholder="Waiting for JSON..."
          value={convertedJSON}
          readOnly
          onClick={copyMessage}
        ></textarea>
        {messageCopied ? (
          <div className="snackbar success">Mensaje copiado</div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
