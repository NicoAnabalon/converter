import { useState } from "react";
import { gunzipSync } from "zlib";
import { Converter } from "../components";

export const GzipToJSON = () => {
  const [convertedValue, setConvertedValue] = useState<string>("");

  const convert = (text: string) => {
    const buffer = Buffer.from(text, "base64");
    const ungzipped = gunzipSync(buffer);
    const json = JSON.parse(ungzipped.toString());
    const stringifiedJSON = JSON.stringify(json, null, "\t");
    setConvertedValue(() => stringifiedJSON);
  };

  return (
    <Converter
      from="GZIP in Base64"
      to="JSON"
      onChange={convert}
      convertedValue={convertedValue}
      errorMessage=""
    />
  );
};
