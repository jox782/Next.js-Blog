import { Fragment } from "react";
import ContactForm from "../../components/contact/contact-form";
import Head from "next/head";

function Contact() {
  return (
    <Fragment>
      <Head>
        <title> Contact Me</title>
        <meta name="description" content="Send me your messages" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
export default Contact;
