import { useState, useEffect } from 'react';

export function MainPage({ user: { name, lastname } }) {
  const [state, setState] = useState({ name, lastname });

  useEffect(() => {
    setState({ name, lastname });
  }, [name, lastname]);

  return (
    <h2>Добро пожаловать {state.name} {state.lastname} мы тебя ждали</h2>
  )
}
