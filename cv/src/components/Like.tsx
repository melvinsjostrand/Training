import { useState } from "react";
import { IoIosHeartEmpty , IoMdHeart  } from "react-icons/io";

interface Props{
    onClick: () => void;
}

const Like =({onClick}: Props) => {
    const [status, setStatus] = useState(true);

    const toggle = () => {
        setStatus (!status);
        onClick();
    }

    if (status) return <IoMdHeart color="#ff6b81" onClick={toggle} />;
        return <IoIosHeartEmpty onClick={toggle} />;
};

export default Like