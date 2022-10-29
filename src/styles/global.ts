import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #ffffff;
  }

  * {
    margin: 0;
      padding: 0;
    box-sizing: border-box;
  }

  // É bom configurar em toda aplicação
  // Padrão = font-size: 16px (Desktop (ideal))
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15 px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14 px
    }
  }

  // REM = 1rem = 16px

  body {
    background: var(--background);
    -webkit-animation-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`