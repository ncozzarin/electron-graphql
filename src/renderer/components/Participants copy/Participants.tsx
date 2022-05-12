/* eslint-disable promise/always-return */ /* eslint-disable func-names */ /* eslint-disable promise/catch-or-return */ /* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import './styles.scss';
import axios from 'axios';

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

  axios({
    method: 'get',
    url: 'http://127.0.0.1:8081',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': '*',
    }
  })
    .then(function (response) {
      console.log({response})
    })
    .catch(function (err) {
      console.log({err});
    });

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
