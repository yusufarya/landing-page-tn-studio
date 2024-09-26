import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function PageTitle({ section, heading, children }) {
  return (
    <div className="mx-auto w-full px-2 text-center">
      <Typography variant="lead" className="font-semibold">{section}</Typography>
      <Typography variant="h2" color="blue-gray" className="my-3">
        {heading}
      </Typography>
      <Typography variant="lead" className="text-blue-gray-500">
        {children}
      </Typography>
    </div>
  );
}

PageTitle.propTypes = {
  section: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
