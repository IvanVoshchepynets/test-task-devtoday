import React, { useEffect, useState } from "react";

const Toast: React.FC<{ id: string; type?: string; duration?: number; onClose: () => void; children: React.ReactNode }> = ({ duration = 4000, onClose, children }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(t);
  }, [duration]);

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(onClose, 300);
      return () => clearTimeout(t);
    }
  }, [visible, onClose]);

  return (
    <div style={{
      marginBottom: 8,
      padding: "8px 12px",
      minWidth: 200,
      borderRadius: 6,
      boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
      transform: visible ? "translateY(0)" : "translateY(8px)",
      opacity: visible ? 1 : 0,
      transition: "all 250ms ease"
    }}>
      {children}
      <button style={{ marginLeft: 8 }} onClick={() => setVisible(false)}>Close</button>
    </div>
  );
};

export default Toast;
