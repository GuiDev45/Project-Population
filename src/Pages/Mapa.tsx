import { useData } from "../Context/DataContext";

const Mapa = () => {
  const { data } = useData();

  console.log(data);

  return <div>Mapa</div>;
};

export default Mapa;
