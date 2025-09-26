const Footer = (): React.ReactElement => {
  const year = new Date().getFullYear();

  return (
    <footer className="color bg-black p-5 text-white">
      Copyright {year} All right reserved
    </footer>
  );
};

export default Footer;
