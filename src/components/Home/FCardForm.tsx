const FCardForm = ({ handleInputChange = (e: any) => { }, handleSaveClick = (e: any) => { }, titleValue = '', contentValue = '', action = '' }) => {


  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form>
        <div className="sm:overflow-hidden">
          <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
            <div className="grid w-full grid-cols-3 gap-6">
              <div className="col-span-3 md:w-full sm:col-span-2">
                <label htmlFor="card_title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <div className="flex mt-1 shadow-sm rounded-l-md">
                  <input
                    type="text"
                    name="card_title"
                    id="card_title"
                    className="flex-1 block border-gray-300 rounded-md md:w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Example: Awesome Title"
                    value={titleValue}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="card_content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <div className="mt-1">
                <textarea
                  id="card_content"
                  name="card_content"
                  rows={10}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Example: Awesome Content"
                  value={contentValue}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 text-right bg-white sm:px-6">
            <button
              type="submit"
              value={action}
              onClick={handleSaveClick}
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FCardForm;
