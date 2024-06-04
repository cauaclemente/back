import axios from "axios";

export type State = {
  id: number,
  name: string
}

export const getState = async(): Promise<State[]> => {
  const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  return response.data.map((state: any) => ({
    id: state.id,
    name: encrypt(state.nome)
  }))
}

const encrypt = (text: string): string => {
  return text.split('').reverse().join('');
};
 