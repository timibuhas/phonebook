import '../css/Contacts.css'
import { useState, useEffect } from 'react'
import Table from './Table.js'
import DialogForm from './DialogForm.js'
import { BsTelephonePlus } from 'react-icons/bs'

function Contacts() {

    const [contacts, setContacts] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [contact, setContact] = useState({})
    const [update, setUpdate] = useState(1);
    const [formType, setFormType] = useState('');
    const [formTitle, setFormTile] = useState('');

    useEffect(() => {
        fetch('http://localhost/backend_atestat/get_contacts.php')
            .then(response => response.json())
            .then(data => setContacts(data))
    }, [update])


    const addContact = (contact) => {

        setIsOpen(false);

        fetch('http://localhost/backend_atestat/add_contact.php', {
            method: 'POST',
            body: JSON.stringify(contact)
        })
            .catch(() => alert("Eroare!"))

        setTimeout(() => { setUpdate(update + 1) }, 100)
    }


    const editContact = (contact) => {

        setIsOpen(false);

        fetch('http://localhost/backend_atestat/edit_contact.php', {
            method: 'POST',
            body: JSON.stringify(contact)
        })
            .catch(() => alert("Eroare!"))

        setTimeout(() => { setUpdate(update + 1) }, 100)
    }

    const deleteContact = (id) => {

        fetch('http://localhost/backend_atestat/delete_contact.php', {
            method: 'POST',
            body: JSON.stringify({ id })
        })
            .catch(() => alert("Eroare!"))

        setTimeout(() => { setUpdate(update + 1) }, 100)
    }


    const handleSubmit = (e, contact) => {

        e.preventDefault();
        switch (formType) {
            case 'add': addContact(contact); break;
            case 'edit': editContact(contact); break;
            default: return null;
        }
    }

    const showAddForm = () => {

        setFormType('add');
        setFormTile('Adauga Contact');
        setContact({});
        setIsOpen(true);

    }

    const showEditForm = (contact) => {

        setFormType('edit');
        setFormTile('Editeaza Contact');
        setContact(contact);
        setIsOpen(true);

    }

    return (
        <div className='contacts-component'>

            <BsTelephonePlus className="addContact" onClick={showAddForm} />
            <Table contacts={contacts} action_type='edit-delete' onEditContact={showEditForm} onDeleteContact={deleteContact} />
            {isOpen && <DialogForm object={contact} title={formTitle} withSubmit={true} type='contact-form' onHide={() => setIsOpen(false)} onSubmit={handleSubmit} />}

        </div>
    );
}
export default Contacts