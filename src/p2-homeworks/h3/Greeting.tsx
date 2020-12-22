import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = error ? s.error : name; // need to fix with (?:)

    return (
        <div className={s.main}>
            <input placeholder="Name" value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={s.errorText}> {error} </span>
            <button className={s.button} onClick={addUser}>add</button>
            <span className={s.span}>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
