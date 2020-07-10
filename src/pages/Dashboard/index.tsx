import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/25750884?s=460&u=bc904c520bd7674597315b49975bfed4df26f3fd&v=4"
            alt="kennedy"
          />
          <div>
            <strong>qnedy/teste</strong>
            <p>teste de descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/25750884?s=460&u=bc904c520bd7674597315b49975bfed4df26f3fd&v=4"
            alt="kennedy"
          />
          <div>
            <strong>qnedy/teste</strong>
            <p>teste de descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/25750884?s=460&u=bc904c520bd7674597315b49975bfed4df26f3fd&v=4"
            alt="kennedy"
          />
          <div>
            <strong>qnedy/teste</strong>
            <p>teste de descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
