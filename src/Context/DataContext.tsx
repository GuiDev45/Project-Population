import React from "react";
import useFetch from "../Hooks/useFetch";

// Definindo a estrutura dos dados que o DataContext vai conter
type IDataContext = {
  data: IRestCountries[] | null; // Um array de objetos IVenda ou null se não estiver disponível
  loading: boolean; // Indica se os dados estão sendo buscados no momento
  error: string | null; // Armazena uma mensagem de erro se algo der errado, caso contrário, é null
};

// Definindo a estrutura de uma venda individual (IVenda)
type IRestCountries = {
  idd: {
    root: string;
    suffixes: string[];
  };
  name: {
    common: string;
  };
  population: number;
};

// Criando um contexto do React para a estrutura IDataContext, inicialmente definido como null
const DataContext = React.createContext<IDataContext | null>(null);

// Hook personalizado que facilita o consumo do DataContext
export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context)
    throw new Error("useDataa precisa estar em DataContextProvider"); // Gera um erro se o hook for usado fora do DataContextProvider
  return context;
};

// Componente que fornece o DataContext aos seus filhos usando useFetch para buscar dados
export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IRestCountries[]>(
    "https://restcountries.com/v3.1/all",
  );
  return (
    // Fornecendo o DataContext com os dados buscados, estado de carregamento e mensagem de erro
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
