import { useLocation } from 'react-router-dom';

export const Entry = () => 
{
    const { state } = useLocation();
    const { entry } = state;

    const onFormSubmit = (event) =>
    {
        event.preventDefault();
    }

    return (
        <>
            <h1>Entry</h1>
            <p>Date</p>

            <ul>
                {
                    entry.map((field, i) =>
                    {
                        return <li key={ i }>
                            <p>{ field.name }</p>
                            <p>{ field.content.toString() }</p>
                        </li>
                    })
                }
            </ul>

            <form onSubmit={onFormSubmit}>
                <button>Delete</button>
            </form>
        </>
    )
}