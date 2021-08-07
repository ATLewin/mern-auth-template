import React from 'react'

export default function CustomerList({customers}) {
    const renderCustomers = function () {
        return customers.map((customer, i) => {
            return <li key={i}>{customer.name}</li>
        })
    }
    
    return (
        <div>
            <ul>
                {renderCustomers()}
            </ul>
        </div>
    )
}
