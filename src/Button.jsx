export const Button = ({bname,fun}) => {
    return (
    <button  onClick={fun}  style={{
        padding:"8px",
        margin:"10px",
        background:"#4caf50",
        color:"white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
}}>{bname}</button>


    );
}