import { ForwardedRef, forwardRef,  ReactNode } from "react"
import { css, } from "@emotion/react"

interface FlippedCardProps {
	width?: string
	height?: string
	frontSide: ReactNode
	backSide: ReactNode
}

const FlippedCard = forwardRef(function (
	{ width = "100%", height = "24px", backSide, frontSide }: FlippedCardProps,
	flippedCardRef?: ForwardedRef<HTMLDivElement>
) {



	return (
		<div
			css={css`
				overflow: hidden;
				width: ${width};
				height: ${height};
				background: transparent;
				&:hover > #flippedCard-inner {
					transform: rotateY(180deg);
				}
			`}
			id={"flipped-card-container"}
			ref={flippedCardRef}
		>
			<div
				id={`flippedCard-inner`}
				css={css`
					position: relative;
					width: 100%;
					height: 100%;
					text-align: center;
					transition: transform 0.5s;
					transform-style: preserve-3d;
				`}
			>
				<div
					css={css`
						position: absolute;
						width: 100%;
						height: 100%;
						-webkit-backface-visibility: hidden;
						backface-visibility: hidden;
						overflow: hidden;
					`}
				>
					{frontSide}
				</div>
				<div
					css={css`
						position: absolute;
						width: 100%;
						height: 100%;
						-webkit-backface-visibility: hidden;
						backface-visibility: hidden;
						overflow: hidden;
						transform: rotateY(180deg);
					`}
				>
					{backSide}
				</div>
			</div>
		</div>
	)
})
export default FlippedCard
FlippedCard.displayName = "FlippedCard"
