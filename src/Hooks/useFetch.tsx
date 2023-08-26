import React from "react";

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  const [data, setData] = React.useState<T | null>(null); // Estado para armazenar os dados da requisição
  const [loading, setLoading] = React.useState(false); // Estado para indicar se a requisição está em andamento
  const [error, setError] = React.useState<string | null>(null); // Estado para armazenar erros, se houver

  const optionsRef = React.useRef(options); // Ref para manter as opções da requisição entre renderizações
  optionsRef.current = options;

  React.useEffect(() => {
    const controller = new AbortController(); // Cria um controller para permitir o cancelamento da requisição
    const { signal } = controller;

    const fetchData = async () => {
      setLoading(true); // Define o estado de loading para true, indicando que a requisição está ocorrendo
      setData(null); // Limpa os dados atuais para preparar para os novos dados

      try {
        const response = await fetch(url, {
          signal, // Usa o sinal de aborted do controller
          ...optionsRef.current, // Inclui quaisquer opções fornecidas na chamada do hook
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`); // Lança um erro se a resposta não for ok
        const json = (await response.json()) as T; // Converte a resposta em JSON e tipa como T
        if (!signal.aborted) setData(json); // Se a requisição não foi abortada, atualiza os dados com o JSON
      } catch (error) {
        if (!signal.aborted && error instanceof Error) setError(error.message); // Define o estado de erro, se não for um aborted
      } finally {
        if (!signal.aborted) setLoading(false); // Define o estado de loading para false após a requisição, se não for um aborted
      }
    };
    fetchData();

    return () => {
      controller.abort(); // Aborta a requisição quando o componente é desmontado ou quando a URL muda
    };
  }, [url]);

  return { data, loading, error }; // Retorna os estados para uso pelo componente que chama o hook
}

export default useFetch;
