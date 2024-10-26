
const MyButton = ({isActive, toggle}) => {
    return (
        <div>
            <button onClick={()=>toggle()} className={`${isActive ? 'active' : 'my-button'}`}>Click me</button>
        </div>
    );
};

export default MyButton;