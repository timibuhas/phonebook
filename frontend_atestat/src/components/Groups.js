
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import DialogForm from "./DialogForm"
import GroupCard from './GroupCard.js'
import '../css/Groups.css'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'


function Groups() {

    const [groups, setGroups] = useState([]);
    const [update, setUpdate] = useState(1);
    const [formOpen, setFormOpen] = useState(false);
    const [tableOpen, setTableOpen] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [group, setGroup] = useState([]);

    useEffect(() => {
        fetch('http://localhost/backend_atestat/get_contacts.php')
            .then(response => response.json())
            .then(data => setContacts(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost/backend_atestat/get_groups.php')
            .then(response => response.json())
            .then(data => setGroups(data))
    }, [update])

    const addGroup = (e, group) => {

        e.preventDefault();
        setFormOpen(false);

        fetch('http://localhost/backend_atestat/add_group.php', {
            method: 'POST',
            body: JSON.stringify({ nume: group.nume })
        })
            .catch(() => alert('eroare'))

        setTimeout(() => { setUpdate(update + 1) }, 100)
    }

    const deleteGroup = (id) => {

        fetch('http://localhost/backend_atestat/delete_group.php', {
            method: 'POST',
            body: JSON.stringify({ id })
        })
            .catch(() => alert("Eroare!"))

        setTimeout(() => { setUpdate(update + 1) }, 100)
    }

    const deleteContact = (contact_id, group_id) => {

        fetch('http://localhost/backend_atestat/delete_contact_group.php', {
            method: 'POST',
            body: JSON.stringify({ contact_id, group_id })
        })
            .catch(() => alert("Eroare!"))

        setTimeout(() => { setUpdate(update + 1) }, 100)
    }

    const addContact = (contact_id) => {

        var group_id = group.id;

        fetch('http://localhost/backend_atestat/add_contact_group.php', {
            method: 'POST',
            body: JSON.stringify({ contact_id, group_id })
        })
            .catch(() => alert("Eroare!"))

        setTimeout(() => { setUpdate(update + 1) }, 100)
    }

    return (
        <div className='group-component'>
            <AiOutlineUsergroupAdd className='addGroup' onClick={() => setFormOpen(true)} />
            <div className='groups'>
                {groups.length ? groups.map(group => {
                    return (
                        <GroupCard group={group} onAddContact={(group) => { setTableOpen(true); setGroup(group) }} onDeleteGroup={deleteGroup} onDeleteContact={deleteContact} />
                    )
                }) : null}
            </div>

            {tableOpen && <DialogForm contacte={contacts.filter(x => !groups.filter(x => x.id === group.id)[0].contacte.some(y => x.id === y.id))} withSubmit={false} title='Adauga contact in grup' onHide={() => setTableOpen(false)} onAddContact={addContact} />}
            {formOpen && <DialogForm object={{}} withSubmit={true} title='Adauga grup' type='group-form' onHide={() => setFormOpen(false)} onSubmit={addGroup} />}
        </div>


    )
}
export default Groups;