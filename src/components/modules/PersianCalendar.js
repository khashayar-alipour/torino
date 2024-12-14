"use client"

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'jalaali-moment';

const PersianCalendar = () => {
    const [date, setDate] = useState(new Date());

    const handleChange = (date) => {
        setDate(date);
    };

    const formatDate = (date) => {
        return moment(date).format('jYYYY/jM/jD'); // تبدیل به تاریخ شمسی
    };

    return (
        <div>
            <h2>تقویم فارسی</h2>
            <DatePicker
                selected={date}
                onChange={handleChange}
                dateFormat="yyyy/MM/dd"
                placeholderText="تاریخ را انتخاب کنید"
            />
            <p>تاریخ انتخاب شده: {formatDate(date)}</p>
        </div>
    );
};

export default PersianCalendar;