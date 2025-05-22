
// import { Check } from 'lucide-react';
// import { Card, CardContent } from "@/components/ui/card";

// const About = () => {
//   const values = [
//     "Innovation-driven solutions",
//     "Customer-focused approach",
//     "Systems thinking methodology",
//     "Accountability in every action",
//     "Long-term technological partnerships"
//   ];

//   return (
//     <section id="about" className="py-20 bg-white dark:bg-navy">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             <span className="gradient-text">SYST IT SOFT</span>
//           </h2>
//           <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
//             Organize. Systemize. Succeed.
//           </p>
//           <div className="mt-4 mx-auto max-w-3xl">
//             <h3 className="text-2xl font-bold mb-4">We Drive R&D you Drive Growth</h3>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
//           <div>
//             <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">About Us</h3>
//             <p className="text-gray-700 dark:text-gray-300 mb-6">
//               SYST IT SOFT is a dynamic R&D-driven company dedicated to solving industrial challenges through cutting-edge technology and innovation. We specialize in providing scalable cloud infrastructure, artificial intelligence solutions, custom software development, advanced hardware systems, industrial Internet of Things (IIoT) solutions, and Robotics & Automation.
//             </p>
//             <p className="text-gray-700 dark:text-gray-300 mb-6">
//               Our team of experts works closely with industries to identify problems and deliver tailored, innovative solutions that drive efficiency and growth. With a strong focus on accountability and systems, we enable you to focus on growth while we handle the technological complexities. At SYST IT SOFT, innovation meets industry needs.
//             </p>

//             <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">Long-Term Vision</h3>
//             <p className="text-gray-700 dark:text-gray-300 mb-6">
//               We are dedicated to bringing everything under accountability through systematic innovation, aiming to reduce resource wastage and inefficiency. Our goal is to make innovation a core principle in achieving this vision. Wherever there is innovation, there should be SYST IT SOFT. We aspire to make the world a happier place to live through the power of innovation.
//             </p>

//             <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">Mission to Achieve the Vision</h3>
//             <p className="text-gray-700 dark:text-gray-300">
//               We focus on addressing resource wastage and accountability issues in industries. Our mission is to continuously solve these problems across all sectors by employing cutting-edge, innovative technology. Rather than offering generic solutions, we provide specific, tailored answers by analyzing problems from the ground up. We believe that even small changes can lead to significant transformations.
//             </p>
//           </div>

//           <div className="bg-gray-50 dark:bg-navy/60 p-8 rounded-2xl shadow-sm">
//             <h3 className="text-2xl font-bold mb-6 text-navy dark:text-white">Our Core Values</h3>
//             <ul className="space-y-4">
//               {values.map((value, index) => (
//                 <li key={index} className="flex items-start">
//                   <Check className="h-6 w-6 text-vibrant-red mr-3 flex-shrink-0" />
//                   <span className="text-gray-700 dark:text-gray-300">{value}</span>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-8 bg-white dark:bg-navy/80 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
//               <h4 className="text-xl font-semibold mb-3 text-navy dark:text-white">Our Commitment</h4>
//               <p className="text-gray-700 dark:text-gray-300">
//                 At SYST IT SOFT, we don't just provide solutions; we build long-term partnerships. We're committed to your success and continuous improvement through technological excellence and innovation.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="space-y-12">
//           <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>

