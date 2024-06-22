import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>
            <span className="sm:mx-4">
              Copyright © {new Date().getFullYear()}
            </span>
            {/* <span className="sm:mx-4"><a className="bg-[#181818] text-white" href="https://github.com/AVIN4SH">
          Github Profile
          </a></span> */}
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
