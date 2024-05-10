import { useSelector, useDispatch } from "react-redux";
import { filterContacts, selectContacts } from "../../redux/selectors";
import { fetchContacts } from "../../redux/operations";

import Contact from "../Contact/Contact";

import style from "./ContactList.module.css";
import { useEffect } from "react";

const ContactList = () => {
  const dispatch = useDispatch();
  const filterUsers = useSelector(filterContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={style.list}>
      {filterUsers.map((contact) => {
        return (
          <li key={contact.id} className={style.listItem}>
            <Contact info={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
