import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../components/Footer";

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }
  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "0";
  }

  function onLogout(e) {
    e.preventDefault();

    // todo
    navigate("/");
  }

  return (
    <>
      <div className="min-h-[90vh]">
        <div className="absolute left-0 z-50 w-full drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer">
              <FiMenu
                size={"32px"}
                onClick={changeWidth}
                className="m-4 font-bold text-white"
              />
            </label>
          </div>
          <div className="w-0 drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="h-[100%] relative w-48 p-4 menu sm:w-80 bg-base-200 text-base-content">
              <li className="absolute z-50 w-fit right-2">
                <button onClick={hideDrawer}>
                  <AiFillCloseCircle size={24} />
                </button>
              </li>
              <li>
                <Link to="/"> Home </Link>
              </li>
              {isLoggedIn && role == "ADMIN" && (
                <li>
                  <Link to="/admin/dashboard">Admin Dashboard</Link>
                </li>
              )}
              <li>
                <Link to="/about"> About </Link>
              </li>
              <li>
                <Link to="/contact"> Contact Us</Link>
              </li>
              <li>
                <Link to="/courses"> All Courses </Link>
              </li>
              {!isLoggedIn ? (
                <li className="absolute bottom-4 w-[90%]">
                  <div className="flex items-center justify-center w-full">
                    <button className="w-full px-4 py-1 font-semibold text-white bg-purple-500 rounded-md hover:bg-purple-700">
                      <Link to="/signin">Login</Link>
                    </button>
                    <button className="w-full px-4 py-1 font-semibold text-white bg-pink-500 rounded-md hover:bg-pink-700">
                      <Link to="/signup">Signup</Link>
                    </button>
                  </div>
                </li>
              ) : (
                <li className="absolute bottom-4 w-[90%]">
                  <div className="flex items-center justify-center w-full">
                    <button className="w-full px-4 py-1 font-semibold text-white bg-purple-500 rounded-md hover:bg-purple-700">
                      <Link to="/user/profile">Profile</Link>
                    </button>
                    <button className="w-full px-4 py-1 font-semibold text-white bg-pink-500 rounded-md hover:bg-pink-700">
                      <Link onClick={onLogout}>Logout</Link>
                    </button>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {children}
        <Footer />
      </div>
    </>
  );
}

export default HomeLayout;
