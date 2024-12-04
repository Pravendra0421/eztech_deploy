const Footer = () => {
  return (
    <footer className="animate-footerPulse text-white py-8">
      <div className="container mx-auto text-center">
        {/* Fading text */}
        <h2 className="text-xl font-bold animate-fadeIn mb-4">
          Stay Connected with Us!
        </h2>

        {/* Animated icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="#"
            className="text-blue-400 hover:text-blue-500 animate-bounce"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600 animate-bounce"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="#"
            className="text-red-500 hover:text-red-600 animate-bounce"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>

        {/* Scaling copyright text */}
        <p className="animate-scaleUp">
          © 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
