import { useEffect, useState } from 'react';

export function ErrorPage({ user: { name, lastname } }) {
  const [state, setState] = useState({ name, lastname });

  useEffect(() => {
    setState({ name, lastname });
  }, [name, lastname]);

  return (
    <h2>Тебе сюда нельзя - {state.name} {state.lastname}</h2>
  );
}