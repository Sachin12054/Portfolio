
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Reset error on change
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    const newErrors = {
      name: formData.name.trim() === '',
      email: !validateEmail(formData.email),
      message: formData.message.trim() === ''
    };
    
    setErrors(newErrors);
    
    if (Object.values(newErrors).some(error => error)) {
      return;
    }
    
    // Submit form (mock)
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out, I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const getInputClass = (field: keyof typeof errors) => {
    return `bg-darker/50 border ${
      errors[field]
        ? 'border-destructive/50 focus:border-destructive'
        : formData[field]
          ? 'border-neon-cyan/50 focus:border-neon-cyan'
          : 'border-white/20 focus:border-white/40'
    } rounded-md p-3 w-full transition-colors duration-300 focus:outline-none`;
  };

  return (
    <section id="contact" className="relative py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="neon-text-blue">Let's</span> Connect
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 neon-text-cyan">Drop Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={getInputClass('name')}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive">Please enter your name</p>
                )}
              </div>
              
              <div className="mb-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={getInputClass('email')}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">Please enter a valid email</p>
                )}
              </div>
              
              <div className="mb-6">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={getInputClass('message')}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive">Please enter your message</p>
                )}
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 hover:from-neon-blue/30 hover:to-neon-cyan/30 border border-neon-cyan/50 text-white transition-all duration-300"
              >
                <span className="relative group">
                  Send Message
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="glass-card p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 neon-text-magenta">Contact Info</h3>
              
              <div className="space-y-4">
                <p className="text-white/80">Feel free to reach out with questions, opportunities, or just to say hello.</p>
                <p className="text-white/80 flex items-center"><MapPinIcon className="w-4 h-4 mr-2 text-neon-cyan" />Location: <span className="text-white ml-1">India</span></p>
                <p className="text-white/80 flex items-center"><MailIcon className="w-4 h-4 mr-2 text-neon-cyan" />Email: <a href="mailto:sachin11jg@gmail.com" className="text-neon-cyan hover:underline ml-1">sachin11jg@gmail.com</a></p>
                <p className="text-white/80">GitHub: <a href="https://github.com/Sachin12054" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">Sachin12054</a></p>
                <p className="text-white/80">LinkedIn: <a href="https://www.linkedin.com/in/kishore-sachin-j-g-bb1897355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">kishore-sachin-j-g-bb1897355</a></p>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 neon-text-blue">Social Links</h3>
              
              <div className="flex justify-between">
                <a href="https://github.com/Sachin12054" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-darker transition-transform duration-300 group-hover:scale-110 group-hover:shadow-neon-blue">
                    <GithubIcon className="w-6 h-6 text-white/80 group-hover:text-neon-blue transition-colors duration-300" />
                  </div>
                  <span className="mt-2 text-sm text-white/60 group-hover:text-white transition-colors duration-300">GitHub</span>
                </a>
                
                <a href="https://www.linkedin.com/in/kishore-sachin-j-g-bb1897355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-darker transition-transform duration-300 group-hover:scale-110 group-hover:shadow-neon-magenta">
                    <LinkedinIcon className="w-6 h-6 text-white/80 group-hover:text-neon-magenta transition-colors duration-300" />
                  </div>
                  <span className="mt-2 text-sm text-white/60 group-hover:text-white transition-colors duration-300">LinkedIn</span>
                </a>
                
                <a href="mailto:sachin11jg@gmail.com" className="flex flex-col items-center group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-darker transition-transform duration-300 group-hover:scale-110 group-hover:shadow-neon-cyan">
                    <MailIcon className="w-6 h-6 text-white/80 group-hover:text-neon-cyan transition-colors duration-300" />
                  </div>
                  <span className="mt-2 text-sm text-white/60 group-hover:text-white transition-colors duration-300">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
