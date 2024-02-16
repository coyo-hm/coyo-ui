import { TestComponentType } from "./TestComponent.type.ts"

const TestComponent = ({ ...props }: TestComponentType) => {
	return <div {...props} >TEST</div>
}

export default TestComponent
