const Navbar = () => {
  return (
    <header className="bg-slate-500">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <a href="/" className="-m-1.5 p-1.5">
          <img className="h-8 w-auto" src="logo.svg" alt=""></img>
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          Home
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
