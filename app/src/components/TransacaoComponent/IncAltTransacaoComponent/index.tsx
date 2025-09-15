interface IncAltTransacaoProps {
  open: boolean,
  onClose: () => void 
}

export default function IncAltTransacaoComponent({ open, onClose }: IncAltTransacaoProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 bg-opacity-50">
      <div className="bg-white w-96 rounded-2xl shadow-lg p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Título do Popup</h2>
        <p className="text-gray-600 mb-6">
          Esse popup está em um componente separado.
        </p>

        <div className="flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}