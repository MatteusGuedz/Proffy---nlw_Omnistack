import React from 'react';
import  './styles.css';

import whatsIcon from '../../assets/images/icons/whatsapp.svg'
const TeacherItem: React.FC = () => {
  return (

    <article className="teacher-item">
    <header>
      <img src="https://avatars3.githubusercontent.com/u/46463944?s=460&u=c56af4a4d9ba5cce94c1ee3c6f7b7fb1a478aa53&v=4" alt="Mateus Guedz"/>
      <div>
        <strong>Mateus Guedz</strong>
        <span>Quimica</span>
      </div>
    </header>

    <p>
    Entusiasta das melhores tecnologias de química avançada.
    </p>
    <br />
    <p>
    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
    </p>

    <footer>
      <p>
      Preço/hora 
      <strong>R$ 60,00</strong>
      </p>

      <button type="submit">
          <img src={whatsIcon} alt="whatsapp"/>
            Entrar em Contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;