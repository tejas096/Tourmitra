import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const GuideDetail = () => {
  return (
    <>
      <div className="cardcontainer">
        <div className="card">
          <div className="cardprofile">
            <div className="name">
              <h3>Sanjay Kumar</h3>
              <small>Professional Tour Guide</small>
            </div>
            <div className="cardimage">
              <img
                src="https://plus.unsplash.com/premium_photo-1718146018854-ad4aa928d9c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tour Guide Profile"
              />
            </div>
          </div>
          <div className="cardbody">
            <h1>Welcome Tourists!</h1>
            <h2>Tour Guide Details:</h2>
            <p>
              <span className="det">City:</span> Bhopal, M.P.
            </p>
            <p>
              <span className="det">Contact:</span> sanjaykumar@tourmitra.com
            </p>
            <p>
              <span className="det">Specialities:</span> Walking, Cultural, and
              Food Tours, Private Custom Tours
            </p>
            <p>
              <span className="det">Languages:</span> Hindi, English, French,
              Spanish, Chinese
            </p>
            <p>
              <span className="det">Certified:</span> Licensed NYC Guide, WFTGA
              Certified
            </p>
            <div className="icon">
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </div>
          </div>
          <div className="btn">
            Book this Guide <i className="ri-arrow-right-line" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideDetail;
