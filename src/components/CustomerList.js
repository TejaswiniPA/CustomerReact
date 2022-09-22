import axios from 'axios';
import React, { useState, useEffect } from 'react';

const url = 'http://localhost:8001/api/customers';
// const url = 'http://localhost:3000/shipper-list.json';

const CustomerList = () => {
    let [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios
            .get(url, { headers: { Accept: 'application/json' } })
            .then((resp) => resp.data) // response body is accessed via resp.data
            .then((data) => data.customerList)
            .then(setCustomers);
    }, []);

    return (
        <>
            <h3>Here is the list of all Customers</h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>City</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((cu) => (
                        <tr key={cu.customerId}>
                            <td>{cu.customerId}</td>
                            <td>{cu.companyName}</td>
                            <td>{cu.contactName}</td>
                            <td>{cu.city}</td>
                            <td>{cu.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default CustomerList;