import JournalItem from '../journal_item'
import data from '../../data'

import './Journal.css'

export default function Journal() {
    return (
        <div className="journal">
            {data.map(item => <JournalItem key={item.title} {...item} />)}
        </div>
    )
}