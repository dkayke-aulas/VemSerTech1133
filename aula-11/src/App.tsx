import { Table } from "./Table";

function App() {
  const titulos = {
    nome: "Nome do aluno",
    dataNascimento: "Data de Nascimento",
    telefone: 'Telefone'
  }

  const dados = [
    {
      nome: 'Dayana',
      dataNascimento: '28/05/94',
      telefone: '31123131'
    },
    {
      nome: 'Gabryel',
      dataNascimento: '06/08/94',
      telefone: ''
    },
    {
      nome: 'Raphael',
      dataNascimento: '04/08/95',
      telefone: '11 99127-6678'
    },
    {
      nome: 'Bruno',
      dataNascimento: '09/05/94',
      telefone: ''
    },
    {
      nome: 'Eduardo',
      dataNascimento: '22/04/89',
      telefone: ''
    },
    {
      nome: 'Juliana Maria',
      dataNascimento: '11/05/95',
      telefone: ''
    }
  ]

  return (
    <>
      <Table title={titulos} data={dados} />
    </>
  );
}

export default App;
