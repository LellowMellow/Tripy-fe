import toast from "react-simple-toasts";

export function Toast(message) {
  toast(message, {
    clickClosable: true,
    render: (message) => (
      <div
        style={{
          background: "rgba(29, 29, 31, 0.8)",
          backdropFilter: "blur(5px)",
          borderRadius: "30px",
          boxShadow: "0 2px 2px 2px rgba(0, 0, 0, 0.1)",
          color: "#F9F9F9",
          padding: "20px",
          minWidth: "286px",
          height: "60px",
          fontFamily: "Noto Sans KR",
          fontSize: "16px",
          textAlign: "center",
        }}
      >
        {message}
      </div>
    ),
  });
}

export default Toast;
