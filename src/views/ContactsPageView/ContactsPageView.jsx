import Contacts from "../../components/Contacts/Contacts";
import Container from "../../components/Container/Container";
import s from "./ContactsPageView.module.css";
const ContactsPageView = () => {
  return (
    <Container>
      <section className={s.section}>
        <Contacts />
      </section>
    </Container>
  );
};
export default ContactsPageView;