//           <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
//             <CardContent className="p-6">
//               <h4 className="text-xl font-bold text-vibrant-red mb-3">Critical and Scalable Cloud Infrastructure</h4>
//               <p className="text-gray-700 dark:text-gray-300 mb-4">
//                 We provide customized cloud infrastructure development tailored to your needs. Whether it's migrating your existing infrastructure or transitioning your entire process to the cloud, we handle all your cloud infrastructure problems.
//               </p>
//               <div>
//                 <h5 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Technologies We Use:</h5>
//                 <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
//                   <li className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">Azure</li>
//                   <li className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">AWS</li>
//                   <li className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">GCP</li>
//                   <li className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">Digital Ocean</li>
//                   <li className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">Own Cloud Data Centers</li>
//                   <li className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">Rented Individual Data Centers</li>
//                 </ul>
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
//             <CardContent className="p-6">
//               <h4 className="text-xl font-bold text-vibrant-red mb-3">Artificial Intelligence (Especially Small Language Models)</h4>
//               <p className="text-gray-700 dark:text-gray-300">
//                 We develop application-specific small language models that cater to your industrial needs. Our cutting-edge AI solutions help businesses reduce unwanted resource usage and optimize efficiency.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
//             <CardContent className="p-6">
//               <h4 className="text-xl font-bold text-vibrant-red mb-3">Embedded Artificial Intelligence</h4>
//               <p className="text-gray-700 dark:text-gray-300">
//                 We specialize in embedding AI directly into your hardware and devices, enabling real-time data processing and decision-making at the edge. Embedded AI allows systems to operate autonomously without the need for continuous cloud connectivity, making it ideal for environments where low latency and high efficiency are critical. By integrating AI into your devices, we help reduce data transfer costs, improve response times, and create smarter, self-sufficient systems.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
//             <CardContent className="p-6">
//               <h4 className="text-xl font-bold text-vibrant-red mb-3">Application-Specific Customized Software Development</h4>
//               <p className="text-gray-700 dark:text-gray-300">
//                 In today's world, businesses require specific software solutions. We develop custom software from scratch, analyzing your unique needs and understanding your core systems before building a tailored solution.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
//             <CardContent className="p-6">
//               <h4 className="text-xl font-bold text-vibrant-red mb-3">Engineering R&D Solutions</h4>
//               <p className="text-gray-700 dark:text-gray-300">
//                 We provide specialized R&D services for engineering problems across various industries. Our solutions focus on improving design, efficiency, and the integration of advanced technologies into your systems.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
//             <CardContent className="p-6">
//               <h4 className="text-xl font-bold text-vibrant-red mb-3">Hardware and Electronics R&D Solutions</h4>
//               <p className="text-gray-700 dark:text-gray-300">
//                 Our team focuses on developing custom hardware and electronics solutions for your industry. From prototyping to full-scale production, we innovate to meet your specific needs and requirements.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
//             <CardContent className="p-6">
//               <h4 className="text-xl font-bold text-vibrant-red mb-3">Industrial Internet of Things (IIoT) Solutions</h4>
//               <p className="text-gray-700 dark:text-gray-300 mb-4">
//                 We provide IIoT solutions that enable the seamless integration of devices into your industrial processes. Our solutions help you monitor, control, and automate your operations for maximum efficiency.
//               </p>
//               <div>
//                 <h5 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Technologies We Use:</h5>
//                 <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
//                   <li className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">IoT Sensors</li>
//                   <li className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">Cloud Integration (AWS IoT, Azure IoT)</li>
//                   <li className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">Edge Computing</li>
//                 </ul>
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
//             <CardContent className="p-6">
//               <h4 className="text-xl font-bold text-vibrant-red mb-3">Robotics and Automation Solutions</h4>
//               <p className="text-gray-700 dark:text-gray-300">
//                 We offer robotics and automation solutions to streamline your operations, increase productivity, and reduce human error. Our systems are designed to be flexible, scalable, and fully integrated with your existing processes.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import { Check, Cloud, Brain, Cpu, Code, Wrench, CircuitBoard, Network, Bot } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Cloud,
    title: 'Critical and Scalable Cloud Infrastructure',
    description: 'We provide customized cloud infrastructure development tailored to your needs. Whether it\'s migrating your existing infrastructure or transitioning your entire process to the cloud, we handle all your cloud infrastructure problems.',
    technologies: ['Azure', 'AWS', 'GCP', 'Digital Ocean', 'Own Cloud Data Centers', 'Rented Individual Data Centers'],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence (Especially Small Language Models)',
    description: 'We develop application-specific small language models that cater to your industrial needs. Our cutting-edge AI solutions help businesses reduce unwanted resource usage and optimize efficiency.',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Cpu,
    title: 'Embedded Artificial Intelligence',
    description: 'We specialize in embedding AI directly into your hardware and devices, enabling real-time data processing and decision-making at the edge. Embedded AI allows systems to operate autonomously without the need for continuous cloud connectivity, making it ideal for environments where low latency and high efficiency are critical. By integrating AI into your devices, we help reduce data transfer costs, improve response times, and create smarter, self-sufficient systems.',
    color: 'from-teal-500 to-emerald-400'
  },
  {
    icon: Code,
    title: 'Application-Specific Customized Software Development',
    description: 'In today\'s world, businesses require specific software solutions. We develop custom software from scratch, analyzing your unique needs and understanding your core systems before building a tailored solution.',
    color: 'from-indigo-500 to-blue-400'
  },
  {
    icon: Wrench,
    title: 'Engineering R&D Solutions',
    description: 'We provide specialized R&D services for engineering problems across various industries. Our solutions focus on improving design, efficiency, and the integration of advanced technologies into your systems.',
    color: 'from-gray-500 to-gray-400'
  },
  {
    icon: CircuitBoard,
    title: 'Hardware and Electronics R&D Solutions',
    description: 'Our team focuses on developing custom hardware and electronics solutions for your industry. From prototyping to full-scale production, we innovate to meet your specific needs and requirements.',
    color: 'from-amber-500 to-orange-400'
  },
  {
    icon: Network,
    title: 'Industrial Internet of Things (IIoT) Solutions',
    description: 'We provide IIoT solutions that enable the seamless integration of devices into your industrial processes. Our solutions help you monitor, control, and automate your operations for maximum efficiency.',
    technologies: ['IoT Sensors', 'Cloud Integration (AWS IoT, Azure IoT)', 'Edge Computing'],
    color: 'from-green-500 to-emerald-400'
  },
  {
    icon: Bot,
    title: 'Robotics and Automation Solutions',
    description: 'We offer robotics and automation solutions to streamline your operations, increase productivity, and reduce human error. Our systems are designed to be flexible, scalable, and fully integrated with your existing processes.',
    color: 'from-red-500 to-rose-400'
  }
];

