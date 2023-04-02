import React, { useState, useRef } from 'react';
import c from 'classnames';
import emailjs from '@emailjs/browser';

import '../../App.css';
import {
    BsFillArrowUpRightCircleFill,
    BsFillCheckCircleFill
} from 'react-icons/bs';

const requiredFields = [
    { name: 'user_first_name', label: 'First Name' },
    { name: 'user_last_name', label: 'Last Name' },
    { name: 'email_address', label: 'Email Address' },
    { name: 'phone_number', label: 'Phone Number' },
    { name: 'message', label: 'Message' }
];

const FormInput = ({ name, type, label, errors, onChange, className }) => (
    <input
        onChange={onChange}
        name={name}
        type={type}
        className={c(`my-2 border-b-[1px] pb-3 ${className}`, {
            'border-b-[#b3b3b3]': errors[name],
            'border-b-black': !errors[name]
        })}
        placeholder={label}
    />
);

function ContactInfo() {
    const form = useRef();
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showMissingFieldsMessage, setShowMissingFieldsMessage] =
        useState(false);

    const messageSent = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setShowMissingFieldsMessage(true);
            return;
        } else {
            setShowMissingFieldsMessage(false);
        }

        emailjs
            .sendForm(
                'service_m80g8po',
                'template_f65y2en',
                form.current,
                'PI5SHpV0KCPvYoK41'
            )
            .then(
                (result) => {
                    messageSent();
                    console.log(result.text);
                    console.log('message sent');
                    e.target.reset();
                    setErrors({});
                    setIsValid(false);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const validateForm = () => {
        let formErrors = {};
        let valid = true;

        requiredFields.forEach(({ name, label }) => {
            if (!form.current[name].value) {
                formErrors[name] = `Please enter ${label.toLowerCase()}`;
                valid = false;
            }
        });

        setErrors(formErrors);
        setIsValid(valid);
        return valid;
    };

    const handleInputChange = () => {
        validateForm();
    };

    const handlePhoneNumberChange = (e) => {
        const rawValue = e.target.value.replace(/\D/g, '');
        let formattedValue = '';

        if (rawValue.length <= 3) {
            formattedValue = rawValue;
        } else if (rawValue.length <= 6) {
            formattedValue = `(${rawValue.slice(0, 3)}) ${rawValue.slice(3)}`;
        } else {
            formattedValue = `(${rawValue.slice(0, 3)}) ${rawValue.slice(
                3,
                6
            )}-${rawValue.slice(6, 10)}`;
        }

        e.target.value = formattedValue;
        validateForm();
    };

    return (
        <div
            className={c(
                'text-[#404040] mx-auto w-10/12 mt-12 md:w-8/12 grid grid-cols-1 lg:columns-40-60-lg lg:mt-40',
                success && 'blurred'
            )}>
            <div
                className={c(
                    'bg-white w-96 h-20 shadow-xl rounded-lg absolute left-1/2 top-1/2 border -translate-x-1/2 -translate-y-1/2 flex flex-wrap content-center justify-center duration-300',
                    success ? 'block' : 'hidden'
                )}>
                <p className="text-[22px] h-min">Successfully sent! </p>
                <div className="w-8 h-8 ml-6">
                    <BsFillCheckCircleFill className="fill-[green] inline w-full h-full" />
                </div>
            </div>
            <header>
                <h2 className="font-medium">EMAIL</h2>
                <p>fullstackjaden@gmail.com</p>
                <h2 className="mt-6 font-medium">PHONE</h2>
                <p>801-690-1869</p>
                <h2 className="mt-6 font-medium">RESUME</h2>
                <a
                    href="https://docs.google.com/document/d/1JdSuQ0_cHch6DIrJgT5rn2y2O_9ECBs2zPuc2gsoOkc/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full hover:text-[#0094FF] relative ease-in-out duration-200 text-black">
                    View my resume
                    <span>
                        <BsFillArrowUpRightCircleFill className="inline ml-3 -mt-[1px]" />
                    </span>
                </a>
            </header>
            <div className="w-full p-3 pb-6 mt-16 text-black bg-white lg:mt-0">
                <h1 className="text-[30px] w-11/12 mx-auto mt-3">Contact</h1>
                <p className="w-11/12 mx-auto mt-3">
                    Let's work together to build something great.
                </p>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="w-11/12 mx-auto mt-3">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {requiredFields.slice(0, 2).map(({ name, label }) => (
                            <FormInput
                                key={name}
                                name={name}
                                type="text"
                                label={label}
                                errors={errors}
                                onChange={handleInputChange}
                                className="w-full md:w-11/12"
                            />
                        ))}
                    </div>
                    {requiredFields.slice(2, 4).map(({ name, label }) => (
                        <FormInput
                            key={name}
                            name={name}
                            type={name === 'email_address' ? 'email' : 'tel'}
                            label={label}
                            errors={errors}
                            onChange={
                                name === 'phone_number'
                                    ? handlePhoneNumberChange
                                    : handleInputChange
                            }
                            className="w-full"
                        />
                    ))}
                    <textarea
                        onChange={handleInputChange}
                        name="message"
                        type="text"
                        className={c(
                            `my-2 border-b-[1px] pb-3 ${
                                errors.message
                                    ? 'border-b-[#b3b3b3]'
                                    : 'border-b-black'
                            } outline-none w-full`
                        )}
                        placeholder={'Message'}
                    />
                    <input
                        type="submit"
                        value="Get in touch"
                        className={`w-full py-2 text-white cursor-pointer duration-300 ${
                            isValid ? 'bg-black' : 'bg-[#636363]'
                        }`}
                    />
                    {showMissingFieldsMessage && (
                        <p className="mt-2 text-red-500">
                            Please fill out all fields
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ContactInfo;
