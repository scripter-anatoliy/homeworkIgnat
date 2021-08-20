import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string | null>(null); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)// need to fix any
        setName(e.currentTarget.value); // need to fix
    };

    const addUser = () => {
        const trimmedName = name.trim()
        if (trimmedName) {
            addUserCallback(trimmedName)
        } else {
            setError('Incorrect value!' +
                'Please enter a name!');
        }
        setName('');
        // need to fix
    };

    const totalUsers = users.length; // need to fix выводим длинну массива.

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
