import PropTypes from 'prop-types';
import Xicon from "../assets/cross-icon.png"

const Toast = ({
    message,
    subMessage,
    onClose,
    position = "bottom-right",
    bgColor = "bg-white",
    titleColor = "text-black",
    descriptionColor = "text-[#5C5C5C]"
}) => {
    const positionClasses = {
        "top-right": "top-6 right-4",
        "bottom-right": "bottom-6 right-4",
        "top-left": "top-6 left-4",
        "bottom-left": "bottom-6 left-4",
        "top-center": "top-6 left-1/2 transform -translate-x-1/2",
        "bottom-center": "bottom-6 left-1/2 transform -translate-x-1/2",
    };

    return (
        <div
            className={`${bgColor} p-4 sm:p-[18px] flex items-start justify-between w-[90%] sm:w-full max-w-[390px] border border-[#7CDF79] rounded-[10px] fixed z-50 shadow-md ${positionClasses[position] || positionClasses["bottom-right"]}`}
        >
            <div className="pr-2">
                <p className={`text-[16px] sm:text-[18px] font-semibold ${titleColor}`}>{message}</p>
                <p className={`text-[13px] sm:text-[14px] font-semibold ${descriptionColor}`}>{subMessage}</p>
            </div>
            <button className='cursor-pointer shrink-0' onClick={onClose}>
                <img className='w-4 sm:w-auto' src={Xicon} alt="Close" />
            </button>
        </div>
    );
};

Toast.propTypes = {
    message: PropTypes.string.isRequired,
    subMessage: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    position: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
};

export default Toast;
