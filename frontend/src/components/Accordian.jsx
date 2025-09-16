import React, { useState, useRef, useEffect } from 'react'

const Accordion = ({text , heading}) => {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)

  const [height, setHeight] = useState('0px')

  useEffect(() => {
    if (open) {
      setHeight(`${contentRef.current.scrollHeight}px`)
    } else {
      setHeight('0px')
    }
  }, [open])

  return (
    <div id="accordion-collapse" data-accordion="open">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-3 font-medium bg-blue-100 border-l-6 border-blue-800 rounded-md hover:cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span>{heading}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
              !open ? 'rotate-180' : 'rotate-0'
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-3 border border-b-1 border-gray-200">
          <p className="mb-2">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
