import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'

export default function Customers() {
    const [customers, setCustomers] = useState([]);

    const getCustomers = async function() {
        const customerRes = await axios.get("http://localhost:5000/customer/");
        setCustomers(customerRes.data);

    }

    useEffect(() => {
        getCustomers();
    }, []);
    
    return (
        <div>
            <CustomerForm getCustomers={getCustomers}/>
            <CustomerList customers={customers}/>
        </div>
    )
}
