


import React,{useEffect, useState} from 'react'
import NotesCard from './NotesCard';


const ReferralForm = () => {

     const [formData, setFormData] = useState({ url:"",name: "", email: "" ,mobile:"",linkedInId:"",companyName:"",date:"",jobLocation:"",services:"",promocode:""});
     const [location,setLocation]=useState([])
       const [fileName, setFileName] = useState("No file chosen");


     const functions = [
  "IT-Software/Software Services",
  "Accounting/Finance",
  "Accounting / Tax / Company Secretary / Audit",
  "Accounts / Finance / Tax / CS / Audit",
  "IT Software – Application Programming / Maintenance",
  "ITES / BPO / KPO / Customer Service / Operations",
  "Banking / Insurance",
  "Agent",
  "Analytics & Business Intelligence",
  "Content / Journalism",
  "Content / Journalism",
  "Corporate Planning / Consulting",
  "Engineering Design / R&D",
  "Export / Import / Merchandising",
  "Fashion / Garments / Merchandising",
  "Guards / Security Services",
  "Hotels / Restaurants",
  "HR / Administration / IR",
  "IT Software – Client Server",
  "IT Software – Mainframe",
  "IT Software – Middleware",
  "IT Software – Other",
  "IT Software – System Programming",
  "IT Software – DBA / Datawarehousing",
  "IT Software – Embedded / EDA / VLSI / ASIC / Chip Des.",
  "IT Software – ERP / CRM",
  "IT Software – Network Administration / Security",
  "IT Software – QA & Testing",
  "IT Software – Systems / EDP / MIS",
  "IT – Hardware / Telecom / Technical Staff / Support",
  "Legal",
  "Marketing / Advertising / MR / PR",
  "Packaging",
  "Pharma / Biotech / Healthcare / Medical / R&D",
  "Purchase / Logistics / Supply Chain",
  "Sales / BD",
  "Secretary / Front Office / Data Entry"
];

const services = [
  "Resume",
  "LinkedIn",
  "Resume + LinkedIn",
  "Others",
  "None"
];


 

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
    'https://parseapi.back4app.com/classes/india_cities_database?limit=20&order=-population&keys=ascii_name,population',
    {
      headers: {
        'X-Parse-Application-Id': 'k9wzhXDJckHtuuKmMEm8hceXoCZMvxN4CTijZOjn', // This is the fake app's application id
        'X-Parse-Master-Key': 'EpjKI6bUlgkIbOAAUaDKDFj6x2C3AnsZZJqoa4ak', // This is the fake app's readonly master key
      }
    }
  );
  const data = await response.json();
      for (let index = 0; index < data.results.length; index++) {
        const value = data.results[index].ascii_name
        setLocation(prev=>[...prev,value])
      }
      
    };

    fetchData();
  }, []);

  
  
  

  return (
    <div className='w-full md:p-16 flex justify-center gap-10 flex-wrap'>
        <form  className='h-auto w-auto md:w-1/2 bg-gray-100 p-4 block'>
          <h5 className='font-semiBold text-blue-900 text-center text-xl pt-2 pb-4'>Employee Referral Form</h5>
          <label htmlFor="" className='block text-sm'>*Mandatory Fields</label>
          <input type="text" name="url" id="" placeholder='LinkedIn URL of Job Application in the Desired Company' className='border border-gray-200 bg-white block w-full mb-3 p-3' onChange={handleChange} />
          <input type="text" name="name" id="" placeholder='Name*' className='border border-gray-200 bg-white block w-full mb-3 p-3' onChange={handleChange} />
          <input type="text" name="email" id="" placeholder='Email*' className='border border-gray-200 bg-white block w-full mb-3 p-3' onChange={handleChange} />
          <input type="number" name="mobile" id="" placeholder='Contact number*' className='border border-gray-200 bg-white block w-full mb-3 p-3'onChange={handleChange} />
          <input type="text" name="linkedInId" id="" placeholder='LinkedIn Id*' className='border border-gray-200 bg-white block w-full mb-3 p-3'onChange={handleChange} />
          <input type="text" name="comapnyName" id="" placeholder='Name of the Job Posting company*' className='border border-gray-200 bg-white block w-full mb-3 p-3'onChange={handleChange} />
          <label htmlFor="" className='text-gray-500 text-sm mb-1'>Job Posting Date*</label>
          <input type="date" name="date" id="" placeholder='Job Posting Date*' className='border border-gray-200 bg-white block w-full mb-3 p-3'onChange={handleChange} />
          <select name="jobLocation" id="" className='w-full bg-white p-3 mb-3' onChange={handleChange}>
            <option value="" disabled selected hidden>Job Location*</option>
            {
                location.map((value,index)=>(
                    <option key={index} value={value}>{value}</option>
                ))
            }
          </select>
          <select name="functions" id="" className='w-full bg-white p-3 mb-3' onChange={handleChange}>
            <option value="" disabled selected hidden>Function*</option>
            {
                functions.map((value,index)=>(
                    <option key={index} value={value}>{value}</option>
                ))
            }
          </select>
          <select name="services" id="" className='w-full bg-white p-3 mb-3' onChange={handleChange}>
            <option value="" disabled selected hidden>Services*</option>
            {
                services.map((value,index)=>(
                    <option key={index} value={value}>{value}</option>
                ))
            }
          </select>
          <input type="text" name="promoCode" id="" placeholder='Promo Code' className='border border-gray-200 bg-white block w-full mb-3 p-3'onChange={handleChange} />
           <input type="file" name="" id=""  className='border border-gray-200 bg-white block w-full mb-3 p-3' onChange={handleFileChange}/>
          <button type='submit' className='bg-red-600 hover:bg-blue-500 text-white font-medium p-2 pr-4 pl-4 rounded-4xl'>SUBMIT</button>
        </form>
       <div className='items-start'>
        <NotesCard/>
       </div>
    </div>
  )
}

export default ReferralForm