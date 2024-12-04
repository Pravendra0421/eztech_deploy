import img1 from "../assets/ez logo.jpg";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="loader h-20 w-20 rounded-full border-4  border-gray-300 ">
        <img
          src={img1}
          alt="logo_loading"
          className="rounded-full h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Loader;
