import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { conquests } from 'hooks/data';
import Enemy from './_components/enemy';

const LocationDetails: FC = () => {
  const { locationId = '' } = useParams();

  return (
    <div className="container has-text-centered">
      <div className="columns is-multiline is-3">
        {conquests[locationId].map((enamyName) => (
          <div key={enamyName} className="column is-one-third-desktop is-half-tablet">
            <Enemy location={locationId} name={enamyName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationDetails;
