import React, { useState } from 'react';
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

function Input(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const amount = event.target.amount.value;
        const etc = event.target.etc.value;
        // props.onSubmit(title, amount, etc);
        props.onSubmit({ title, amount, etc }); // JSON 배열로 전달
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="항목" />
            <input type="text" name="amount" placeholder="금액" />
            <input type="text" name="etc" placeholder="비고" />
            <button type="submit">Submit</button>
        </form>
    );
}


export default function AccountBook() {
    const [data, setData] = useState([
        { id: 1, title: '통신비', amount: 10000, etc: '...' },
        { id: 2, title: '교통비', amount: 20000, etc: '...' },
    ]);

    const submitHandler = (newContent) => {
        // const newData = {
        //     id: Math.random(),
        //     title: title,
        //     amount: amount,
        //     etc: etc
        // };
        const newData = { ...newContent, id: Math.random() }
        setData([...data, newData])
    };

    return (
        <div>
            <h1>가계부 App</h1>
            <Table data={data}></Table>
            <Input onSubmit={submitHandler}></Input>
        </div>
    );
}
