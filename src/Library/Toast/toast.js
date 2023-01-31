import { toast } from "react-toastify";

let position = "top-center";
const Toast = {
  sucess: function (data) {
    return toast.success(data, {
      position: position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
  error: function (data) {
    return toast.error(data, {
      position: position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
  warning: function (data) {
    toast.warn(data, {
      position: position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
  info: function (data) {
    toast.info(data, {
      position: position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
};

export default Toast;
