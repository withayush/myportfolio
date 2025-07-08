import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BottomGradient, LabelInputContainer } from "@/components/ui/form-components";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Github, Linkedin, Mail, MapPin, Phone, Send, MessageCircle, User } from "lucide-react";
import { useState, useRef } from "react";
import Particles from "../ui/Particles";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "mannu272004@gmail.com",
      link: "mailto:mannu272004@gmail.com",
      color: "from-blue-500 to-blue-600",
      description: "Reach out anytime"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8955745484",
      link: "tel:+918955745484",
      color: "from-green-500 to-green-600",
      description: "Call for urgent inquiries"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "India",
      link: "#",
      color: "from-purple-500 to-purple-600",
      description: "Available for remote work"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      link: "https://github.com/withayush",
      color: "hover:text-gray-200",
      ariaLabel: "Visit Ayush's GitHub profile"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ayush-sharma7788",
      color: "hover:text-blue-300",
      ariaLabel: "Connect with Ayush on LinkedIn"
    }
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname.trim()) newErrors.firstname = "First name is required";
    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ firstname: "", email: "", subject: "", message: "" });
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 bg-gray-900 relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#e0e7ef', '#60a5fa', '#64748b']}
          particleCount={120}
          particleSpread={10}
          speed={0.09}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <Spotlight 
        gradientFirst="radial-gradient(600px circle at 50% 50%, hsla(0, 0%, 100%, .05) 0, transparent 80%)"
        gradientSecond="radial-gradient(400px circle at 30% 30%, hsla(0, 0%, 100%, .03) 0, transparent 80%)"
        gradientThird="radial-gradient(300px circle at 70% 70%, hsla(0, 0%, 100%, .02) 0, transparent 80%)"
        translateY={-80}
        width={1000}
        height={1000}
        smallWidth={300}
        duration={7}
        xOffset={80}
      />
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
            Have a project in mind? Let's connect and bring your ideas to life!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">Contact Me</h3>
            </div>
            
            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.link}
                  aria-label={method.label + ": " + method.value}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="group block p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-800/70 transition-all duration-200 border border-gray-700/30 hover:border-gray-600/30"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-md bg-gradient-to-r ${method.color} text-white group-hover:scale-105 transition-transform duration-200`}>
                      {method.icon}
                    </div>
                    <div>
                      <div className="text-gray-200 text-sm font-medium">{method.label}</div>
                      <div className="text-white font-semibold">{method.value}</div>
                      <div className="text-gray-400 text-xs">{method.description}</div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                <User className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl Core Logic
sm:text-2xl font-semibold text-white">Follow Me</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className={`flex items-center justify-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-200 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:sticky lg:top-20"
          >
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Send a Message</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <LabelInputContainer>
                    <Label htmlFor="firstname" className="text-white text-sm font-medium">First Name</Label>
                    <Input
                      id="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      type="text"
                      className={`bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 h-10 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent ${errors.firstname ? 'border-red-500' : ''}`}
                      aria-invalid={!!errors.firstname}
                      aria-describedby={errors.firstname ? 'firstname-error' : undefined}
                    />
                    {errors.firstname && (
                      <p id="firstname-error" className="text-red-400 text-xs mt-1">{errors.firstname}</p>
                    )}
                  </LabelInputContainer>

                  <LabelInputContainer>
                    <Label htmlFor="email" className="text-white text-sm font-medium">Email Address</Label>
                    <Input
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      type="email"
                      className={`bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 h-10 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent ${errors.email ? 'border-red-500' : ''}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </LabelInputContainer>

                  <LabelInputContainer>
                    <Label htmlFor="subject" className="text-white text-sm font-medium">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project inquiry"
                      type="text"
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 h-10 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </LabelInputContainer>

                  <LabelInputContainer>
                    <Label htmlFor="message" className="text-white text-sm font-medium">Message</Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={4}
                      className={`w-full rounded-md border-gray-600 bg-gray-700/50 px-3 py-2 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none ${errors.message ? 'border-red-500' : ''}`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </LabelInputContainer>

                  {submitStatus && (
                    <p className={`text-sm text-center ${submitStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                      {submitStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full h-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Send className="h-4 w-4" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </div>
                    <BottomGradient />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10 pt-6 border-t border-gray-700/40"
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 Ayush Sharma. Built with passion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

export function GetInTouchButton() {
  return (
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=mannu272004@gmail.com&su=Let's Connect&body=Hi%20Ayush%2C%20"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200 text-sm"
      aria-label="Send email to Ayush"
    >
      Get in Touch
    </a>
  );
}