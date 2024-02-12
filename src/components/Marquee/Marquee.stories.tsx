import { Meta, StoryObj } from "@storybook/react";
import Marquee from "./Marquee.tsx";
import { css } from "@emotion/react";

const meta: Meta<typeof Marquee> = {
  title: "blog/Marquee",
  component: Marquee,
  tags: ["autodocs"],
  argTypes: {
    width: { control: "text" },
    height: { control: "text" },
    time: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Marquee>;

export const Example: Story = {
  render: () => (
    <Marquee width={"100%"} height={"4vw"} time={"10s"}>
      {[
        {
          key: 1,
          label: "one",
        },
        {
          key: 2,
          label: "two",
        },
        {
          key: 3,
          label: "three",
        },
        {
          key: 4,
          label: "four",
        },
      ].map(({ key, label }) => (
        <span
          key={key}
          css={css`
            margin-right: 10px;
          `}
        >
          {label}
        </span>
      ))}
    </Marquee>
  ),
};
