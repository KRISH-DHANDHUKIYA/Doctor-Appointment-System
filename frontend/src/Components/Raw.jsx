import { FaPhoneAlt, FaTwitter, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { GrGooglePlus } from "react-icons/gr";

const Raw = () => {
  return (
    <section
      className="topbar py-2 border-bottom "
      style={{ backgroundColor: "#2AC28E" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT → visible from 768px and up */}
          <div className="col-lg-9 d-none d-md-block ">
            <ul className="d-flex flex-wrap gap-4 align-items-center justify-content-center justify-content-lg-start list-unstyled mb-0">
              <li>
                <a
                  href="tel:123456789"
                  className="text-decoration-none text-white"
                >
                  <FaPhoneAlt className="me-1" />
                  +1 (700) 230-0035
                </a>
              </li>

              <li>
                <a
                  href="mailto:support@gmail.com"
                  className="text-decoration-none text-white"
                >
                  <MdEmail className="me-1" />
                  support@gmail.com
                </a>
              </li>

              <li className="text-white">
                <FaLocationDot className="me-1" />
                2767 Sunrise Street, NY 1002, USA
              </li>
            </ul>
          </div>

          {/* RIGHT SOCIAL ICONS */}
          <div
            className="col-lg-3 d-flex justify-content-center 
                d-md-none d-lg-flex justify-content-lg-end"
          >
            <ul className="d-flex gap-3 list-unstyled mb-0">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaFacebookF />
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaTwitter />
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <IoLogoYoutube />
                </a>
              </li>

              <li>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <GrGooglePlus />
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Raw;
