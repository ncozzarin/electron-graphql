/* eslint-disable prettier/prettier */
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

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :</p>;
	return (
		<div className='participants-container'>
				<div>
					{data &&
						data.characters.results.map((character: Character) => {
							return <li key={character.id}>{character.name}</li>;
						})}
				</div>
		</div>
	);
}
