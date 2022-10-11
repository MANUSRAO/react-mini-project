const Footer = () => {
  const today = new Date();
  return (
    <div className="footing">
      <p>© {today.getFullYear()} Manu S Rao</p>
    </div>
  );
};

export default Footer;
