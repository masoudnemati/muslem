import Link from "next/link";

const RightNav = ({ open }) => {
  return (
    <div>
      <ul className="nav-ul" open={open}>
        <Link href="/">
          <li className="home-li">
            <a>صفحه اصلی</a>
          </li>
        </Link>
        <Link href="/songs">
          <li className="songs-li">
            <a>احکام نماز</a>
          </li>
        </Link>
        <Link href="/videos">
          <li className="video-li">
            <a>وضو و غسل</a>
          </li>
        </Link>
        <Link href="/about-us">
          <li className="about-us-li">
            <a>نمازهای پنج‌گانه</a>
          </li>
        </Link>
        <Link href="/contact-us">
          <li className="contact-us-li">
            <a>دیگر نمازها</a>
          </li>
        </Link>

        <style jsx>{`
          ul {
            padding-right: 30px;
            list-style: none;
            display: flex;
            flex-flow: row-reverse nowrap;
            margin-top: 15px;
          }

          li {
            padding: 15px 30px;
            margin: 0;
            cursor: pointer;
          }

          /* .home-li {
            background-image: url("/icons/icons8-home-24.png");
            background-repeat: no-repeat;
            background-position: right center;
          }

          .songs-li {
            background-image: url("/icons/icons8-musical-notes-24.png");
            background-repeat: no-repeat;
            background-position: right center;
          }

          .video-li {
            background-image: url("/icons/icons8-video-call-24.png");
            background-repeat: no-repeat;
            background-position: right center;
          }

          .about-us-li {
            background-image: url("/icons/icons8-about-24.png");
            background-repeat: no-repeat;
            background-position: right center;
          }

          .contact-us-li {
            background-image: url("/icons/icons8-phone-24.png");
            background-repeat: no-repeat;
            background-position: right center;
          } */

          @media only screen and (max-width: 780px) {
            .nav-ul {
              flex-flow: column;
              direction: rtl;
              color: black;
              background-color: rgba(255, 255, 255, 0.94);
              position: fixed;
              margin: 0;
              transform: ${open ? "translateX(0)" : "translateX(100%)"};
              top: 0;
              right: 0;
              height: 100vh;
              width: 65vw;
              padding-top: 6rem;
              transition: transform 0.3s ease-in-out;
            }
          }
        `}</style>
      </ul>
    </div>
  );
};

export default RightNav;