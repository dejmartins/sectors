export default function Button({text}){
    return (
        <div>
            <button className="border border-gray-500 px-16 py-2 text-white bg-black my-3 rounded-3xl py-1 hover:bg-transparent hover:text-black hover:ease-in-out duration-300">
                {text}
            </button>
        </div>
    )
}