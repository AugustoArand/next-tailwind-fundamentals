export function Tamanho() {
  return (
    <div className="flex">
        <div className="bg-green-200 w-1/2"> Lado 01 </div>
        <div className="bg-green-400 w-1/2 ml-1"> Lado 02 </div>
    </div>
    
  );
}


export default function TamanhoPage() {
  return (
    <div>
      <Tamanho />
      <div>
        <div className="bg-amber-400 h-screen"> 100 Altura </div>
        <div className="bg-purple-300 w-screen"> 100% screen </div>
      </div>
    </div>
  );
}