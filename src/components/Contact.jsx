import React from "react";
import PropTypes from "prop-types";

const Contact = (props) => {
  const { icon, text, link } = props;
  return (
    <button className="rounded border border-stone-300 px-9 py-3 flex flex-row items-center justify-center gap-2 flex-1">
      <img src={icon} className="w-6 h-6" />
      <span className="text-stone-300 text-base leading-normal">{text}</span>
    </button>
  );
};

Contact.propTypes = {};

export default Contact;
