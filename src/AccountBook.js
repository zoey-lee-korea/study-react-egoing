import React from 'react';
import './AccountBook.css';

function Table({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>항목</th>
                    <th>금액</th>
                    <th>비고</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.amount}</td>
                        <td>{item.etc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function Input() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // 폼 제출 로직
        alert('Form submitted');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Text Field 1" />
            <input type="text" placeholder="Text Field 2" />
            <input type="text" placeholder="Text Field 3" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default function AccountBook() {
    const data = [
        { id: 1, title: '통신비', amount: 10000, etc: '...' },
        { id: 2, title: '교통비', amount: 20000, etc: '...' },
    ];
    return (
        <div>
            <h1>가계부 App</h1>
            <Table data={data}></Table>
            <Input></Input>
        </div>
    );
}
