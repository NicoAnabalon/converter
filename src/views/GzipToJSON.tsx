import { Converter } from "../components";

export const GzipToJSON = () => {
  const convert = (text: string) => {
    console.log("text =>", text);
  };
  return (
    <Converter
      from="GZIP in Base64"
      to="JSON"
      onChange={convert}
      convertedValue=""
      errorMessage=""
    />
  );
};
