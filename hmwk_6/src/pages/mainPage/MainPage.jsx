import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const MainPage = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const [users, setUsers] = useState([]);

   const onSubmit = (data) => {
      setUsers([...users, data]);
      reset();
   };

   const handleClearTable = () => {
      setUsers([]);
   };

   const handleDeleteUser = (index) => {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
   };

   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div>
               <input
                  {...register('name', { required: true })}
                  placeholder="Name"
               />
               {errors.name && <span>Name is required</span>}
            </div>
            <div>
               <input
                  {...register('username', { required: true })}
                  placeholder="Username"
               />
               {errors.username && <span>Username is required</span>}
            </div>
            <div>
               <input
                  {...register('email', { required: true })}
                  placeholder="Email"
               />
               {errors.email && <span>Email is required</span>}
            </div>
            <div>
               <input
                  {...register('phone', { required: true })}
                  placeholder="Phone"
               />
               {errors.phone && <span>Phone is required</span>}
            </div>
            <div>
               <input
                  {...register('website')}
                  placeholder="Website"
               />
            </div>

            <button type="submit">Create</button>
            <button type="button" onClick={handleClearTable}>Cleare the table</button>
         </form>





         {users.length === 0 ? (
            <p>The table is empty</p>
         ) : (
            <table>
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Username</th>
                     <th>Email</th>
                     <th>Phone</th>
                     <th>Website</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user, index) => (
                     <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>
                           <button onClick={() => handleDeleteUser(index)}>Delete</button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
      </div>
   );
};
