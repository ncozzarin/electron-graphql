/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import './styles.scss';

type Character = {
  name: string;
  id: number;
};

const PEOPLE = gql`
  query {
    characters {
      results {
        name
        id
      }
    }
  }
`;

export default function Participants() {
  const { loading, error, data } = useQuery(PEOPLE);
  const fetchLocal = () => {

    fetch('http://127.0.0.1:8081',  {
      method: 'GET',
      redirect: 'follow',
      mode: 'no-cors',
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchLocal();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <div className="participants-container">
      <div>
        {data &&
          data.characters.results.map((character: Character) => {
            return <li key={character.id}>{character.name}</li>;
          })}
      </div>
    </div>
  );
}