const About = () => {
  const values = [
    "Innovation-driven solutions",
    "Customer-focused approach",
    "Systems thinking methodology",
    "Accountability in every action",
    "Long-term technological partnerships"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-navy">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">SYST IT SOFT</span>
          </h2>
          <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
            Organize. Systemize. Succeed.
          </p>
          <div className="mt-4 mx-auto max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">We Drive R&D you Drive Growth</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">About Us</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              SYST IT SOFT is a dynamic R&D-driven company dedicated to solving industrial challenges through cutting-edge technology and innovation. We specialize in providing scalable cloud infrastructure, artificial intelligence solutions, custom software development, advanced hardware systems, industrial Internet of Things (IIoT) solutions, and Robotics & Automation.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our team of experts works closely with industries to identify problems and deliver tailored, innovative solutions that drive efficiency and growth. With a strong focus on accountability and systems, we enable you to focus on growth while we handle the technological complexities. At SYST IT SOFT, innovation meets industry needs.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">Long-Term Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We are dedicated to bringing everything under accountability through systematic innovation, aiming to reduce resource wastage and inefficiency. Our goal is to make innovation a core principle in achieving this vision. Wherever there is innovation, there should be SYST IT SOFT. We aspire to make the world a happier place to live through the power of innovation.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-navy dark:text-white">Mission to Achieve the Vision</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We focus on addressing resource wastage and accountability issues in industries. Our mission is to continuously solve these problems across all sectors by employing cutting-edge, innovative technology. Rather than offering generic solutions, we provide specific, tailored answers by analyzing problems from the ground up. We believe that even small changes can lead to significant transformations.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-navy/60 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-navy dark:text-white">Our Core Values</h3>
            <ul className="space-y-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-vibrant-red mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-white dark:bg-navy/80 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h4 className="text-xl font-semibold mb-3 text-navy dark:text-white">Our Commitment</h4>
              <p className="text-gray-700 dark:text-gray-300">
                At SYST IT SOFT, we don't just provide solutions; we build long-term partnerships. We're committed to your success and continuous improvement through technological excellence and innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>

          {services.map((service, index) => (
            <Card
              key={index}
              className="reveal border-0 shadow-md hover:shadow-lg transition-shadow duration-500 hover:border-electric-blue dark:hover:border-electric-blue bg-white dark:bg-navy group overflow-hidden"
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-vibrant-red mb-3 group-hover:text-electric-blue transition-colors duration-300">{service.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>
                {service.technologies && (
                  <div>
                    <h5 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Technologies We Use:</h5>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      {service.technologies.map((tech, techIndex) => (
                        <li key={techIndex} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-tr from-electric-blue/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;