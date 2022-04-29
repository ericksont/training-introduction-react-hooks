import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import cactusImg from '../../images/cactus.png';
import { Quotes } from '../../components';
import { getQuote } from '../../services';

export function App() {
  const isMounted = useRef(true);
  const [quote, setQuote] = useState({
    speaker: 'Loading speaker...',
    quote: 'Loading Quote'
  });

  const onUpdate = async () => {
    const resQuote = await getQuote();

    if (isMounted.current) {
      setQuote(resQuote);
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes {...quote} onUpdate={onUpdate} />
      <CactusImg alt="Cactus" src={cactusImg} />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CactusImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
