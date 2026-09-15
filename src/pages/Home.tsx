import { useState } from "react";

type Role = "ADMIN" | "USER" | "KITCHEN";

type WorkflowStep = {
  title: string;
  description: string;
  image: string;
};

type Workflow = {
  title: string;
  description: string;
  steps: WorkflowStep[];
};

const screenshot = (name: string) => `${import.meta.env.BASE_URL}screenshots/${name}`;

const roleWorkflows: Record<Role, Workflow[]> = {
  ADMIN: [
    {
      title: "User Management",
      description:
        "Create and manage restaurant staff accounts and assign their roles.",
      steps: [
        {
          title: "User list",
          description:
            "View the users currently registered in the restaurant.",
          image: screenshot("users_list.png"),
        },
        {
          title: "Create user",
          description:
            "Open the user form and enter the new user's details and role.",
          image: screenshot("create_user.png"),
        },
        {
          title: "User created",
          description:
            "The new user appears in the user list and can now access the system.",
          image: screenshot("users_list_updated.png"),
        },
      ],
    },

    {
      title: "Inventory",
      description:
        "Manage the categories, items, and modifiers available in the POS.",
      steps: [
        {
          title: "Categories",
          description:
            "View and manage the categories used to organize POS items.",
          image: screenshot("inventory.png"),
        },
        {
          title: "Create category",
          description: "Add a new category",
          image: screenshot("create_category.png"),
        },
        {
          title: "Manage item",
          description:
            "Add a new item or manage existing items and configure basic information.",
          image: screenshot("manage_item.png"),
        },
        {
          title: "Modifiers",
          description:
            "Configure modifiers and options that can be added to the items in this category.",
          image: screenshot("manage_modifier.png"),
        },
      ],
    },

    {
      title: "Table Layout",
      description:
        "Configure the restaurant's table layout for dine-in orders.",
      steps: [
        {
          title: "Current layout",
          description:
            "View the current arrangement of restaurant tables.",
          image: screenshot("table_layout.png"),
        },
        {
          title: "Edit layout",
          description:
            "Add, remove, and reposition tables to match the restaurant.",
          image: screenshot("create_table.png"),
        },
        {
          title: "Updated layout",
          description:
            "The updated table layout is reflected in the POS.",
          image: screenshot("table_layout_updated.png"),
        },
      ],
    },

    {
      title: "Orders",
      description:
        "View and manage orders from different days.",
      steps: [
        {
          title: "Order history",
          description:
            "View completed, cancelled, and other orders recorded in SPOS. Filters and sorting enabled",
          image: screenshot("orders.png"),
        },
        {
          title: "Order Timeline",
          description:
            "Review the details of an individual order.",
          image: screenshot("orders_1.png"),
        },
        {
          title: "Order Receipts",
          description:
            "Review the receipts of an individual order.",
          image: screenshot("orders_2.png"),
        },
      ],
    },
  ],

  USER: [
    {
      title: "Dine-in Order",
      description:
        "Create a dine-in order from the POS and send it to the kitchen.",
      steps: [
        {
          title: "Select table",
          description:
            "Choose the table for the new dine-in order.",
          image: screenshot("dine_in_1.png"),
        },
        {
          title: "POS Interface",
          description:
            "Pick the items from the category & related items",
          image: screenshot("dine_in_2.png"),
        },
        {
          title: "Add items",
          description:
            "Add items and modifiers to the customer's order",
          image: screenshot("dine_in_3.png"),
        },
        {
          title: "Review order",
          description:
            "Review the order before sending it to the kitchen/Complete transaction",
          image: screenshot("dine_in_4.png"),
        },
      ],
    },

    {
      title: "Takeaway Order",
      description:
        "Create a takeaway order without assigning it to a restaurant table - simply create a new order in POS interface",
      steps: [
        {
          title: "Takeaway State",
          description:
            "After payment, the order will be sent to the kitchen. You can view its progress",
          image: screenshot("takeaway_1.png"),
        },
        {
          title: "Complete Order",
          description:
            "Once order is received by the customer, you can complete it",
          image: screenshot("takeaway_2.png"),
        },
      ],
    },

    {
      title: "Payment",
      description:
        "Record the customer's payment. SPOS currently records payments in the database rather than processing them through a payment gateway.",
      steps: [
        {
          title: "Payment screen",
          description:
            "Review the amount due and available payment methods.",
          image: screenshot("pay_1.png"),
        },
      ],
    },

    {
      title: "Printer Settings",
      description:
        "Configure the printers used by the POS for receipts and kitchen order tickets.",
      steps: [
        {
          title: "Printer settings",
          description:
            "Open the printer configuration from the POS settings. Configure the printer used for the required print jobs.",
          image: screenshot("print.png"),
        },
      ],
    },
  ],

  KITCHEN: [
    {
      title: "Kitchen Order Tickets",
      description:
        "The kitchen has a dedicated view for current kitchen order tickets.",
      steps: [
        {
          title: "Incoming tickets",
          description:
            "New orders sent from the POS appear as kitchen tickets.",
          image: screenshot("kitchen.png"),
        },
      ],
    },
  ],
};

