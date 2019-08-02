import React from "react";
const Ctx = React.createContext();

const ToastContainer = props => (
  <div style={{ position: "fixed", right: 0, bottom: 0 }} {...props} />
);

const Toast = ({ children, onDismiss }) => (
  <div
    style={{
      backgroundColor: "#16A085",
      color: "#FFFFFF",
      cursor: "pointer",
      fontSize: "16px",
      margin: "12px",
      padding: "12px 24px",
      borderRadius: "4px",
    }}
    onClick={onDismiss}
  >
    {children}
  </div>
);


export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const showToast = content => {
    const id = Date.now();
    const toast = { content, id };
    setTimeout(() => removeToast(id), 3000);
    setToasts([toast]);
  };

  const removeToast = id => {
    const newToasts = toasts.filter(t => t.id !== id);
    setToasts(newToasts);
  };

  const onDismiss = id => () => removeToast(id);

  return (
    <Ctx.Provider value={{ showToast, removeToast }}>
      {children}
      <ToastContainer>
        {toasts.map(({ content, id, ...rest }) => (
          <Toast key={id} Toast={Toast} onDismiss={onDismiss(id)} {...rest}>
            {content}
          </Toast>
        ))}
      </ToastContainer>
    </Ctx.Provider>
  );
}


export const useToasts = () => React.useContext(Ctx);
