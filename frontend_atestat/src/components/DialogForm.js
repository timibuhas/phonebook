import '../css/DialogForm.css'
import { useState } from 'react'
import Table from './Table.js'

function AddForm(props) {

    const [object, setObject] = useState(props.object)

    return (
        <div className="form-back">
            <form className="form" onSubmit={(e) => props.onSubmit(e, object)}>
                <div className='top'>
                    <h2 className='form-title'>{props.title}</h2>
                    <button className="btn-close" onClick={props.onHide}>+</button>
                </div>
                <div className="inputs">
                    {props.type === 'contact-form' ?
                        <div>
                            <p>Nume: <input type="text" value={object.nume || ''} onChange={(e) => setObject({ ...object, nume: e.target.value })} /></p>
                            <p>Prenume: <input type="text" value={object.prenume || ''} onChange={(e) => setObject({ ...object, prenume: e.target.value })} /></p>
                            <p>Numar telefon: <input type="text" value={object.nr_telefon || ''} onChange={(e) => setObject({ ...object, nr_telefon: e.target.value })} /></p>
                            <p>Adresa: <input type="text" value={object.adresa || ''} onChange={(e) => setObject({ ...object, adresa: e.target.value })} /></p>
                        </div>
                        : props.type === 'group-form' ?
                            <div>
                                <p>Nume: <input type="text" value={object.nume || ''} onChange={(e) => setObject({ ...object, nume: e.target.value })} /></p>
                            </div>
                            :
                            <Table contacts={props.contacte} action_type='add' onAddContact={props.onAddContact} />
                    }

                    {props.withSubmit ? <input type="submit" value="Submit"></input> : null}

                </div>

            </form>
        </div>
    )


}
export default AddForm;