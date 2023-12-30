import ActionButton from './components/ActionButton';
import Logo from './components/Logo';
import Navigation from './components/Navigation';

const Navbar = () => {
  return (
    <div className='bg-white flex justify-between items-center px-4 lg:px-20 border-b sticky top-0 inset-x-0 z-50 py-2'>
      <Logo />
      <Navigation />
      <ActionButton />
    </div>
  );
};

export default Navbar;
