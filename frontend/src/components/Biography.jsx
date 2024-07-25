import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            At ChikitsaSamaya, we’re dedicated to enhancing your healthcare
            experience through our innovative appointment system. Our mission is
            to provide a seamless and user-friendly platform that simplifies the
            process of scheduling and managing your medical appointments. We
            understand that your time is valuable, which is why our system is
            designed to minimize wait times and ensure you receive prompt,
            personalized care.
          </p>
          <p>
            Our appointment system integrates cutting-edge technology with a
            commitment to patient satisfaction. we strive to make your
            interactions with our healthcare services as smooth and efficient as
            possible. Our goal is to offer you peace of mind, knowing that your
            appointments are well-managed and tailored to fit your needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
