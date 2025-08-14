import toast from 'react-hot-toast';

export const showSuccess = (message) => {
  toast.success(message, {
    duration: 3000,
    position: 'top-right',
    style: {
      background: '#495E57',
      color: 'white',
    },
  });
};

export const showError = (message) => {
  toast.error(message, {
    duration: 3000,
    position: 'top-right',
  });
};

export const showLoading = (message) => {
  return toast.loading(message, {
    position: 'top-right',
  });
};