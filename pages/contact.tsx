import { NextPage } from 'next';
import Head from 'next/head';

import ContactForm from '../components/Contact/ContactForm';

const ContactPage: NextPage = () => (
  <>
    <Head>
      <title>Contact Me</title>
      <meta name="description" content="send me a message" />
    </Head>
    <ContactForm />
  </>

);

export default ContactPage;
