import { TestComponentType } from "./TestComponent.type.ts"

export const TestComponent = ({ ...props }: TestComponentType) => {
	return <div {...props} />
}
