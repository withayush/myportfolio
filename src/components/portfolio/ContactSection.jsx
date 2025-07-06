import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BottomGradient, LabelInputContainer } from "@/components/ui/form-components";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Github, Linkedin, Mail, MapPin, Phone, Send, MessageCircle, User, Building } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mannu272004@gmail.com",
      link: "mailto:mannu272004@gmail.com",
      color: "from-blue-600 to-blue-800",
      description: "Send me an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8955745484",
      link: "tel:+918955745484",
      color: "from-green-600 to-green-800",
      description: "Call me for urgent matters"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "India",
      link: "#",
      color: "from-purple-600 to-purple-800",
      description: "Based in India, open to remote work"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      username: "@ayushsharma",
      link: "https://github.com",
      color: "hover:text-gray-300",
      description: "Check out my projects"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      username: "ayush-sharma",
      link: "https://linkedin.com",
      color: "hover:text-blue-400",
      description: "Connect professionally"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      username: "Let's connect",
      link: "mailto:ayush.sharma@example.com",
      color: "hover:text-green-400",
      description: "Direct communication"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden bg-grid-white/[0.02]">
      {/* New Spotlight Effect */}
      <Spotlight 
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, .08) 0, hsla(0, 0%, 100%, .02) 50%, hsla(0, 0%, 100%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .06) 0, hsla(0, 0%, 100%, .02) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, .02) 80%, transparent 100%)"
        translateY={-200}
        width={800}
        height={1200}
        smallWidth={300}
        duration={10}
        xOffset={150}
      />
      
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-32 h-32 bg-blue-500/3 rounded-full blur-2xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project or just want to say hello? I'd love to hear from you and discuss how we can work together!
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Contact info and social links */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Contact methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Get In Touch</h3>
                </div>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.label}
                      href={method.link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="group block p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-400 text-sm font-medium mb-1">{method.label}</div>
                          <div className="text-white font-semibold text-lg mb-2">{method.value}</div>
                          <div className="text-gray-500 text-sm">{method.description}</div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Follow Me</h3>
                </div>
                
                <div className="grid gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className={`group block p-6 bg-gray-800/20 backdrop-blur-sm rounded-2xl hover:bg-gray-800/40 transition-all duration-300 border border-gray-700/30 hover:border-gray-600/50 text-gray-300 ${social.color}`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-gray-700/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          {social.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-lg">{social.label}</div>
                          <div className="text-gray-400 text-sm mb-1">{social.username}</div>
                          <div className="text-gray-500 text-sm">{social.description}</div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right side - Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:sticky lg:top-8"
            >
              <div className="shadow-2xl mx-auto w-full max-w-lg rounded-2xl bg-gray-800/40 backdrop-blur-sm p-8 border border-gray-700/50">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-green-600 to-green-800 rounded-lg">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                    <p className="text-gray-400 text-sm">I'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <LabelInputContainer>
                      <Label htmlFor="firstname" className="text-white text-sm font-medium">First name</Label>
                      <Input id="firstname" placeholder="John" type="text" className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 h-12" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                      <Label htmlFor="lastname" className="text-white text-sm font-medium">Last name</Label>
                      <Input id="lastname" placeholder="Doe" type="text" className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 h-12" />
                    </LabelInputContainer>
                  </div>
                  
                  <LabelInputContainer>
                    <Label htmlFor="email" className="text-white text-sm font-medium">Email Address</Label>
                    <Input id="email" placeholder="john.doe@example.com" type="email" className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 h-12" />
                  </LabelInputContainer>
                  
                  <LabelInputContainer>
                    <Label htmlFor="subject" className="text-white text-sm font-medium">Subject</Label>
                    <Input id="subject" placeholder="Project Inquiry" type="text" className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 h-12" />
                  </LabelInputContainer>
                  
                  <LabelInputContainer>
                    <Label htmlFor="message" className="text-white text-sm font-medium">Message</Label>
                    <textarea
                      id="message"
                      placeholder="Tell me about your project, timeline, and budget..."
                      rows={5}
                      className="shadow-input dark:placeholder-text-neutral-600 flex w-full rounded-md border-none bg-gray-700/50 px-4 py-3 text-sm text-white transition duration-400 placeholder:text-gray-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none resize-none"
                    />
                  </LabelInputContainer>

                  <button
                    className="group/btn relative block h-14 w-full rounded-xl bg-gradient-to-r from-white to-gray-100 font-semibold text-black shadow-lg hover:from-gray-100 hover:to-white transition-all duration-300 transform hover:scale-[1.02]"
                    type="submit"
                  >
                    <div className="flex items-center justify-center">
                      <Send className="mr-3 h-5 w-5" />
                      Send Message
                    </div>
                    <BottomGradient />
                  </button>

                  <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

                  <div className="space-y-3">
                    <p className="text-gray-400 text-sm text-center mb-4">Or connect with me directly:</p>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        className="group/btn shadow-input relative flex h-12 items-center justify-center rounded-lg bg-gray-700/50 px-3 font-medium text-white hover:bg-gray-700/70 transition-all duration-300"
                        type="button"
                      >
                        <Github className="h-5 w-5" />
                        <BottomGradient />
                      </button>
                      <button
                        className="group/btn shadow-input relative flex h-12 items-center justify-center rounded-lg bg-gray-700/50 px-3 font-medium text-white hover:bg-gray-700/70 transition-all duration-300"
                        type="button"
                      >
                        <Linkedin className="h-5 w-5" />
                        <BottomGradient />
                      </button>
                      <button
                        className="group/btn shadow-input relative flex h-12 items-center justify-center rounded-lg bg-gray-700/50 px-3 font-medium text-white hover:bg-gray-700/70 transition-all duration-300"
                        type="button"
                      >
                        <Mail className="h-5 w-5" />
                        <BottomGradient />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20 pt-12 border-t border-gray-700/50"
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-400 text-lg mb-4">
              Let's create something amazing together
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Ayush Sharma. Crafted with ❤️ and lots of ☕
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;