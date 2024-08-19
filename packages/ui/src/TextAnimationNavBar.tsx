import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92% {
    color: #e0e374; /* Corrigido para uma cor hexadecimal válida */
    text-shadow: none;
  }
  18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100% {
    color: #fff;
    text-shadow: 0 0 10px #03bcf4,
                0 0 20px #03bcf4,
                0 0 40px #03bcf4,
                0 0 80px #03bcf4,
                0 0 160px #03bcf4,
                0 0 400px #03bcf4;
  }
`;

const AnimateBlink = styled.h2`
  font-size: 3em;
  color: #e0e374;
  text-transform: uppercase;
  width: 100%;
  -webkit-box-reflect: below -42px linear-gradient(transparent, #0004);
  margin: auto;
  font-weight: bold;
  margin-right: 0;
  padding: 0px;


  span {
    animation: ${animate} 5s linear infinite;
  }

  span:nth-child(even) {
    animation-delay: 0.4s;
  }
`;

interface Props {
  animating: boolean;
  children: React.ReactNode;
}

const TextAnimateComponent: React.FC<Props> = ({ animating, children }) => {
  if (animating) {
    return (
      <AnimateBlink>
        <span>{children}</span>
      </AnimateBlink>
    );
  }
  return null;
};

export default TextAnimateComponent;