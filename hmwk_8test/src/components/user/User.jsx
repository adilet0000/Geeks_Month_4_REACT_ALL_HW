
const User = ({ user, deleteUser }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.username}</td>
      <td>
        <button onClick={deleteUser}>Удалить</button>
      </td>
    </tr>
  );
};

export default User;
