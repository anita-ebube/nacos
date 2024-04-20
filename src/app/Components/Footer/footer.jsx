const Footer = () => {
  return (
    <>
      <footer className="bg-[#518310] flex justify-between align-center gap-5 px-5 lg:px-10 py-7">
        <div>
          <img src="/images/footer/noteplug.png" alt="Logo" />
        </div>
        <div>
          <p className="text-white text-sm lg:text-2xl">
            2024 @ Noteplug | All rights resevered
          </p>
        </div>
        <div className="flex justify-between align-center gap-3 lg:gap-5">
          <img src="/images/footer/facebook.png" alt="" />
          <img src="/images/footer/twitter.png" alt="" />
          <img src="/images/footer/instagram.png" alt="" />
        </div>
      </footer>
    </>
  );
};
export default Footer;
