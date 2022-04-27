import React from 'react';
import RandomCalendar from './../../components/RandomCalendar';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from './styles';

import ProfileData from './../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

const Profile: React.FC = () => {
  const TabContent = () => {
    return (
      <div className='content'>
        <RepoIcon />
        <span className='label'>Repositories</span>
        <span className='number'>26</span>
      </div>
    );
  };

  return (
    <Container>
      <Tab className='desktop'>
        <div className='wrapper'>
          <span className='offset' />
          <TabContent />
        </div>

        <span className='line'></span>
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={'endreumrb'}
            name={'Endreu Benites'}
            avatarUrl={'https://avatars.githubusercontent.com/u/33642653?v=4'}
            followers={887}
            following={7}
            company={'HNSG'}
            location={'Curitiba, Brazil'}
            email={'endreu.matteusrb@gmail.com'}
            blog={'https://www.linkedin.com/in/endreu-benites/'}
          />
        </LeftSide>
        <RightSide>
          <Tab className='mobile'>
            <TabContent />
            <span className='line'></span>
          </Tab>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={'endreumrb'}
                  reponame={' BlueRidge-ReactJS'}
                  description={'Um repos padrão'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not respresent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
