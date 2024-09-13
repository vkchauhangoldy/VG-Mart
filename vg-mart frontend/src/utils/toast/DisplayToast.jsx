import { ToastContainer } from "react-toastify"

const DisplayToast = () => {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
            />
        </>
    )
}

export default DisplayToast;
