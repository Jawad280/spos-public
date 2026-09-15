const Contact = () => {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
            Contact
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-600">
            If you would like to request a demo, enquire about pricing, or
            have any questions about SPOS, feel free to get in touch by email.
          </p>

          <a
            href="mailto:jafthab@gmail.com"
            className="mt-6 inline-block text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600"
          >
            jafthab@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
