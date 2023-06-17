const button = (user) => {
  const save = () => localStorage.setItem(user.name, JSON.stringify(user));
  return <button onClick={save}>save</button>;
};
export default button;
