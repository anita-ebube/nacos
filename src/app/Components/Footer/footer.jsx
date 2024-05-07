import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#518310] flex justify-between align-center gap-5 px-5 lg:px-10 py-7">
        {/* Logo for small screens */}
        <div className="hidden lg:flex">
          <Image src="/images/footer/noteplug.png" alt="Logo" width={100} height={100} />
        </div>
        {/* Logo for Large Screens */}
        <div className="flex lg:hidden">
          <Image src="/images/footer/noteplug.png" alt="Logo" width={70} height={70} />
        </div>
        <div>
          <p className="text-white text-[9px] lg:text-3xl pt-1">
            2024 @ Noteplug | All rights resevered
          </p>
        </div>
        <div className="flex justify-between align-center gap-3 lg:gap-7">
          < Image src="/images/footer/facebook.png" alt="facebook" width={20} height={20}/>
          < Image src="/images/footer/twitter.png" alt="twitter" width={20} height={20}/>
          < Image src="/images/footer/instagram.png" alt="instagram" width={20} height={20}/>
        </div>
      </footer>
    </>
  );
};
export default Footer;
