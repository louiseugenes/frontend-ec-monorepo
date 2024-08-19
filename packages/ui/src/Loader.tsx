import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Loading = styled.div`
  animation: ${rotate} 1s infinite;
  width: 50px;
  height: 50px;
  border: 6px solid #e5e5e5;
  border-top-color: #51d4db;
  border-radius: 50%; /* Adicionado para tornar o componente circular */
`;

interface Props {
  loading: boolean;
}

const LoaderComponent: React.FC<Props> = ({ loading }) => {
  if (loading) return <Loading />;
  return null;
};

export default LoaderComponent;