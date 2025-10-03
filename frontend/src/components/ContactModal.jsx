import { useEffect, useState } from 'react'

export default function ContactModal () {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className='bg-orange-500 rounded-l-full px-3 py-1 shadow hover:bg-blue-950 transition-all cursor-pointer fixed right-0 bottom-10 z-50'
      >
        <img src='/images/call2.png' alt='...' width={30} />
      </button>
    )
  }

  return (
    <div className='flex items-center justify-center min-h-screen absolute z-51 w-full h-full bg-black/30'>
      {isOpen && (
        <div
          className='fixed inset-0 flex items-center justify-center'
          onClick={() => setIsOpen(false)}
        >
          {/* Modal */}
          <div
            onClick={e => e.stopPropagation()} // prevent inside click from closing
            className='w-4/5 md:w-2/5 bg-white shadow-lg relative transform transition-all duration-500 ease-out translate-y-0 opacity-100 animate-slideDown'
          >
            <div className='w-full'>
              <header className='w-full flex items-center h-16'>
                <div className='bg-blue-950 md:text-3xl font-semibold text-white w-full p-3 h-full'>
                  Request a call back
                </div>
                <div
                  className='bg-blue-900 p-4 h-full cursor-pointer'
                  onClick={() => setIsOpen(false)}
                >
                  <img src='/images/cross_white.png' alt='...' width={30} />
                </div>
              </header>
              <form className='w-full p-3'>
                <label for='name'>Name*</label>
                <br />
                <input
                  type='text'
                  id='name'
                  className='my-2 w-full border-1 border-gray-300 h-8 focus:outline-none p-2'
                  required
                />
                <label for='mobile'>Mobile*</label>
                <br />
                <input
                  type='text'
                  id='mobile'
                  className='my-2 w-full border-1 border-gray-300 h-8 focus:outline-none p-2'
                  required
                />
                <label for='email'>Email*</label>
                <br />
                <input
                  type='text'
                  id='email'
                  className='my-2 w-full border-1 border-gray-300 h-8 focus:outline-none p-2'
                  required
                />
                <label for='query'>Write your query here</label>
                <br />
                <textarea
                  id='query'
                  className='mt-2 w-full border-1 border-gray-300 h-8 focus:outline-none p-2 min-h-20 max-h-24'
                  required
                />
                <p className='mb-2 mt-0'>Eg: I want to avail Resume Building service from Whiteslips.</p>
                <label for='captcha' className='pr-3'>Captcha</label>
                <input
                  type='text'
                  id='captcha'
                  className='my-2 border-1 border-gray-300 h-8 focus:outline-none p-2'
                  required
                />
                <button type='submit' className='w-full cursor-pointer bg-orange-400 uppercase text-white my-3 p-2 font-semibold'>submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