const roles: Role[] = ["ADMIN", "USER", "KITCHEN"];

function Home() {
  const [selectedRole, setSelectedRole] = useState<Role>("ADMIN");
  const [selectedWorkflow, setSelectedWorkflow] = useState(0);

  const workflows = roleWorkflows[selectedRole];
  const workflow = workflows[selectedWorkflow];

  const handleRoleChange = (role: Role) => {
    setSelectedRole(role);
    setSelectedWorkflow(0);
  };

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            SPOS
          </h1>

          <p className="mt-3 text-xl text-gray-600">
            Restaurant Point-of-Sale System
          </p>

          <p className="mt-6 text-base leading-7 text-gray-600">
            SPOS is a multi-tenant point-of-sale system for restaurants and
            small food businesses. It provides tools for managing orders,
            kitchen operations, inventory, tables, users, payments, and sales.
          </p>
        </div>

        {/* Main product screenshot */}
        {/* <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <img
            src="/screenshots/pos-main.png"
            alt="SPOS point-of-sale interface"
            className="w-full"
          />
        </div> */}
      </section>

      {/* Features */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Features
          </h2>

          <div className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-medium text-gray-900">Orders</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Create and manage dine-in and takeaway orders.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Kitchen</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Process kitchen order tickets and track their status.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Inventory</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Manage categories, items, and modifiers.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Tables</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Configure restaurant tables and manage dine-in orders.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Payments</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Record payments, discounts, GST, and service charges.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Users & Roles</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Manage staff accounts with role-based access.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Sales</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Review daily sales and payment summaries.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Audit</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Keep a history of changes made to orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore by role */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Explore SPOS
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            Explore the different workflows available to each role.
          </p>
        </div>

        {/* Role tabs */}
        <div className="mt-10 border-b border-gray-200">
          <div className="flex gap-8">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => handleRoleChange(role)}
                className={`pb-3 text-sm font-medium transition ${
                  selectedRole === role
                    ? "border-b-2 border-gray-900 text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Workflow selector */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {workflows.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setSelectedWorkflow(index)}
              className={`shrink-0 rounded-md border px-4 py-2 text-sm transition ${
                selectedWorkflow === index
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Workflow heading */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-900">
            {workflow.title}
          </h3>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
            {workflow.description}
          </p>
        </div>

        {/* Workflow steps */}
        <div className="mt-8 space-y-10">
          {workflow.steps.map((step, index) => (
            <div key={step.title}>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-xs font-medium text-white">
                  {index + 1}
                </span>

                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {step.title}
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                <img
                  src={step.image}
                  alt={`${workflow.title} - ${step.title}`}
                  className="mx-auto block max-w-full"
                  loading="lazy"
                />
              </div>

              {index < workflow.steps.length - 1 && (
                <div className="flex justify-center py-6">
                  <div className="h-6 w-px bg-gray-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
