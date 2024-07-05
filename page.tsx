
import "/src/app/globals.css";
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nancy | Xzect Labs</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>
      <body className="bg-gray-100 m-0 p-0 box-border">
        {/* Header */}
        <section id="home">
          <header className="bg-white shadow fixed w-full z-50">
            <div className="container mx-auto flex justify-between items-center py-5 px-4 md:px-6 lg:px-8 max-w-screen-xl">
              <div className="header-logo">
                <Image src="/assets/Images/NancyLogo2.png" alt="Brand Logo" width={100} height={40} className="h-10" />
              </div>
              <nav className="flex space-x-6">
                <a href="#home" className="text-gray-800 hover:text-black font-medium">Home</a>
                <a href="#services" className="text-gray-800 hover:text-black font-medium">Services</a>
                <a href="#features" className="text-gray-800 hover:text-black font-medium">Features</a>
                <a href="#app" className="text-gray-800 hover:text-black font-medium">Application</a>
              </nav>
              <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Download</a>
            </div>
          </header>
        </section>

        {/* Hero Section */}
        <section className="bg-gray-100 text-gray-900 py-36 flex items-center justify-center">
          <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 max-w-screen-xl">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold mb-5">The Best Approach To Interior Design</h1>
              <p className="text-lg mb-10 text-gray-700">
                You're One Stop Finance Empower Platform. Download Our App and Manage All Your Business Expenses.
              </p>
              <div>
                <a href="#" className="inline-block bg-blue-500 text-white py-3 px-6 rounded-full font-bold mr-4 hover:bg-blue-600 transition-colors">Get a Free Demo</a>
                <a href="#" className="inline-block bg-white text-blue-500 border-2 border-blue-500 py-3 px-6 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-colors">See Pricing</a>
              </div>
            </div>
            <div className="max-w-lg w-full">
              <Image src="/assets/Images/phones_logo.png" alt="Hero Image" width={500} height={500} className="w-full" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-white py-16 text-center">
          <div className="container mx-auto max-w-screen-xl px-4">
            <h1 className="text-lg font-medium text-blue-500">SERVICES</h1>
            <h2 className="text-black text-4xl mb-5">Build a Customer Centric Marketing Strategy</h2>
            <p className="text-gray-600 mb-10">Below are the services and features we provide:</p>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-black">
              {[
                { icon: 'fa-chart-line', title: 'Market Research', description: 'Gain a comprehensive understanding of your industry landscape.' },
                { icon: 'fa-user-check', title: 'User Experience', description: 'Evaluate the viability and potential of new products or services.' },
                { icon: 'fa-bullhorn', title: 'Digital Marketing', description: 'Benchmark your performance against competitors, identify the strengths and weaknesses.' },
                { icon: 'fa-search', title: 'SEO Services', description: 'Anticipate market shifts and emerging trends to stay ahead of the curve.' },
                { icon: 'fa-chart-pie', title: 'Market Strategy', description: 'Our market research services are designed to provide maximum value.' },
                { icon: 'fa-laptop-code', title: 'Software Development', description: 'We go beyond data collection to provide actionable insights.' },
                { icon: 'fa-network-wired', title: 'Affiliate Marketing', description: 'We understand that every business is unique and therefore requires different insights, plans, and strategies.' },
                { icon: 'fa-code', title: 'Website Development', description: 'Based on the marketing strategy we apply to your business, we also provide website development services accordingly.' }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <i className={`fas ${service.icon} text-4xl text-blue-500 mb-4`}></i>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-100 text-black py-12 flex items-center justify-center">
          <div className="container mx-auto flex flex-col md:flex-row justify-center items-start px-3 md:px-4 lg:px-6 max-w-screen-xl">
            <div className="flex-1 max-w-lg mb-8 md:mb-0 md:mr-5 ml-6 md:ml-0">
              <Image src="/assets/Images/CatLaptop.jpg" alt="Features2 Image" width={500} height={500} className="w-full h-auto" />
            </div>
            <div className="flex-2 max-w-lg">
              <h1 className="text-lg font-light text-blue-500 mb-2">FEATURES</h1>
              <h2 className="text-4xl mb-5">Our Distinct Methodology to Ensure Your Success</h2>
              <a href="#" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full font-medium mb-5 hover:bg-blue-600 transition-colors">Learn More</a>
              <div className="space-y-5">
                {[
                  { icon: 'fa-laptop-code', title: 'Empowering You For Market Management', description: 'Gain the confidence to effectively oversee markets by leveraging strategic insights and resources to drive success.' },
                  { icon: 'fa-network-wired', title: 'Manage Your Design and Architecture', description: 'Optimize task completion by efficiently managing time and resources, ensuring timely delivery and enhanced efficiency.' },
                  { icon: 'fa-code', title: 'Real-Time Presentations', description: 'Deliver presentations in real-time with confidence, using strategic insights and resources to manage effectively.' },
                  { icon: 'fa-chart-pie', title: 'Marketing Strategy', description: 'Get the assistance you need regarding Marketing Strategies. We provide it all!' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-5">
                    <i className={`fas ${feature.icon} text-2xl text-blue-500 mt-2`}></i>
                    <div className="text-left">
                      <h3 className="text-2xl mb-2">{feature.title}</h3>
                      <p className="text-lg text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Download Section */}
        <section id="app" className="bg-gray-100 text-black py-12 flex items-center justify-center">
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-6 lg:px-8 max-w-screen-xl">
            <div className="max-w-lg mb-8 md:mb-0 md:mr-5">
              <h1 className="text-lg font-light text-blue-500">APPLICATION</h1>
              <h2 className="text-3xl mb-5">Ready to Start? Download Our App Right Now:</h2>
              <p className="text-lg font-light text-gray-600 mb-5">With Rible, you can experience the convenience of making secure and hassle-free payments online. Our platform offers a quick and easy way to manage your transactions.</p>
              <div className="space-y-5">
                {[
                  { icon: 'fa-chart-line', title: '1. Download' },
                  { icon: 'fa-user-check', title: '2. Setup Your Profile' },
                  { icon: 'fa-laptop-code', title: '3. Start' }
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <i className={`fas ${step.icon} text-2xl text-blue-500`}></i>
                    <div className="text-left">
                      <h3 className="text-xl">{step.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 max-w-lg w-full md:ml-5">
              <Image src="/assets/Images/AppSection.jpg" alt="App Image" width={500} height={500} className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-5">
          <div className="container mx-auto max-w-screen-xl">
            <p>&copy; 2024 Brand. Designed by Nancy Meena for Xzect Labs</p>
          </div>
        </footer>
      </body>
    </>
  );
}
