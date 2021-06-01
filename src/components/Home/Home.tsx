import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {

  const data = [
    {
      title: 'This is a simple title test',
      author: 'The author is: ME',
      content: 'This is an example from a Flash Card on this app. Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia, fuga quis harum officia maxime nulla, fugiat nobis blanditiis repudiandae iste at, omnis magnam sint tenetur provident impedit corporis sit laudantium?',
      createdAt: 'hace 3 días',
      editedAt: 'hace 2 días'
    },
    {
      title: 'This is a simple title test',
      author: 'The author is: ME',
      content: 'This is an example from a Flash Card on this app. Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia, fuga quis harum officia maxime nulla, fugiat nobis blanditiis repudiandae iste at, omnis magnam sint tenetur provident impedit corporis sit laudantium?',
      createdAt: 'hace 3 días',
      editedAt: 'hace 2 días'
    },
    {
      title: 'This is a simple title test',
      author: 'The author is: ME',
      content: 'This is an example from a Flash Card on this app. Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia, fuga quis harum officia maxime nulla, fugiat nobis blanditiis repudiandae iste at, omnis magnam sint tenetur provident impedit corporis sit laudantium?',
      createdAt: 'hace 3 días',
      editedAt: 'hace 2 días'
    },
    {
      title: 'This is a simple title test',
      author: 'The author is: ME',
      content: 'This is an example from a Flash Card on this app. Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia, fuga quis harum officia maxime nulla, fugiat nobis blanditiis repudiandae iste at, omnis magnam sint tenetur provident impedit corporis sit laudantium?',
      createdAt: 'hace 3 días',
      editedAt: 'hace 2 días'
    },
    {
      title: 'This is a simple title test',
      author: 'AndiUchiha',
      content: 'This is an example from a Flash Card on this app. Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia, fuga quis harum officia maxime nulla, fugiat nobis blanditiis repudiandae iste at, omnis magnam sint tenetur provident impedit corporis sit laudantium?',
      createdAt: 'hace 3 días',
      editedAt: 'hace 2 días'
    }
  ];

  return (
    <div className="static max-w-screen">
      <Navbar />
      <div className="grid grid-cols-1 gap-8 pb-4 mt-8 mb-4 md:grid-cols-2 xl:grid-cols-4">
        {data.map((item) => (
          <div className="flex flex-col ">
            <div className="p-4 bg-white shadow-md rounded-3xl">
              <div className="flex-none lg:flex">
                <div className="flex-auto py-2 ml-3 justify-evenly">
                  <div className="flex flex-wrap ">
                    <div className="flex-none w-full text-2xl font-medium text-blue-700">
                      {item.title}
                    </div>
                    <div className="mr-2">
                      {item.author}
                    </div>
                    <div>
                      {item.createdAt}
                    </div>
                    <p className="flex-auto mt-3 text-base font-small">
                      {item.content}
                    </p>
                  </div>
                  <p className="mt-3" />
                  <div className="flex p-4 pb-2 border-t border-gray-200 " />
                  <div className="flex space-x-3 text-sm font-medium">
                    <div className="flex flex-auto space-x-3">
                      <button className="inline-flex items-center px-5 py-2 mb-2 space-x-2 tracking-wider text-white bg-red-500 border-t rounded-full shadow-md">Delete
                      </button>
                    </div>
                    <div className="flex flex-left">
                      <button className="inline-flex items-center px-5 py-2 mb-2 space-x-2 tracking-wider text-white bg-blue-500 border-t rounded-full shadow-md">Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer position={'relative'} />
    </div>
  );
}

export default Home;
