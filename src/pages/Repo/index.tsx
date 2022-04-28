import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { APIRepo } from '../../types';

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

interface Data {
  repo?: APIRepo;
  error?: string;
}

const Repo: React.FC = () => {
  const { username = 'endreumrb' } = useParams();
  const { reponame = 'BlueRidge-ReactJS' } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/repos/${username}/${reponame}`),
    ]).then(async (response) => {
      const [repoResponse] = response;

      if (repoResponse.status === 404) {
        setData({ error: 'Repository not found' });
        return;
      }

      const repo = await repoResponse.json();

      setData({ repo });
    });
  }, [username, reponame]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.repo || !data.repo) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Breadcrump>
        <RepoIcon />
        <Link className={'username'} to={'/endreumrb'}>
          {data.repo.owner.login}
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/endreumrb/React'}>
          {data.repo.name}
        </Link>
      </Breadcrump>

      <p>{data.repo.description === null ? '.' : data.repo.description}</p>

      <Stats>
        <li>
          <StarIcon />
          <b>{data.repo.stargazers_count}</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>{data.repo.forks}</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={data.repo.html_url}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
