import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/49147257_1580422462101463_8837051217617092608_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeHMwbYVBn4VP3pMl7YSy7_0-p1mcI5aKPL6nWZwjloo8m7NqOlxBzJNl3N_7CXkshMG9so87idKVfKmfFKnqe_7&_nc_ohc=gNNlFkQ-5p8AX99n7td&_nc_ht=scontent-gru2-1.xx&oh=a9f1c1606d623022fa1bc60957ee002b&oe=5F51A819" alt="Gabriel Oliveira"/>
        <div>
          <strong>Gabriel Oliveira</strong>
          <span>Inglês</span>
        </div>
    </header>
    <p>
      Amante de lingua inglêsa já ensinou mais de 2 mil<br />
      pessoas a falar fluênte como um nativo.
      <br/> <br/>
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="whatsapp"/>
        Entrar em contato.
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;