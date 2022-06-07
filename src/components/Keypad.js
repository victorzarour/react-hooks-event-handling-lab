// Code Keypad Component Here
function Keypad(){
    function changeEvent(){
        console.log ('Entering password...')
    }

    return (
        <input onChange={changeEvent} type="password" />
    )
}

export default Keypad