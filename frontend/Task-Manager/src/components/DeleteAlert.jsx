import React from 'react'

const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div>
        <p className="text-x">{content}</p>

        <div className="flex justify-end mt-6">
            <button
            type='button'
            onClick={onDelete}
            className='flex items-center justify-center gap-1.5 text-xs md:text-xs font-medium text-rose-500 whitespace-nowrap bg-rose-50 border border-rose-100 rounded-lg px-4 py-2 cursor-pointer'
            >
                Delete
            </button>
        </div>
    </div>
  )
}

export default DeleteAlert