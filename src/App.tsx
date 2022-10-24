import './styles/main.css'

export function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="font-bold text-5xl text-violet-500">Hello world</h1>

      <button className="bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-cyan-300">
        Enviar
      </button>
    </div>
  )
}
