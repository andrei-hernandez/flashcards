import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Content = () => {
  return (
    <div className="static max-w-screen">
      <Navbar />
      <div className="mx-12 content">
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-2">
          <div className="flex flex-col w-11/12">
            <div className="p-4 bg-white shadow-md rounded-3xl">
              <div className="flex-none lg:flex">
                <div className="flex-auto py-2 ml-3 justify-evenly">
                  <div className="flex flex-wrap ">
                    <div className="flex-none w-full text-2xl font-medium text-blue-700">
                      This is the title
                    </div>
                    <p className="flex-auto mt-3 text-base font-small">
                      This is an example from a Flash Card on this app.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, fuga quis harum officia maxime nulla, fugiat nobis blanditiis repudiandae iste at, omnis magnam sint tenetur provident impedit corporis sit laudantium?
                    </p>
                  </div>
                  <p className="mt-3" />
                  <div className="flex p-4 pb-2 border-t border-gray-200 " />
                  <div className="flex space-x-3 text-sm font-medium">
                    <div className="flex flex-auto space-x-3">
                      <button className="inline-flex items-center px-5 py-2 mb-2 space-x-2 tracking-wider text-white">
                      </button>
                    </div>
                    <Link to='/signin'>
                      <button className="px-5 py-2 mb-2 tracking-wider text-white bg-gray-900 rounded-full shadow-sm md:mb-0 hover:bg-gray-800" type="button" aria-label="like">Try It</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-11/12 pt-6 mt-6">
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur laboriosam, totam esse velit itaque, doloribus error ut corporis tenetur eveniet provident vitae sunt tempore porro ea quod laudantium deserunt dicta. Excepturi laborum similique quidem dolor labore, quam autem dolores blanditiis reprehenderit error reiciendis at iste, inventore quo incidunt cupiditate unde.</p>
          </div>
        </div>
      </div>
      <Footer position={'absolute'} />
    </div>
  );
}

export default Content;
