import { TestComponentType } from "./TestComponent.type.ts"
import { css } from "@emotion/react"

const TestComponent = ({ ...props }: TestComponentType) => {
	return <div {...props} css={css`background-color: green`} >TEST</div>
}

export default TestComponent
