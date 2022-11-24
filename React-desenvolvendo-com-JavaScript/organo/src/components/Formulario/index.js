import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './Formulario.css';
import { useState } from 'react';

const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label='Nome'
          placeholder='Digite o seu nome ...'
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label='Cargo'
          placeholder='Digite o seu cargo ...'
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label='Imagem'
          placeholder='Digite o endereco da imagem ...'
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label='Time'
          itens={props.times}
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
