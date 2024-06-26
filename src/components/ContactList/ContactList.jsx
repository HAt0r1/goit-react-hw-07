import { useSelector, useDispatch } from "react-redux";
import { filterContacts, selectLoading } from "../../redux/selectors";
import { fetchContacts } from "../../redux/contactsOps";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";

import style from "./ContactList.module.css";
import { useEffect } from "react";

const ContactList = () => {
  const dispatch = useDispatch();
  const filterUsers = useSelector(filterContacts);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul className={style.list}>
        {filterUsers.map((contact) => {
          return (
            <li key={contact.id} className={style.listItem}>
              <Contact info={contact} />
            </li>
          );
        })}
      </ul>
      {isLoading && <Loader />}
    </>
  );
};

export default ContactList;
