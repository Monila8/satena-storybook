import React from "react";
import PropTypes from "prop-types";
import { Logo } from "./Logo";
import "./footer.css";

export const Footer = ({ socialNetworks, darkMode }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo forceMedium darkMode={darkMode} />
        <div className="footer__social-networks">
          <span>
            <svg
              width="62"
              height="61"
              viewBox="0 0 62 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_43_866)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31 49C42.3218 49 51.5 39.8218 51.5 28.5C51.5 17.1782 42.3218 8 31 8C19.6782 8 10.5 17.1782 10.5 28.5C10.5 39.8218 19.6782 49 31 49Z"
                  fill="white"
                />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.6074 24.2445C33.2873 24.1432 32.9193 24.0757 32.5832 24.0757C32.1671 24.0757 31.2709 24.3626 31.2709 24.9195V26.2527H33.3994V28.4971H31.2709V34.6905H29.1265V28.4971H28.0703V26.2527H29.1265V25.122C29.1265 23.4176 29.8627 22 31.639 22C32.2471 22 33.3353 22.0338 33.9275 22.2531L33.6074 24.2445Z"
                fill="#080809"
              />
              <defs>
                <filter
                  id="filter0_d_43_866"
                  x="0.5"
                  y="0"
                  width="61"
                  height="61"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_43_866"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_43_866"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </span>

          <span>
            <svg
              width="62"
              height="61"
              viewBox="0 0 62 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_0_1)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31 49C42.3218 49 51.5 39.8218 51.5 28.5C51.5 17.1782 42.3218 8 31 8C19.6782 8 10.5 17.1782 10.5 28.5C10.5 39.8218 19.6782 49 31 49Z"
                  fill="white"
                />
              </g>
              <g clip-path="url(#clip0_0_1)">
                <path
                  d="M36.9609 25.8201C36.9293 25.1282 36.8194 24.6557 36.6587 24.2423C36.4956 23.8086 36.2397 23.4157 35.909 23.091C35.5844 22.7603 35.1914 22.5043 34.7577 22.3411C34.3442 22.1805 33.8718 22.0707 33.1799 22.0393C32.4867 22.0075 32.2652 22 30.5 22C28.7348 22 28.5133 22.0075 27.8201 22.0391C27.1282 22.0707 26.6558 22.1806 26.2423 22.3413C25.8086 22.5044 25.4157 22.7603 25.091 23.091C24.7603 23.4156 24.5043 23.8085 24.3411 24.2422C24.1805 24.6557 24.0707 25.1282 24.0393 25.82C24.0075 26.5133 24 26.7347 24 28.4999C24 30.2652 24.0075 30.4867 24.0393 31.1799C24.0708 31.8717 24.1807 32.3442 24.3414 32.7577C24.5045 33.1913 24.7604 33.5843 25.0911 33.9089C25.4157 34.2396 25.8087 34.4955 26.2424 34.6586C26.6558 34.8194 27.1283 34.9292 27.8202 34.9608C28.5135 34.9925 28.7349 34.9999 30.5001 34.9999C32.2653 34.9999 32.4868 34.9925 33.18 34.9608C33.8719 34.9292 34.3443 34.8194 34.7578 34.6586C35.6309 34.321 36.3211 33.6308 36.6587 32.7577C36.8195 32.3442 36.9293 31.8717 36.9609 31.1799C36.9925 30.4866 37 30.2652 37 28.5C37 26.7347 36.9925 26.5133 36.9609 25.8201ZM35.7909 31.1266C35.762 31.7604 35.6561 32.1046 35.5671 32.3336C35.3484 32.9005 34.9004 33.3485 34.3335 33.5672C34.1045 33.6562 33.7603 33.7621 33.1265 33.791C32.4413 33.8223 32.2357 33.8289 30.5 33.8289C28.7642 33.8289 28.5587 33.8223 27.8734 33.791C27.2397 33.7621 26.8955 33.6562 26.6664 33.5672C26.3841 33.463 26.1287 33.2968 25.9191 33.0809C25.7032 32.8713 25.537 32.616 25.4328 32.3336C25.3438 32.1046 25.2379 31.7604 25.209 31.1266C25.1778 30.4413 25.1711 30.2357 25.1711 28.5001C25.1711 26.7644 25.1778 26.5589 25.209 25.8735C25.238 25.2397 25.3438 24.8955 25.4328 24.6665C25.537 24.3841 25.7033 24.1287 25.9191 23.9191C26.1287 23.7032 26.3841 23.537 26.6665 23.4329C26.8955 23.3438 27.2397 23.238 27.8735 23.209C28.5588 23.1778 28.7644 23.1711 30.5 23.1711H30.4999C32.2355 23.1711 32.4411 23.1778 33.1265 23.2091C33.7603 23.238 34.1044 23.3439 34.3335 23.4329C34.6158 23.5371 34.8712 23.7033 35.0808 23.9191C35.2967 24.1287 35.4629 24.3841 35.567 24.6665C35.6561 24.8955 35.762 25.2397 35.7909 25.8735C35.8221 26.5588 35.8288 26.7644 35.8288 28.5C35.8288 30.2357 35.8222 30.4412 35.7909 31.1266Z"
                  fill="#080808"
                />
                <path
                  d="M30.5018 25.1641C28.6584 25.1641 27.1641 26.6585 27.1641 28.5019C27.1641 30.3453 28.6584 31.8397 30.5018 31.8397C32.3453 31.8397 33.8397 30.3453 33.8397 28.5019C33.8397 26.6585 32.3453 25.1641 30.5018 25.1641ZM30.5018 30.6686C29.3053 30.6685 28.3352 29.6985 28.3353 28.5018C28.3353 27.3053 29.3053 26.3352 30.5019 26.3352C31.6986 26.3353 32.6686 27.3053 32.6686 28.5018C32.6686 29.6985 31.6985 30.6686 30.5018 30.6686Z"
                  fill="#080808"
                />
                <path
                  d="M34.7514 25.0301C34.7514 25.4608 34.4022 25.81 33.9715 25.81C33.5406 25.81 33.1914 25.4608 33.1914 25.0301C33.1914 24.5992 33.5406 24.25 33.9715 24.25C34.4022 24.25 34.7514 24.5992 34.7514 25.0301Z"
                  fill="#080808"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_0_1"
                  x="0.5"
                  y="0"
                  width="61"
                  height="61"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_1"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_0_1">
                  <rect
                    width="13"
                    height="13"
                    fill="white"
                    transform="translate(24 22)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>
            <svg
              width="62"
              height="61"
              viewBox="0 0 62 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_43_875)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31 49C42.3218 49 51.5 39.8218 51.5 28.5C51.5 17.1782 42.3218 8 31 8C19.6782 8 10.5 17.1782 10.5 28.5C10.5 39.8218 19.6782 49 31 49Z"
                  fill="white"
                />
              </g>
              <path
                d="M38.5 23.539C37.905 23.8 37.271 23.973 36.61 24.057C37.29 23.651 37.809 23.013 38.053 22.244C37.419 22.622 36.719 22.889 35.973 23.038C35.371 22.397 34.513 22 33.577 22C31.761 22 30.299 23.474 30.299 25.281C30.299 25.541 30.321 25.791 30.375 26.029C27.648 25.896 25.235 24.589 23.614 22.598C23.331 23.089 23.165 23.651 23.165 24.256C23.165 25.392 23.75 26.399 24.622 26.982C24.095 26.972 23.578 26.819 23.14 26.578C23.14 26.588 23.14 26.601 23.14 26.614C23.14 28.208 24.277 29.532 25.768 29.837C25.501 29.91 25.21 29.945 24.908 29.945C24.698 29.945 24.486 29.933 24.287 29.889C24.712 31.188 25.918 32.143 27.352 32.174C26.236 33.047 24.819 33.573 23.285 33.573C23.016 33.573 22.758 33.561 22.5 33.528C23.953 34.465 25.675 35 27.532 35C33.568 35 36.868 30 36.868 25.666C36.868 25.521 36.863 25.381 36.856 25.242C37.507 24.78 38.054 24.203 38.5 23.539Z"
                fill="#080809"
              />
              <defs>
                <filter
                  id="filter0_d_43_875"
                  x="0.5"
                  y="0"
                  width="61"
                  height="61"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_43_875"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_43_875"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </span>
        </div>

        <p className="footer__text">
          <b>Líneas de atención al cliente</b>
        </p>

        <p className="footer__text">
          Lunes a viernes de 6:00am a 9:00pm.
          <br />
          Sábados, domigos y festivos de 6:00am a 6:00pm
        </p>

        <p className="footer__text">
          (601) 390 6962
          <br />
          Línea directa Bogotá
        </p>

        <p className="footer__text">
          Avenida El Dorado # 103-08 Interior 11 Bogotá-Colombia.
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};
