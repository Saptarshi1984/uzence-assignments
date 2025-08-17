import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    errorMessage: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "ghost"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    invalid: { control: "boolean" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    value: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Type here...",
    helperText: "Helper text",
    errorMessage: "This is an error",
    variant: "outlined",
    size: "md",
    invalid: false,
    loading: false,
    disabled: false,
    value: "",
    onChange: (e) => console.log("Changed:", e.target.value),
  },
  render: (args) => (
    <div className="w-full mx-auto p-4">
      <InputField {...args} />
    </div>
  ),
};

export const FilledVariant: Story = {
  args: { ...Default.args, variant: "filled" },
};

export const GhostVariant: Story = {
  args: { ...Default.args, variant: "ghost" },
};

export const SmallSize: Story = {
  args: { ...Default.args, size: "sm" },
};

export const LargeSize: Story = {
  args: { ...Default.args, size: "lg" },
};

export const WithError: Story = {
  args: { ...Default.args, invalid: true },
};

export const Loading: Story = {
  args: { ...Default.args, loading: true },
};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};