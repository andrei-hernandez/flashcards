import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { Dialog, Transition } from '@headlessui/react';
import { useEffect, useState, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { GET_FCARDS, DELETE_FCARD, GET_ONE_FCARD, EDIT_FCARD, CREATE_FCARD } from '../../queries/index';
import Navbar from '../Navbar/Navbar';
import FCardForm from './FCardForm';
import './style.css';

const Home = () => {

  const [jwt, setJwt] = useState<string | null>('');

  const [tokenOnRenderExists, setTokenOnRenderExists] = useState(false);

  useEffect(() => {
    const tokenOnRender: any = localStorage.getItem('token');
    if (tokenOnRender) {
      setTokenOnRenderExists(false);
    } else {
      setTokenOnRenderExists(true);
    }
  }, [tokenOnRenderExists]);

  useEffect(() => {
    const storedJwt = localStorage.getItem('token');
    setJwt(storedJwt);
  }, [jwt]);

  const [Data, setData] = useState({ getFlashCards: [] });
  const { data, refetch } = useQuery(GET_FCARDS, { variables: { token: jwt } });

  useEffect(() => {
    setData(data);
  }, [Data, data]);

  //delete graphql query
  const [deleteFCard] = useMutation(DELETE_FCARD, {
    onCompleted: async (): Promise<void> => {
      await refetch();
    }
  });

  const handleDeleteClick = async (e: any): Promise<void> => {
    e.preventDefault();
    await deleteFCard({ variables: { id: e.target.value, token: localStorage.getItem('token') } });
  }

  //add or edit modal form
  let [isOpen, setIsOpen] = useState(false);
  const [CardId, setCardId] = useState('');
  const [Action, setAction] = useState('');
  let [Title, setTitle] = useState('');
  let [Content, setContent] = useState('');

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  //getOneQuery grapghql

  const [getOneFCard] = useLazyQuery(GET_ONE_FCARD, {
    onCompleted: (data) => storeData(data), fetchPolicy: "network-only"
  });

  const handleEditClick = (e: any) => {
    setCardId(e.target.value);
    setAction(e.target.name);
    getOneFCard({ variables: { token: jwt, id: e.target.value } });
  }

  const storeData = (data: any) => {
    setTitle(data?.getOneFlashCard?.title);
    setContent(data?.getOneFlashCard?.content);
    openModal();
  }

  //edit one mutation grapghql
  const [editFCard] = useMutation(EDIT_FCARD, {
    onCompleted: async (): Promise<void> => {
      await refetch();
    }
  });

  const editFcardMutation = async (): Promise<void> => {
    await editFCard({ variables: { id: CardId, token: jwt, title: Title, content: Content } });
  }

  //create card graphql mutation
  const [createFCard] = useMutation(CREATE_FCARD, {
    onCompleted: async (): Promise<void> => {
      await refetch();
      setIsOpen(false);
    }
  });

  const createFcardMutation = async (): Promise<void> => {
    await createFCard({ variables: { token: jwt, title: Title, content: Content } });
  }

  const handleSaveClick = async (e: any): Promise<void> => {
    e.preventDefault();
    if ('Edit' === e.target.value) {
      await editFcardMutation();
      closeModal();
      setIsOpen(false);
      clearCardForm();
    } else if ('Create') {
      await createFcardMutation();
      setIsOpen(false);
      clearCardForm();
    } else {
      console.log("what are you doing XD?");
    }
  }

  const handleInputChange = (e: any) => {
    if (e.target.name === 'card_title') {
      setTitle(e.target.value);
    }
    if (e.target.name === 'card_content') {
      setContent(e.target.value);
    }
  }

  const clearCardForm = () => {
    setTitle('');
    setContent('');
    setCardId('');
    setAction('');
  }

  const [HasSignedOut, setHasSignedOut] = useState(false);

  //sign out click
  const handleSignOutClick = () => {
    localStorage.removeItem('token');
    setHasSignedOut(true);
    console.log(HasSignedOut);
  }

  return (
    <>
      {HasSignedOut &&
        <Redirect
          to={{
            pathname: "/",
          }}
        />}
      {tokenOnRenderExists &&
        <Redirect
          to={{
            pathname: "/signin",
          }}
        />}
      <div className="static max-w-screen">
        <Navbar handleSignOutClick={handleSignOutClick} />
        <div className="lg:ml-12 max-w-screen 2xl:ml-12 md:ml-11 md:mr-3 xl:ml-2 xl:mr-3">
          <div className="grid grid-cols-1 gap-8 pb-4 mt-8 mb-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {Data?.getFlashCards.map((item: any) => (
              <div className="flex flex-col w-96 2xl:w-11/12" key={item.id}>
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
                      <div className="flex text-sm font-medium">
                        <div className="flex flex-auto space-x-3">
                          <button
                            onClick={handleDeleteClick}
                            value={item.id}
                            className="inline-flex items-center px-5 py-2 mb-2 space-x-2 tracking-wider text-white bg-red-500 border-t rounded-full shadow-md"
                          >
                            Delete
                          </button>
                        </div>
                        <div className="flex flex-left">
                          <button
                            name="Edit"
                            type="button"
                            value={item.id}
                            onClick={handleEditClick}
                            className="inline-flex items-center px-5 py-2 mb-2 space-x-2 tracking-wider text-white bg-blue-500 border-t rounded-full shadow-md">Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-col">
              <div className="p-4 bg-white">
                <div className="flex-none lg:flex">
                  <div className="flex-auto py-2 ml-3 justify-evenly">
                    <div className="flex flex-wrap ">
                      <p className="flex-auto mt-3 text-base text-center font-small">
                        <button
                          value="Create"
                          onClick={openModal}
                          className="rounded-full focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-gray-400 focus:ring-opacity-70">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 p-0 m-0 text-gray-400 rounded-full hover:text-gray-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path className="p-0 m-0 rounded-full focus:ring svg-add" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto backdrop-filter backdrop-grayscale backdrop-blur-md backdrop-contrast-200"
              onClose={closeModal}
            >
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0" />
                </Transition.Child>
                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl xl:max-w-4xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="pt-2 text-lg font-medium leading-6 text-center text-gray-900"
                    >
                      Create a new card
                    </Dialog.Title>
                    <FCardForm
                      handleInputChange={handleInputChange}
                      titleValue={Title}
                      contentValue={Content}
                      handleSaveClick={handleSaveClick}
                      action={Action}
                    />
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div >
    </>
  );
}

export default Home;
