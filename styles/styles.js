import { css } from 'lit';

export const styles = css`
  body {
    background: #136a8a; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #136a8a,
      #267871
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #136a8a,
      #267871
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  h1 {
    font-size: 34px;
    color: white;
    font-family: 'Playfair Display', serif;
  }

  form {
    margin: 50px auto;
  }

  .principal-content {
    margin: 50px auto;
    background-color: white;
    -webkit-box-shadow: -1px 20px 52px -13px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 20px 52px -13px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 20px 52px -13px rgba(0, 0, 0, 0.75);
    border-radius: 20px;
  }

  .messages {
    color: white;
  }

  .btn {
    width: 100%;
  }

  #result {
    text-align: center;
  }

  .content-spinner {
    display: none;
  }

  .spinner {
    width: 40px;
    height: 40px;

    position: relative;
    margin: 100px auto;
  }

  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #93c54b;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 2s infinite ease-in-out;
    animation: sk-bounce 2s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  @-webkit-keyframes sk-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
`;
