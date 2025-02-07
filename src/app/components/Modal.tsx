import React from "react";

interface ModalProps {
  isOpen: boolean; // Determina se o modal está aberto ou fechado
  onClose: () => void; // Função chamada para fechar o modal
  children: React.ReactNode; // Pode ser qualquer conteúdo que será renderizado dentro do modal
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
