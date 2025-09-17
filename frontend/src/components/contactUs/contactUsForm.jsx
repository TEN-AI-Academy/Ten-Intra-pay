
import React,{useState} from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsForm = () => {

     const [formData, setFormData] = useState({ name: "", email: "" ,mobile:"",message:""});
     const [verified, setVerified] = useState(false);

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };
  

  return (
    <div className='p-12 md:p-16 flex justify-center items-center'>
        <form  className='h-auto w-auto md:w-100 bg-gray-300 p-6 block'>
          <h5 className='font-light text-xl pt-4 pb-4'>We'll get in touch with you</h5>
          <label htmlFor="" className='block text-sm'>*Mandatory Fields</label>
          <input type="text" name="name" id="" placeholder='Name*' className='border border-gray-200 bg-white block w-full mb-3 p-3' onChange={handleChange} />
          <input type="text" name="email" id="" placeholder='Email*' className='border border-gray-200 bg-white block w-full mb-3 p-3' onChange={handleChange} />
          <input type="number" name="mobile" id="" placeholder='Mobile*' className='border border-gray-200 bg-white block w-full mb-3 p-3'onChange={handleChange} />
          <textarea name="message" id="" placeholder='Message' className='bg-white w-full block mb-3 p-2' onChange={handleChange}></textarea>
          <ReCAPTCHA
           sitekey="6Ldmg8wrAAAAAHQSfd7uiF9vEdSb4xqtvgXb6WSc"
           onChange={() => setVerified(true)}/>
          <button className='bg-red-600 hover:bg-blue-500 text-white font-medium p-2 pr-4 pl-4 rounded-4xl'>CALL ME BACK</button>
        </form>
    </div>
  )
}

export default ContactUsForm