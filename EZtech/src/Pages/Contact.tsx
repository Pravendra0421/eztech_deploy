import { FormEvent, useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
// import { FaAddressBook, FaFacebook, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import {FaPhone} from "react-icons/fa"
import contact from "../assets/contact_vector.png"

import axios from "axios";
import { toast } from "react-toast";
const ContactPage = () => {
    const [Values,setValues]=useState({name:"",email:"",message:""});
    const change =(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name,value}=e.target;
        setValues({...Values,[name]:value});
    }
    const submit = async (e:FormEvent) =>{
        e.preventDefault();
        if(Values.name == "" || Values.email=="" || Values.message==""){
          alert("All field are required");
        }
        else{
          await axios.post("http://localhost:3000/api/v1/contact",Values).then((res:any)=>{
            console.log(res);
            toast.success("Message sent Successfully");
          })
          setValues({name:"",email:"",message:""});
        }
      }
  return (
    <section className="bg-gray-100  text-white py-12 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Contact Info */}
        <div className="space-y-6 ">
          <h2 className="text-4xl font-bold text-gray-600 ">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            Feel free to contact us! Submit your queries here, and we will get
            back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-gray-600">
                <FaPhone/>
              <span className="text-lg text-gray-600">6262xxxxxxx</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
                <BiLogoGmail/>
              <span className="text-lg text-gray-600">consult.eztech@gmail.com </span>
            </div>
          <img src={contact} className="w-[150px] h-[150px] translate-x-20"/>
            {/* <div className="flex items-center text-gray-600 space-x-4">
                <FaAddressBook/>
              <span className="text-lg text-gray-600">
                Address 
              </span>
            </div> */}
          </div>
          {/* Social Icons */}
          {/* <div className="flex space-x-4 pt-6">
            <a
              href="#"
              className="bg-white text-blue-700 rounded-full p-3 transition hover:scale-110"
            >
              <i className="fab fa-facebook-f text-gray-600"></i>
              <FaFacebook/>
            </a>
            <a
              href="#"
              className="bg-white text-pink-500 rounded-full p-3 transition hover:scale-110"
            >
              <i className="fab fa-instagram text-gray-600"></i>
              <FaInstagram/>
            </a>
            <a
              href="#"
              className="bg-white text-black rounded-full p-3 transition hover:scale-110"
            >
              <i className="fab fa-x-twitter text-gray-600"></i>
              <FaTwitter/>
            </a>
            <a
              href="#"
              className="bg-white text-blue-600 rounded-full p-3 transition hover:scale-110"
            >
              <i className="fab fa-linkedin-in text-gray-600"></i>
              <FaLinkedinIn/>
            </a>
            <a
              href="#"
              className="bg-white text-red-600 rounded-full p-3 transition hover:scale-110"
            >
              <i className="fab fa-youtube text-gray-600"></i>
              <FaYoutube/>
            </a>
          </div> */}
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6">Send Us Message</h3>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={Values.name}
                onChange={change}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={Values.email}
                onChange={change}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                name="message"
                value={Values.message}
                onChange={change}
                required
                rows={4}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={submit}
              className="w-full bg-[#6c63ff] text-white rounded-md py-3 text-lg hover:bg-[#5752e8] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
