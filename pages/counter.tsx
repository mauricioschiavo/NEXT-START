import { useState } from 'react';

export interface CounterProps {
  initialValue: number;
}

export function Counter(props: CounterProps) {
  const { initialValue } = props;

  const [contagem, setContagem] = useState(initialValue);

  function Adicionar() {
    setContagem(contagem + 1);
  }

  return (
    <>
      <p>
        Counter {contagem} <button onClick={Adicionar}>Adicionar</button>
      </p>
    </>
  );
}
