export function Borda() {
    return (
        <div className="flex">
            <div className="border w-1/2"> Texto 01 </div>
            <div className="border w-1/2"> Texto 02 </div>
        </div>
    );
}

export default function Borda02() {
    return (
        <div className="m-8 border-2 border-gray-600">
            <Borda />

            <div className="flex">
                <div className="border rounded-full w-1/2"> Texto 01 </div>
                <div className="border rounded-full w-1/2"> Texto 02 </div>
            </div>
        </div>
    );
}
