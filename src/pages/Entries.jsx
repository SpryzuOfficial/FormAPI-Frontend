import { useLocation, useNavigate } from 'react-router-dom';

export const Entries = () => 
{
    const navigate = useNavigate();

    const { state } = useLocation();
    let { entries, formName } = state;

    return (
        <>
            <h1>{ formName }</h1>
            <p>Entries</p>
            <ul>
                {
                    entries.map((entry, i) =>
                    {
                        return <li key={ i } onClick={() => navigate('/entry', { state: { entry } })}>
                            <p>{ entry[0].content }</p>
                            <button>Delete</button>
                        </li>
                    })
                }
            </ul>
        </>
    )
}