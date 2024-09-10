import { useEffect, useState } from 'react';
import { ErrorPage } from '../errorPage/ErrorPage';
import { MainPage } from '../mainPage/MainPage';

export function EnterPage() {
   const [state, setState] = useState({ name: '', lastname: '' });

   const askName = () => {
      const fullName = prompt("Введите ваше полное имя (имя фамилия):");
      if (fullName) {
         const arr = fullName.trim().split(' ');
         const name = arr[0] || '';
         const lastname = arr[1] || '';
         setState({ name, lastname });
      }
   };

   useEffect(() => {
      askName();
   }, []); // пустой массив зависимостей, функция выполнится один раз после монтирования компонента

   return state.name.toUpperCase() === "JOHN" && state.lastname.toUpperCase() === "JOHNS" 
      ? <MainPage user={{ name: state.name, lastname: state.lastname }} /> 
      : <ErrorPage user={{ name: state.name, lastname: state.lastname }} />;
}
