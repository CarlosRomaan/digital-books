import Link from "next/link";

const Footer = () => {
  return (
    <footer 
      className="text-white-800 flex-between body-text w-full gap-y-10 border-t 
        border-black-400 bg-black-100 px-20 py-12 max-md:flex-col"
    >
      <p>&copy; 2024 All Rights Reserved</p>

      <div className="flex gap-x-9">
        <Link href="/">
          Terms & Conditions
        </Link>

        <Link href="/">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;