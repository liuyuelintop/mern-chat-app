import jwt from "jsonwebtoken";

/**
 * Generates a JSON Web Token (JWT) and sets it as an HTTP-only cookie on the response object.
 * This function uses the specified payload and configuration options to create the token and
 * configure the cookie's properties such as expiration, security settings, and access restrictions.
 *
 * @param {Object} options - Configuration options for the token and cookie.
 * @param {Object} options.payload - The data (claims) to be encoded within the JWT.
 * @param {String} [options.secret=process.env.SECRET_KEY] - The secret key used to sign the JWT. Defaults to the environment variable 'SECRET_KEY'.
 * @param {String} [options.cookieName="jwt"] - The name of the cookie to set. Defaults to "jwt".
 * @param {String} [options.expiresIn="15d"] - Specifies the time period that the JWT will be valid for. Can be in seconds (e.g., '3600' for one hour) or a string describing a time span (e.g., '10h' for ten hours, '7d' for seven days, '1m' for one month). Defaults to "15d".
 * @param {Object} [options.cookieOptions={}] - Additional settings for the cookie such as 'httpOnly', 'secure', and 'sameSite'. Defaults to an empty object, allowing for override of default behavior.
 * @param {Response} options.res - The Express.js response object used to send the cookie to the client.
 * @returns {void} - This function does not return a value; it directly sets a cookie on the response object.
 */

const generateTokenAndSetCookie = ({
  payload,
  secret = process.env.JWT_SECRET,
  cookieName = "jwt",
  expiresIn = "15d",
  cookieOptions = {},
  res,
}) => {
  const token = jwt.sign(payload, secret, { expiresIn });

  const defaultCookieOptions = {
    maxAge: 15 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks
    sameSite: "strict", // CSRF attacks
    secure: process.env.NODE_ENV !== "development",
  };

  res.cookie(cookieName, token, { ...defaultCookieOptions, ...cookieOptions });
};

export default generateTokenAndSetCookie;
