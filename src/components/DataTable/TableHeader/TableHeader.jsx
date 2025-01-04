import React from 'react'
import './TableHeader.css'

function TableHeader({ titlesList = [] }) {

    return (
        <>
            {titlesList?.map(title => (
                <div key={title} className='table-header cell'>
                    {title}
                </div>)
            )}
        </>
    )
}

export default TableHeader