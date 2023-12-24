import React from 'react';
import { Mail } from 'lucide-react';

function ContactSection() {
  return (
    <section className="bg-white m-20">
    <div className="container px-6 py-12 mx-auto">
        <div>
            <p className="font-medium">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">Chat to our friendly team</h1>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex gap-2 items-center">
            <span className="inline-block p-3 text-black rounded-full bg-gray-100/80">
                <Mail />
            </span>
            <div>
            <h2 className="mt-4 text-base font-medium text-gray-800">Email</h2>
            <p className="text-sm text-center">lokeshnagasaidarla@gmail.com</p>
        </div>
    </div>
    <div className="flex gap-2 items-center">
            <span className="inline-block p-3 text-black rounded-full bg-gray-100/80">
                <Mail />
            </span>
            <div>
            <h2 className="mt-4 text-base font-medium text-gray-800">Email</h2>
            <p className="text-sm text-center">lokeshnagasaidarla@gmail.com</p>
        </div>
    </div>
    <div className="flex gap-2 items-center">
            <span className="inline-block p-3 text-black rounded-full bg-gray-100/80">
                <Mail />
            </span>
            <div>
            <h2 className="mt-4 text-base font-medium text-gray-800">Email</h2>
            <p className="text-sm text-center">lokeshnagasaidarla@gmail.com</p>
        </div>
    </div>


            </div>

            <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
                <form>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-gray-600">First Name</label>
                            <input type="text" placeholder="John " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-gray-600">Last Name</label>
                            <input type="text" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-gray-600">Email address</label>
                        <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring" />
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-gray-600">Message</label>
                        <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring" placeholder="Message"></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                    </button>
                </form>
            </div>
        </div>
        
    </div>
</section>

  );
}

export default ContactSection;
