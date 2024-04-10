import React  from "react";

const Message = ({ title, props }: { title: string; props: React.HTMLProps<HTMLParagraphElement> }) => {
  return (
    <>
      <p {...props}>{title}</p>
    </>
  );
};

export default Message;
