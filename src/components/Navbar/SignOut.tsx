

const SignOut = ({ handleSignOutClick = () => { } }) => {

  return (
    <button
      onClick={handleSignOutClick}
      className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:text-white hover:bg-blue-500" key="navbar16">
      Sign Out
    </button>
  );
}

export default SignOut;
