/* eslint-disable prettier/prettier */
import { gql, useQuery } from '@apollo/client';
import './gridstyles.scss';
import { DataGrid} from '@mui/x-data-grid';

const columns = [
    { field: 'name', headerName: 'name' },
    { field: 'id', headerName: 'ID', },
    { field: 'location', headerName: 'Location', width: 100 },
    { field: 'type', headerName: 'Type', width: 100 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'species', headerName: 'Species', width: 100 },
  ]


const PEOPLE_DATA = gql`
{
    characters {
        results {
            name
            id
        location{
            name
        }
    type
    gender
    status
    species
        }
    }
}
`;

export default function Datagrid() {
	const { loading, error, data } = useQuery(PEOPLE_DATA);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :</p>;

	return (
		<div className='datagrid-container'>
            <DataGrid
                rows={data.characters.results}
                columns={columns}
                checkboxSelection
            />
		</div>
	);
}
