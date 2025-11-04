
import "./globals.css";
import PropTypes from "prop-types";


export const metadata = {
  title: "e-commerce",
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
