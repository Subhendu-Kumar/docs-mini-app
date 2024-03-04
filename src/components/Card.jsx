import PropTypes from "prop-types";
import { FaDownload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, icon, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      className="relative w-60 h-72 bg-zinc-600 rounded-[25px] text-white py-5 px-5 overflow-hidden"
    >
      <img src={icon} alt="" className="size-6" />
      <p className="font-semibold mt-5 text-sm leading-tight">{data.desc}</p>
      <div className="w-full absolute bottom-0 left-0">
        <div className="flex items-center justify-between py-3 px-8 mb-2">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 rounded-full flex justify-center items-center bg-zinc-700">
            {data.close ? <IoClose size=".8em" /> : <FaDownload size=".7em" />}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div className="tag w-full h-14 bg-green-700 flex items-center justify-center">
            <h3 className="text-sm font-semibold">{data.tag.tagDetails}</h3>
          </div>
        ) : (
          <div className="tag w-full h-14 bg-red-700 flex items-center justify-center">
            <h3 className="text-sm font-semibold">Not Available</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    fileSize: PropTypes.string.isRequired,
    close: PropTypes.bool.isRequired,
    tag: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired,
      tagDetails: PropTypes.string,
    }).isRequired,
  }).isRequired,
  icon: PropTypes.string.isRequired,
  reference: PropTypes.object.isRequired,
};

export default Card;
