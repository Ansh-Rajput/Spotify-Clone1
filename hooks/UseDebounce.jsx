const { useState, useEffect } = require("react");

function UseDebounce(value,delay){
    const [debouncedValue,setDebouncedValue] = useState(value);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebouncedValue(value);
        },delay || 500);

        return () => {
            clearTimeout(timer);
        }
    },[value,delay]);

    return debouncedValue;
}

export default UseDebounce