import { BsTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";

import style from "./Contact.module.css";

const Contact = ({ info: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div>
          <p className={style.data}>
            <FaUser />
            {name}
          </p>
        </div>
        <div>
          <p className={style.data}>
            <BsTelephoneFill /> {number}
          </p>
        </div>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={style.button}
        type="button"
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
