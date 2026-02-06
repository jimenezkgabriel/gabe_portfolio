import { useState } from 'react';
const MainInput = ({ hasStarted, setHasStarted, setShowAbout }) => {
    const [input, setInput] = useState('');
    // const [hasStarted, setHasStarted] = useState(false);

    const handleSubmit = (e) => {
        setInput('');
        e.preventDefault();
        if (input.trim().toLowerCase() === 'start') {
            setHasStarted(true);
        };

        if (hasStarted === false) {
            return;
        }

        if (input.trim().toLowerCase() === 'about') {
            setShowAbout(prev => !prev);
        };
        console.log(input);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            </form>
        </>
    )
};

export default MainInput;