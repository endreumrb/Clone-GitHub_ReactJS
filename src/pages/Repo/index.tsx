import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrump,
  Stats,
  LinkButton,
  RepoIcon,
  StarIcon,
  ForkIcon,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrump>
        <RepoIcon />
        <Link className={'username'} to={'/endreumrb'}>
          Endreumrb
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/endreumrb/React'}>
          Teste
        </Link>
      </Breadcrump>

      <p>Qulaqeq descrição</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/endreumrb'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
