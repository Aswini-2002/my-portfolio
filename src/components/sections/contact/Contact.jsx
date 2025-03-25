import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
    Mail,
    Phone,
    FileText,
    Send,
    MapPin,
    User,
    MessageSquare,
    CheckCircle,
    Loader2
} from 'lucide-react';

const Contact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const info = [
        {
            icon: Mail,
            title: "Email",
            links: "2002aswinirath@gmail.com"
        },
        {
            icon: Phone,
            title: "Phone number",
            links: "+91-6370706037"
        },
        {
            icon: FileText,
            title: "Resume",
            links: "View my resume here",
            link: 'https://drive.google.com/file/d/1XTNl8YvyWrBaLPFE-ySLmd676JKD0uO9/view?usp=drive_link',
        }
    ];

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!name) newErrors.name = "Full name is required";

        // Phone number validation (example: 10 digits)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phone.match(phoneRegex)) newErrors.phone = "Enter a valid 10-digit phone number";

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailRegex)) newErrors.email = "Enter a valid email address";

        // Message validation
        if (!message) newErrors.message = "Message is required";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset previous submit status
        setSubmitStatus("");
        setIsLoading(true);

        if (validateForm()) {
            // EmailJS configuration
            const serviceId = 'service_bm9goxa';
            const templateIdContact = 'template_zu73tvs';
            const templateIdReply = 'template_j8ytkvd'; // Add your reply template ID here
            const publicKey = 'mBznRq9QCDoYPursH';

            // Prepare template parameters for contact submission
            const contactTemplateParams = {
                from_name: name,
                from_email: email,
                phone: phone,
                message: message
            };

            // Prepare template parameters for reply email
            const replyTemplateParams = {
                to_email: email,
                from_name: name,
                message: message
            };

            // Send initial contact email
            emailjs.send(serviceId, templateIdContact, contactTemplateParams, publicKey)
                .then((contactResponse) => {
                    console.log('Contact email sent successfully!', contactResponse);

                    // Send reply email
                    return emailjs.send(serviceId, templateIdReply, replyTemplateParams, publicKey);
                })
                .then((replyResponse) => {
                    console.log('Reply email sent successfully!', replyResponse);

                    // Reset form fields
                    setName("");
                    setEmail("");
                    setMessage("");
                    setPhone("");

                    // Show success message
                    setSubmitStatus("success");
                    setIsLoading(false);

                    // Clear success message after 3 seconds
                    setTimeout(() => {
                        setSubmitStatus("");
                    }, 3000);
                })
                .catch((error) => {
                    console.error('Failed to send emails:', error);

                    // Show error message
                    setSubmitStatus("error");
                    setIsLoading(false);

                    // Clear error message after 3 seconds
                    setTimeout(() => {
                        setSubmitStatus("");
                    }, 3000);
                });
        } else {
            // If validation fails, stop loading
            setIsLoading(false);
        }
    };

    return (
        <div className=" min-h-screen flex items-center py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-12 bg-white shadow-2xl rounded-2xl overflow-hidden"
                >
                    {/* Contact Information Section */}
                    <div className="bg-gradient-to-br from-orange-500 to-orange-700 p-12 text-white">
                        <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                        <div className="space-y-6">
                            {info.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <item.icon className="w-6 h-6" />
                                    <div>
                                        <p className="font-medium">{item.title}</p>
                                        {item.link ? (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-gray-200 transition-colors"
                                            >
                                                {item.links}
                                            </a>
                                        ) : (
                                            <p>{item.links}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Location Info */}
                        <div className="mt-12 flex items-center space-x-4">
                            <MapPin className="w-6 h-6" />
                            <p>Bhubaneswar, Odisha, India</p>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="md:py-12 py-6 md:pr-12 px-6 md:px-0 relative">
                        {/* Loading Overlay */}
                        {isLoading && (
                            <div className="absolute inset-0 bg-white/70 z-50 flex items-center justify-center">
                                <Loader2 className="w-12 h-12 animate-spin text-orange-500" />
                            </div>
                        )}

                        {/* Success/Error Message */}
                        {submitStatus === "success" && (
                            <div className="absolute top-0 left-0 right-0 bg-green-500 text-white p-4 flex items-center justify-center">
                                <CheckCircle className="mr-2" />
                                Your form has been submitted successfully!
                            </div>
                        )}
                        {submitStatus === "error" && (
                            <div className="absolute top-0 left-0 right-0 bg-red-500 text-white p-4 flex items-center justify-center">
                                Failed to send message. Please try again.
                            </div>
                        )}

                        <h1 className="text-4xl font-bold text-gray-900 mb-8">
                            Get in <span className="text-orange-500">Touch</span>
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full pl-10 pb-2 border-b-2 border-gray-300 
                      focus:border-orange-500 transition-colors 
                      placeholder-gray-400"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </div>
                                {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name}</p>}
                            </div>

                            {/* Phone Input */}
                            <div>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full pl-10 pb-2 border-b-2 border-gray-300 
                      focus:border-orange-500 transition-colors 
                      placeholder-gray-400"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </div>
                                {errors.phone && <p className="text-red-500 mt-1 text-sm">{errors.phone}</p>}
                            </div>

                            {/* Email Input */}
                            <div>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full pl-10 pb-2 border-b-2 border-gray-300 
                      focus:border-orange-500 transition-colors 
                      placeholder-gray-400"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </div>
                                {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email}</p>}
                            </div>

                            {/* Message Input */}
                            <div>
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <textarea
                                        placeholder="Your Message"
                                        className="w-full pl-10 pb-2 border-b-2 border-gray-300 
                      focus:border-orange-500 transition-colors 
                      placeholder-gray-400 resize-none h-24"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </div>
                                {errors.message && <p className="text-red-500 mt-1 text-sm">{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-3 rounded-lg 
                  hover:bg-orange-600 transition-colors 
                  flex items-center justify-center space-x-2"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                ) : (
                                    <Send className="w-5 h-5" />
                                )}
                                <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;