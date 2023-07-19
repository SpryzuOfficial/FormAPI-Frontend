import { useNavigate } from 'react-router-dom';
import { useForm } from './../hooks/useForm';

const initialForm = {
    token: ''
};

const formTypes = [{ type: 'string' }];

export const Token = () =>
{
    const { name, token, onInputChange } = useForm(initialForm);
    const navigate = useNavigate();

    const onFieldChange = ({ target }) =>
    {
        const { name, value } = target;

        if(name.substring(1) === 'type')
        {
            formTypes[Number.parseInt(name[0])].type = value;
        }
        else
        {
            formTypes[Number.parseInt(name[0])].name = value;
        }
        console.log(formTypes);
    }

    const existingFormSubmit = async(event) =>
    {
        event.preventDefault();

        const formBody = { token };

        fetch('http://localhost:8080/form/entries', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(formBody)
        })
        .then(response => response.json().then(json =>
        {
            if(json.ok)
            {
                navigate('/entries', { state: { entries: json.entries, formName: json.form.name } });
            }
        }));
    }

    const createFormSubmit = (event) =>
    {
        event.preventDefault();


    }

    return (
        <>
            <form onSubmit={existingFormSubmit}>
                <h2>Check existing form</h2>
                
                <p>Form Token</p>
                <input  autoComplete="off" type="text" name="token" value={ token } onChange={ onInputChange } />
                
                <button type="submit">Submit</button>
            </form>

            <form onSubmit={createFormSubmit}>
                <h2>Create form</h2>
                
                <p>Form Name</p>
                <input  autoComplete="off" type="text" name="name" value={ name } onChange={ onInputChange } />
                
                <ul>
                    <li>
                        <p>Field name</p>
                        <input type="text" name="0name" onChange={ onFieldChange } />
                    </li>

                    <li>
                        <p>Field type</p>
                        <select name="0type" id="fieldType" onChange={ onFieldChange }>
                            <option value="string"> Text </option>
                            <option value="number"> Number </option>
                            <option value="boolean"> Checkbox </option>
                        </select>
                    </li>
                </ul>

                <button type="button">Add field</button>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}