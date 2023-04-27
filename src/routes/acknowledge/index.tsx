import { FC } from 'react';
import { Button } from 'components/button';

import { useLocalStorage } from 'usehooks-ts';

const Home: FC = () => {
  const [, setAcknowledged] = useLocalStorage('acknowledged', false);

  return (
    <div className="container has-text-centered">
      <div className="column is-8 is-offset-2">
        <h2 className="title is-2">Welcome to Final Fantasy X Monster Arena Kill tracker</h2>
        <p className="subtitle is-3">
          This app is designed to help track the monster kills around the game, making the post-game Monster Arena challenge easier.
        </p>

        <h3 className="title is-3 mt-6">Beware, it may contain minor spoilers.</h3>

        <Button color="info" onClick={() => setAcknowledged(true)}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Home;
