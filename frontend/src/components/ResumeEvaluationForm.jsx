import { useState } from 'react'

const ResumeEvaluationForm = () => {
  const [totalPrice, setTotalPrice] = useState(199)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    linkedIn: '',
    resume: null,
    review_naukri: false
  })

  const handleFormUpdate = e => {
    const { id, type, value, checked, files } = e.target

    if (id === 'mobile') {
      if (value.length > 10) return
      if (isNaN(Number(value))) return
      setFormData(prev => ({ ...prev, mobile: value }))
    } else if (id === 'resume') {
      const file = files[0]
      if (file) {
        const allowedTypes = [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ]
        if (!allowedTypes.includes(file.type)) {
          alert('Only .doc, .docx, and .pdf files are allowed.')
          return
        }
        setFormData(prev => ({ ...prev, resume: file }))
      }
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [id]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [id]: value }))
    }
  }

  return (
    <div className='w-full border-2 border-dashed border-gray-400 p-5'>
      <div className='text-xl font-semibold text-center mx-auto w-4/5 leading-5'>
        Analyse your current profile and get feedback to make it better.
      </div>
      <div className='w-1/3 mx-auto my-2'>
        <img src='/images/resumes.png' alt='...' className='w-2/5 mx-auto' />
      </div>

      <div>
        <p className='w-full my-2'>
          <input
            type='text'
            id='name'
            className='w-full border border-gray-400 p-1 focus:outline-none'
            placeholder='Name*'
            value={formData.name}
            onChange={handleFormUpdate}
          />
        </p>
        <p className='w-full my-2'>
          <input
            type='text'
            id='mobile'
            className='w-full border border-gray-400 p-1 focus:outline-none'
            placeholder='Mobile*'
            value={formData.mobile}
            onChange={handleFormUpdate}
          />
        </p>
        <p className='w-full my-2'>
          <input
            type='email'
            id='email'
            className='w-full border border-gray-400 p-1 focus:outline-none'
            placeholder='Email*'
            value={formData.email}
            onChange={handleFormUpdate}
          />
        </p>
        <p className='w-full my-2'>
          <input
            type='text'
            id='linkedIn'
            className='w-full border border-gray-400 p-1 focus:outline-none'
            placeholder='LinkedIn Id'
            value={formData.linkedIn}
            onChange={handleFormUpdate}
          />
        </p>
      </div>

      <div className='text-sm bg-gray-200 p-2'>
        Upload Resume*{' '}
        <input
          type='file'
          name='resume'
          id='resume'
          accept='.doc,.docx,.pdf'
          onChange={handleFormUpdate}
        />
      </div>
      <p className='text-sm'>
        (1 file only. Allowed file formats are .doc, .docx, .pdf)
      </p>

      {formData.resume && (
        <p className='text-green-600 text-sm'>
          Selected File: {formData.resume.name}
        </p>
      )}

      <div className='flex items-center bg-blue-200 p-2 my-2'>
        <input
          type='checkbox'
          name='review_naukri'
          id='review_naukri'
          onChange={handleFormUpdate}
        />
        <label htmlFor='review_naukri' className='mx-1 text-sm md:text-lg'>
          I wish to review my Naukri profile for Rs.99{' '}
          <small className='text-red-400'>Know More</small>
        </label>
      </div>

      <div className='w-full p-2 text-center text-white text-xl uppercase font-semibold rounded-full bg-red-500'>
        buy @{totalPrice + (formData.review_naukri ? 99 : 0)}
      </div>
      <p className='text-center font-semibold mt-1'>You will get a detailed report within 2 business days</p>
    </div>
  )
}

export default ResumeEvaluationForm
