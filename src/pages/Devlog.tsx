const DevLog = () => {
  return (
    <main>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-2 py-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
            Development Log
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600">
            A record of what has been implemented in SPOS and what we plan to work on next
          </p>
        </div>
      </section>

      {/* Implemented */}
      <section className="mx-auto max-w-6xl px-2 py-4">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Implemented
        </h2>

        <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-7 text-gray-600">
          <li>
            • Multi-tenant restaurant system with organization-based data
            separation.
          </li>
          <li>
            • Session-based authentication and role-based access control.
          </li>
          <li>
            • Dine-in and takeaway order management with order lifecycle
            tracking.
          </li>
          <li>
            • Kitchen Order Tickets with real-time order status updates.
          </li>
          <li>
            • Inventory management for categories, items, and modifiers.
          </li>
          <li>
            • Restaurant table layout and table management.
          </li>
          <li>
            • Payment recording with support for discounts, GST, and service
            charges.
          </li>
          <li>
            • Receipt and kitchen order ticket printing.
          </li>
          <li>
            • Order auditing through historical order snapshots.
          </li>
          <li>
            • Daily sales summaries and payment method reporting.
          </li>
          <li>
            • Backend and database deployed for production use.
          </li>
          <li>
            • POS frontend packaged as a desktop application using Tauri.
          </li>
        </ul>
      </section>

      {/* Architecture */}
      <section className="mx-auto max-w-6xl px-2 py-4">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Backend Architecture
        </h2>

        <div className="mt-4 max-w-3xl text-sm leading-7 text-gray-600">
          <p>
            SPOS uses a multi-tenant backend where each restaurant operates
            within its own organization. Requests are associated with an
            organization before accessing organization-owned resources.
          </p>

          <p className="mt-3">
            Role-based access control is used to separate the capabilities
            available to administrators, POS users, and kitchen staff.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}/hld.png`}
            alt="SPOS backend architecture diagram"
            className="h-full max-w-5xl"
          />
        </div>
      </section>

      {/* Technology */}
      <section className="mx-auto max-w-6xl px-2 py-4">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Technology
        </h2>

        <ul className="mt-6 max-w-3xl space-y-2 text-sm leading-7 text-gray-600">
          <li>• React + TypeScript</li>
          <li>• Tauri</li>
          <li>• Fastify + Node.js</li>
          <li>• PostgreSQL</li>
          <li>• Prisma</li>
          <li>• Tailwind CSS</li>
          <li>• WebSockets</li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="mx-auto max-w-6xl px-2 py-4">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Next Steps
        </h2>

        <ul className="mt-6 max-w-3xl space-y-3 text-sm leading-7 text-gray-600">
          <li>
            • Build a customer-facing frontend for browsing menus and placing
            orders.
          </li>
          <li>
            • Build an admin dashboard for sales analytics and operational
            reporting.
          </li>
          <li>
            • Continue improving the POS based on real-world usage and
            feedback.
          </li>
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-2 py-4">
        <p className="text-sm text-gray-500">
          SPOS is an ongoing project and this page will be updated as
          development continues.
        </p>
      </section>
    </main>
  );
};

export default DevLog;