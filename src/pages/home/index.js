import { useLocation } from "react-router-dom";

const Home = () => {
  const state = useLocation().state;
  console.log(state);
  return (
    <>
      <h1>welcome {state.name} !</h1>
    </>
  );
};
export default Home;
