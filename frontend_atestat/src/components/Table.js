import '../css/Table.css'
import { useState } from 'react'
import { HiMinus } from 'react-icons/hi'
import { RiEditLine } from 'react-icons/ri'
import { BsPlusLg } from 'react-icons/bs'

function Table(props) {

    const [searchText, setSearchText] = useState('');

    return (
        <div>
            <input className='searchbar' type="text" placeholder="Cauta contacte..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <table>
                <tr>
                    <th>Nume</th>
                    <th>Prenume</th>
                    <th>Numar Telefon</th>
                    <th>Adresa</th>
                    <th>Actiune</th>
                </tr>
                {props.contacts.length ?
                    props.contacts.filter(contact => {
                        if (searchText === "")
                            return contact;
                        else {
                            for (const property in contact) {
                                if (`${contact[property]}`.toLowerCase().includes(searchText.toLowerCase())) {
                                    return contact;
                                }
                            }
                        }
                    }).map(contact => {
                        return (
                            <tr>
                                <td>{contact.nume}</td>
                                <td>{contact.prenume}</td>
                                <td>{contact.nr_telefon}</td>
                                <td>{contact.adresa}</td>
                                <td>
                                    {
                                        props.action_type === 'add' ? <BsPlusLg alt='' className='add-btn' onClick={() => props.onAddContact(contact.id)} /> :
                                            props.action_type === 'delete' ? <HiMinus className='delete-btn' onClick={() => props.onDeleteContact(contact.id)} /> :
                                                <div>
                                                    <HiMinus className='delete-btn' onClick={() => props.onDeleteContact(contact.id)} />
                                                    <RiEditLine className='edit-btn' onClick={() => props.onEditContact(contact)} />
                                                </div>
                                    }
                                </td>
                            </tr>)
                    }) : null}
            </table>
        </div>
    )
}
export default Table;