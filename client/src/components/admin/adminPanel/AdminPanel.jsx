import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadUser, logoutUser } from "../../../redux/actions/user";
import { useEffect, useState } from "react";
import {
  MdDesignServices,
  MdAccountBox,
  MdMenu,
  MdDashboard,
  MdOutlineCastForEducation,
  MdNotificationsActive,
  MdOutlineSupervisedUserCircle,
} from "react-icons/md";
import { AiOutlineLogout, AiFillProject, AiFillMessage } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaBloggerB } from "react-icons/fa";
import {
  RiLockPasswordFill,
  RiMenuFoldLine,
  RiMenuUnfoldFill,
} from "react-icons/ri";
import { toast } from "react-hot-toast";
import Loader from "../../layout/Loading/Loader";

const AdminPanel = () => {
  const [show, setshow] = useState(false);
  const [topBarshow, setTopBarshow] = useState(false);
  const [tab, setTab] = useState(window.location.pathname);

  const navitem = [
    {
      to: "/adminpanel",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      to: "account",
      name: "Account",
      icon: <MdAccountBox />,
    },
    {
      to: "qualifications",
      name: "Qualifications",
      icon: <MdOutlineCastForEducation />,
    },
    {
      to: "skills",
      name: "Skills",
      icon: <GiSkills />,
    },
    {
      to: "projects",
      name: "Projects",
      icon: <AiFillProject />,
    },
    {
      to: "services",
      name: "Services",
      icon: <MdDesignServices />,
    },
    {
      to: "blogs",
      name: "Blogs",
      icon: <FaBloggerB />,
    },
    {
      to: "messages",
      name: "Messages",
      icon: <AiFillMessage />,
    },
  ];

  const dispatch = useDispatch();
  const { isAuthenticated, loading, user } = useSelector(
    (state) => state.login
  );
  const {
    loading: adminLoading,
    message: adminMessage,
    error: adminError,
  } = useSelector((state) => state.admin);

  const toggle = () => {
    setshow(!show);
  };

  const logoutHandler = () => {
    setTopBarshow(!topBarshow);
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (adminMessage) {
      toast.success(adminMessage);
      dispatch({ type: "clearMessage" });
    }
    if (adminError) {
      toast.error(adminError);
      dispatch({ type: "clearErrors" });
    }
    dispatch(loadUser());
  }, [dispatch, adminMessage, adminError]);

  if (!isAuthenticated) return <Navigate to="/admin" />;
  return loading || adminLoading ? (
    <Loader />
  ) : (
    <>
      <div className="adminpanel_container">
        <div
          className={`adminpanel_content ${
            show ? "navbar_space_toggle" : null
          }`}
        >
          <div
            className={`topbar_header ${show ? "navbar_space_toggle" : null}`}
          >
            <div className="header_toggle" onClick={toggle}>
              {show ? <RiMenuFoldLine /> : <RiMenuUnfoldFill />}
            </div>
            <div className="header_item">
              <Link>
                <MdNotificationsActive />
                <p>{1}</p>
              </Link>
              <img
                className="subMenuBtn"
                src={user.avatar.url}
                alt="user"
                onMouseEnter={() => setTopBarshow(true)}
                onMouseLeave={() => setTopBarshow(false)}
              />
              <div
                className={`topbarWrapMenu ${
                  topBarshow ? "topbarWrapMenuOpen" : null
                }`}
                onMouseOver={() => setTopBarshow(true)}
                onMouseLeave={() => setTopBarshow(false)}
              >
                <div className="subMenu">
                  <div className="userInfo">
                    <img src={user.avatar.url} alt="user" />
                    <h3>{` ${user.fname} ${user.lname}`}</h3>
                  </div>
                  <hr />
                  <Link
                    to={"/adminpanel"}
                    onClick={() => setTopBarshow(!topBarshow)}
                  >
                    <MdOutlineSupervisedUserCircle />
                    <p>Profile</p>
                    <span>{`>`}</span>
                  </Link>
                  <Link onClick={() => setTopBarshow(!topBarshow)}>
                    <RiLockPasswordFill />
                    <p> Change Password</p>
                    <span>{`>`}</span>
                  </Link>
                  <Link onClick={logoutHandler}>
                    <AiOutlineLogout />
                    <p> Logout</p>
                    <span>{`>`}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`sidebar ${show ? "slider" : null}`}>
            <div className="navbar_content">
              <div>
                <div className="sidebar_header">
                  <h1>CP</h1>
                </div>

                <div className="nav_list">
                  {navitem.map((item, index) => {
                    return (
                      <>
                        <Link
                          key={index}
                          to={item.to}
                          className={`${tab === item.to ? "active" : null}`}
                          onClick={() => setTab(item.to)}
                        >
                          <div>{item.icon}</div>
                          <p>{item.name}</p>
                          <span>{`>`}</span>
                        </Link>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="item_content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
