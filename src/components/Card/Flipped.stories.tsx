import FlippedCard from "./Flipped"

import { Meta, StoryObj } from "@storybook/react"


const meta: Meta<typeof FlippedCard> = {
	title: "card/Flipped Card",
	component: FlippedCard,
	tags: ["autodocs"],
	argTypes: {
		width: { control: "text" },
		height: { control: "text" },
		frontSide: { control: { disable: true } },
		backSide: { control: { disable: true } }
	}
}
export default meta

type Story = StoryObj<typeof FlippedCard>

const FrontSide = () => <div>Front Side</div>
const BackSide = () => <div>Back Side</div>

export const Example: Story = {
	render: () => <FlippedCard width={"240px"} height={"350px"} frontSide={<FrontSide />} backSide={<BackSide />} />
}
