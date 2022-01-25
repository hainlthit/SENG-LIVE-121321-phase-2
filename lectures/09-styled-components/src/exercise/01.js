import { useState } from "react";
// ✅ remember to import the styled-components library!
import styled from "styled-components";

// ✅ create two components using styled-components: a div and a button
// ✅ use the inline styles from the elements below to create the CSS rules for your components
// 📃 https://styled-components.com/docs/basics#getting-started

const Div = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  place-content: center;
  gap: 16px;
  background-color: skyblue;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
`;

const Button = styled.button`
  background-color: dodgerblue;
  padding: 16px;
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export default function App() {
  const [count, setCount] = useState(0);

  // ✅ remove the style prop from the div and the button
  // ✅ replace the JSX elements with your styled components
  return (
    <Div>
      <Button onClick={() => setCount(count + 1)}>Clicks: {count}</Button>
      <Button onClick={() => setCount(count + 1)}>Clicks: {count}</Button>
    </Div>
  );
}
