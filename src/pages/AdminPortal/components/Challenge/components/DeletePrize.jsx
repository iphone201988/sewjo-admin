import React from 'react';
import { X } from 'lucide-react';

const DeleteConfirmationPopup = ({ onClose, onConfirm }) => {
    return (
        <div className="flex items-center justify-center bg-[rgba(0,0,0,0.48)] backdrop-blur-[3px] fixed overflow-auto top-0 left-0 w-full h-full z-[99999999] p-[20px] max-sm:h-auto">
            <div className="bg-white rounded-[12px] max-w-[400px] w-full px-6 py-6 shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
                    aria-label="Close"
                >
                    <X size={20} />
                </button>
                <h2 className="text-[20px] font-bold mb-4">Are you sure?</h2>
                <p className="text-[14px] text-[#666] mb-6">Do you really want to delete this prize? This action cannot be undone.</p>
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border border-gray-300 cursor-pointer rounded-[5px] text-[14px] hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-500 text-white rounded-[5px] text-[14px] cursor-pointer hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationPopup;
