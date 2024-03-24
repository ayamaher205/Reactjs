import * as React from "react";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from '../../Store/Slices/profile'
const SignUp = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  const dispatch = useDispatch();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z]+$/;
  const [userInfoErrs, setUserInfoErrors] = useState({
    nameErr: "",
    emailErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
    imageErr: "",
  });

  useEffect(() => {
    if (
      !userInfoErrs.nameErr &&
      !userInfoErrs.emailErr &&
      !userInfoErrs.passwordErr &&
      !userInfoErrs.confirmPasswordErr &&
      !userInfoErrs.imageErr &&
      isFormSubmitted
    ) {
      console.log( "request ur api" );
      dispatch(addUser( userInfo ));
    }
  }, [userInfoErrs]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setUserInfo({
          ...userInfo,
          name: e.target.value,
        });
        break;

      case "email":
        setUserInfo({
          ...userInfo,
          email: e.target.value,
        });
        break;

      case "password":
        setUserInfo({
          ...userInfo,
          password: e.target.value,
        });
        break;

      case "confirmPassword":
        setUserInfo({
          ...userInfo,
          confirmPassword: e.target.value,
        });
        break;
      case "img":
        setUserInfo({
          ...userInfo,
          image: e.target.value,
        });
        break;
      default:
        console.log("submit");
    }
  };

  const validateForm = () => {
    setUserInfoErrors({
      nameErr: !userInfo.name
        ? "name is required"
        : !nameRegex.test(userInfo.name)
        ? "name should contain no spaces"
        : "",
      passwordErr: !userInfo.password
        ? "password is required"
        : userInfo.password.length < 8
        ? "should be at least 8 chars"
        : userInfo.password.length > 12
        ? "max length is 12 chars"
        : "",
      confirmPasswordErr: !userInfo.confirmPassword
        ? "confirm your password"
        : userInfo.password !== userInfo.confirmPassword
        ? "should match the password"
        : "",
      emailErr: !userInfo.email
        ? "email is required"
        : !emailRegex.test(userInfo.email)
        ? " should be in email format"
        : "",
      imageErr: !userInfo.image ? "image is required" : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    console.log(userInfo);
    validateForm();
  };

  const clearForm = () => {
    setUserInfo({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: "",
    });
  };

  return (
    <Fragment>
      <section className="vh-100" sx={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" sx={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">
                              Your Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              onChange={handleChange}
                            />
                            {userInfoErrs.nameErr && (
                              <p style={{ color: "red" }}>
                                {userInfoErrs.nameErr}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" >
                              Your Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              onChange={handleChange}
                            />
                            {userInfoErrs.emailErr && (
                              <p style={{ color: "red" }}>
                                {userInfoErrs.emailErr}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" >
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              onChange={handleChange}
                            />
                            {userInfoErrs.passwordErr && (
                              <p style={{ color: "red" }}>
                                {userInfoErrs.passwordErr}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">
                              Repeat your password
                            </label>
                            <input
                              type="password"
                              name="confirmPassword"
                              className="form-control"
                              onChange={handleChange}
                            />
                            {userInfoErrs.confirmPasswordErr && (
                              <p style={{ color: "red" }}>
                                {userInfoErrs.confirmPasswordErr}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" >
                              upload image
                            </label>
                            <input
                              type="file"
                              name="img"
                              accept="image/*"
                              onChange={handleChange}
                            />
                            {userInfoErrs.imageErr && (
                              <p style={{ color: "red" }}>
                                {userInfoErrs.imageErr}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            name="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SignUp;
