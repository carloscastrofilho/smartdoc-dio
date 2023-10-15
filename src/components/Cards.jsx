// eslint-disable-next-line react/prop-types
export function Card({title, onClick}){

    function handleClick(){
        if (onClick) onClick()
    }

    return (
        <div className="p=4 w-32 h-20 flex justify-center items-center text-center border-2 border-amber-400
        cursor-pointer font-bold hover:bg-amber-400 hover:text-white rounded-lg shadow-lg duration-700
        text-amber-50" onClick={handleClick}
        >
            <h3 className="card-title">{title}</h3>
        </div>
    )
}