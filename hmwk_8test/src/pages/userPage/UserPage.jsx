import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import User from '../../components/user/User';
import Modal from '../../components/modal/Modal';

const UserPage = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const [users, setUsers] = useState([]);
   const [modalMessage, setModalMessage] = useState('');

   const URL = 'http://localhost:8000/users'


   const fetchUsers = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setUsers(data);
   };

   useEffect(() => {
      fetchUsers();
   }, []);


   const onSubmit = async (data) => {
      const response = await fetch(URL, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });

      if (response.ok) {
         setModalMessage('Пользователь успешно создан');
         fetchUsers();
         reset();
      }
   };


   const deleteUser = async (id) => {
      const response = await fetch(`${URL}/${id}`, {
         method: 'DELETE',
      });

      if (response.ok) {
         setModalMessage('Пользователь удален');
         fetchUsers();
      }
   };

   return (
      <div>
         <h1>Список пользователей</h1>

         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               type="text"
               placeholder="Name"
               {...register('name', { required: 'Имя обязательно' })} />
            {errors.name && <p>{errors.name.message}</p>}

            <input
               type="email"
               placeholder="Email"
               {...register('email', {
                  required: 'Email обязателен',
               })} />
            {errors.email && <p>{errors.email.message}</p>}

            <input
               type="text"
               placeholder="Username"
               {...register('username', { required: 'Username обязателен' })} />
            {errors.username && <p>{errors.username.message}</p>}


            <button type="submit">Создать</button>
         </form>

         {users.length === 0 ? (
            <p>Список пуст</p>
         ) : (
            <table>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Username</th>
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user) => (
                     <User
                        key={user.id}
                        user={user}
                        deleteUser={() => deleteUser(user.id)}
                     />
                  ))}
               </tbody>
            </table>
         )}

         {modalMessage && <Modal message={modalMessage} onClose={() => setModalMessage('')} />}
      </div>
   );
};

export default UserPage;
