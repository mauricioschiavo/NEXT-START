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

  function Remover() {
    setContagem(contagem - 1);
  }

  return (
    <>
      <p>
        Counter {contagem}
        <br />
        <button onClick={Adicionar}>Adicionar</button>
        <button onClick={Remover}>Remover</button>
      </p>
    </>
  );
}
