import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import socialMediaAccounts from "../Footer/socialMediaAccounts";

const SocialMediaAccounts = () => {
  return (
    <>
      <section id="contact" className="overflow-hidden py-0 md:py-0 lg:py-0">
        <div className="container">
          <div className="mt-8 flex space-x-4">
            <a
              href={socialMediaAccounts["linkedin"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-primary-dark text-4xl text-primary duration-300 lg:text-5xl" />
            </a>
            <a
              href={socialMediaAccounts["instagram"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-primary-dark text-4xl text-primary duration-300 lg:text-5xl" />
            </a>
            {/* <a
              href="https://www.youtube.com/your-youtube-channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="hover:text-primary-dark lg:text-5xl text-4xl text-primary duration-300" />
            </a> */}
            <a
              href={socialMediaAccounts["twitter"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-primary-dark text-4xl text-primary duration-300 lg:text-5xl" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMediaAccounts;
