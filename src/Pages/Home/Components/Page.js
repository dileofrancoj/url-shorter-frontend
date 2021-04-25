import PropTypes from "prop-types";

const Page = ({ id, shortUrl }) => {
  return (
    <>
      <span>
        {id} - {shortUrl}
      </span>
      <br />
    </>
  );
};

Page.propTypes = {
  id: PropTypes.number.isRequired,
  shortUrl: PropTypes.string.isRequired,
};

export default Page;
