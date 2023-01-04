import { useState } from "react";
import { gzipSync } from "zlib";
import { Converter } from "../components";

export const Home = () => {
  const [convertedJSON, setConvertedJSON] = useState<any>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const convert = (text: string) => {
    setErrorMessage(() => "");
    try {
      const json = JSON.parse(text);
      const stringifiedJSON = JSON.stringify(json);
      const gzipped = gzipSync(stringifiedJSON);
      const base64 = gzipped.toString("base64");
      setConvertedJSON(() => base64);
    } catch (e) {
      setErrorMessage(() => "Invalid JSON");
    }
  };
  return (
    <Converter
      from="JSON"
      to="GZIP in Base64"
      onChange={convert}
      convertedValue={convertedJSON}
      errorMessage={errorMessage}
    />
  );
};
