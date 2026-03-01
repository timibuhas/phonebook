
import { AiOutlineDelete } from 'react-icons/ai'
import { AiOutlineUserAdd } from 'react-icons/ai'
import Table from "./Table.js"
import '../css/Groups.css'
import { useState } from 'react'

function GroupCard(props) {

    const [visible, setVisible] = useState(false);

    return (
        <div className='group'>
            <div className='group-header' >
                <h1 onClick={() => setVisible(!visible)} >{props.group.nume}</h1>
                <div>
                    <AiOutlineUserAdd className='addContactGroup' onClick={() => props.onAddContact(props.group)} />
                    <AiOutlineDelete className='deleteGroup' onClick={() => props.onDeleteGroup(props.group.id)} />
                </div>
            </div>
            {visible && <Table contacts={props.group.contacte} action_type='delete' onDeleteContact={(contact_id) => props.onDeleteContact(contact_id, props.group.id)} />}
        </div >
    )
}
export default GroupCard;