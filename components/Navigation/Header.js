import Link from 'next/link';

function Header() {
  return (
    <header className="grid grid-cols-3 h-12 text-sm font-heading font-bold uppercase border-b-2 border-dark">
      <div className="col-span-1 tw-center border-r-2 border-dark">
        <Link href="/">
          <a className="tw-font-subheading">Podcast</a>
        </Link>
      </div>

      <div className="col-span-1 tw-center">
        <Link href="/">
          <a className="tw-font-subheading" title="Return to Chromaxoma">
            X
          </a>
        </Link>
      </div>

      <div className="col-span-1 tw-center border-l-2 border-dark">
        <Link href="/">
          <a className="tw-font-subheading">Blog</a>
        </Link>
      </div>
    </header>
  );
}

export default Header;

// // import Link from "next/link";

// // import CartSummary from "./CartSummary";

// // import LogoSVG from "../svg/logo.svg";

// // function Header() {
// //   return (
// //     <header className="md:absolute md:left-0 md:top-0 w-full z-10">
// //       <div className="py-3 lg:py-5 flex items-center">
// //         <Link href="/">
// //           <a title="Return to ChopChop">Shop</a>
// //         </Link>
// //         <span className="pr-1">,</span>
// //         <CartSummary />
// //       </div>

// //       <Link href="/">
// //         <a title="Return to ChopChop">
// //           <LogoSVG className="w-full" />
// //         </a>
// //       </Link>
// //     </header>
// //   );
// // }

// // export default Header;
