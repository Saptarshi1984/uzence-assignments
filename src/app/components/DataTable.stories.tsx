import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./DataTable";

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
  argTypes: {
    loading: { control: "boolean" },
    selectable: { control: "boolean" },
    columns: {
      control: "object",
      description: "Defines table columns",
    },
    data: {
      control: "object",
      description: "Defines table row data",
    },
    onRowSelect: { action: "row selected" },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const columns = [
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  { key: "email", label: "Email" },
  { key: "city", label: "City" },
  { key: "phone", label: "Phone" },
];

const data = [
  {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    city: "New York",
    phone: "1234567890",
  },
  {
    name: "Bob",
    age: 30,
    email: "bob@example.com",
    city: "Los Angeles",
    phone: "9876543210",
  },
  {
    name: "Charlie",
    age: 22,
    email: "charlie@example.com",
    city: "Chicago",
    phone: "4561237890",
  },
];

export const Default: Story = {
  args: {
    columns,
    data,
    loading: false,
    selectable: false,
  },
  render: (args) => (
    <div className="w-full overflow-x-auto p-4">
      <div className="mx-auto">
        <DataTable {...args} />
      </div>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
    selectable: false,
  },
};

export const Selectable: Story = {
  args: {
    columns,
    data,
    loading: false,
    selectable: true,
  },
};
