import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
  return (
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterar(evento.target.value)}
        required={props.required}
        value={props.value}
      >
        {props.itens.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
