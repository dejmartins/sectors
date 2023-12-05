export default function Button({text}){
    return (
        <div>
            <button className="border border-gray-500 px-16 my-3 rounded-3xl py-1 hover:bg-black hover:text-white hover:ease-in-out duration-300">
                {text}
            </button>
        </div>
    )
}