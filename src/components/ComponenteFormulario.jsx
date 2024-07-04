import react, { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [informacoes, setInformacoes] = useState(null);

  const Enviar = (event) => {
    event.preventDefault();
    setInformacoes({ nome, email });
    setNome('');
    setEmail('');
  };

  return (
    <div className='forms'>
      <form className='preencher' onSubmit={Enviar}>
        <label> Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required/>
        </label>
      
        <label> Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </label>
    
        <button type="submit" className='botao'>Enviar</button>
      </form>

      {informacoes && (
        <div>
          <h3>Valores Inseridos</h3>
          <p>Nome: {informacoes.nome}</p>
          <p>Email: {informacoes.email}</p>
        </div>
      )}
    </div>
  );
}

export default Formulario;





// import react, { useState } from 'react';

// function AlteracaoTexto() {
//     const [texto, setTexto] = useState(true);

//     const Alterar = () => {
//       setTexto(texto => !texto);  
//     }

//     return (
//         <>
//             <div>
//                 <span>{texto ? <p>oiii</p> : <p>tchauu</p> }</span>
//             </div>
           
//             <button onClick={Alterar}>Alterar</button>
//         </>
//     );
// }

// export default AlteracaoTexto;