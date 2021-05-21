import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex h-12 border-b-2 border-dark tw-font-subheading font-bold">
      <div className="w-full tw-center border-r-2 border-dark">
        <Link href="/">
          <a>Podcast</a>
        </Link>
      </div>
      <div className="w-full tw-center">
        <Link href="/">
          <a>Blog</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
