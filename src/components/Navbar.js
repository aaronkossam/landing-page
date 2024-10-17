import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* /* Navbar/* */}
      <div className=" flex gap-8  mt-9 mr-3 ml-3 lg:flex justify-between ">
        <img src="/asset/images/logo.svg" alt="" className=" lg:hidden w-28 " />
        <img src="/asset/images/logo.svg" alt="" className=" hidden lg:flex" />
        <ul className=" flex gap-4 font-primary text-sm">
          <li>
            <a href=" #"> Features</a>
          </li>
          <li>
            {" "}
            <a href=" #"> Team</a>
          </li>
          <li>
            {" "}
            <a href=" #"> Sign In</a>
          </li>
        </ul>
      </div>

      {/* /* Body/* */}
      <div className=" lg:flex flex-row-reverse lg:mt-8  ">
        <div className=" mt-10 ">
          <img
            src="/asset/images/illustration-1.svg"
            className=" lg:w-96"
            alt=""
          />
        </div>
        <div>
          <h1 className=" font-primary font-bold pl-2 lg:-ml-96  pr-5 text-3xl text-center mt-2 mb-2 ">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className=" font-primary text-xm text-center  ">
            {" "}
            Fylo stores your most important files in one secure location. access
            them wherever you need, share, and collaborate with friends, family,
            and co-worker{" "}
          </p>
          <input
            placeholder="Enter your email"
            className="  outline outline-slate-400 ml-8 pr-14 pl-12 pt-2 pb-4 mt-2 rounded-md "
          ></input>
          <button className=" pr-28 pl-28  ml-8 font-primary font-bold bg-cyan-500  text-sm  mb-3 rounded-md text-white pt-3 pb-3 mt-6  ">
            {" "}
            Get Started
          </button>
        </div>
      </div>

      {/* /* other section/* */}
      <div className=" lg:bg-[ url('/asset/images/illustration-2.svg')]">
        <div className=" mt-10  ">
          <img
            src="/asset/images/illustration-2.svg"
            className=" lg:hidden"
            alt=""
          />
        </div>
        <h2 className=" font-primary font-bold  text-xl text-center mt-9 mb-2">
          Stay productive, wherever you are
        </h2>
        <p className=" font-primary text-xm text-left ml-2 mt-5  ">
          {" "}
          Never let location be an issue when accessing your files.Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className=" font-primary text-xm text-left ml-2 mt-5  ">
          {" "}
          Securely share files and folders with friends <br></br>
          family and colleagues for live collaboration.No<br></br>
          email attachments required!
        </p>
        {/* /* link /* */}
        <p className=" text-center mt-16 text-xl mb-10 text-green-400 ">
          <a href=" #"> See how Flyo works</a>
          <hr className="  mr-16 ml-16 mt-3"></hr>
        </p>
      </div>

      {/* /* card/* */}
      <div className=" bg-slate-50 border-l-slate-200 shadow-md p-5 mr-3 ml-3 mb-3">
        <p className=" text-sm">
          Flyo has improved our team productivity by an order of magnitude.Since
          making the switch our team has become a well-oilded collaboration
          machine
        </p>
        <div className=" flex gap-2 mt-3">
          <img
            src="/asset/images/avatar-testimonial.jpg"
            className=" rounded-full w-14 h-14 "
            alt=""
          />
          <h3>
            <span className=" font-bold"> Kyle Burton</span>
            <p>Founder & ceo of Huddle</p>
          </h3>
        </div>
      </div>

      {/* /*section/* */}
      <div className=" bg-purple-400 mt-20 pt-9 lg:grid grid-cols-2  lg:pb-6">
        <div className=" lg:ml-9">
          <h3 className=" font-primary font-bold  text-2xl text-center mt-2 mb-2  lg:text-left lg:ml-64">
            Get early access today
          </h3>
          <p className=" font-primary text-xm text-center lg:text-left lg:ml-64 ">
            {" "}
            it only takes a minute to sign up and our free starter tier is
            extremely generous.if you have any questions , our support team
            would be happy to help you
          </p>
        </div>

        <div className=" lg:grid lg:ml-32 lg:mr-32">
          <input
            placeholder="Enter your email"
            className="  ml-10 pr-14 pl-12 pt-2 pb-4 mt-6 rounded-md "
          ></input>
          <button className=" pr-28 pl-20 ml-10  font-primary font-bold bg-cyan-500  text-sm  mb-3 rounded-md text-white pt-3 pb-3 mt-6  lg:mr-44 ">
            {" "}
            Get Started Fr free
          </button>
        </div>
      </div>

      {/* /*Footer/* */}
      <div className=" bg-purple-900  pt-10 pl-6 pb-4 lg:grid grid-cols-3 lg:pb-5">
        <div>
          <img
            src="/asset/images/logo.svg"
            className=" text-white pb-6"
            alt=""
          />
          <p className=" pb-3  text-white font-medium">Phone:+-543-123-4567</p>
          <p className=" pb-3  text-white font-medium">example@fylo.com</p>
        </div>
        <div>
          <ul className=" grid gap-2  text-white font-medium  lg:pt-16">
            <li> About Us</li>
            <li> Jobs</li>
            <li> Press</li>
            <li> Blog</li>
          </ul>
        </div>

        <div>
          <ul className=" mt-8   text-white font-medium lg:pt-9 ">
            <li className=" text-2xl mb-3">Contact Us</li>
            <li className=" mb-3">Terms</li>
            <li className=" mb-3"> Privacy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
