import {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import { css } from "@emotion/react";

interface TrackerProps extends HTMLAttributes<HTMLDivElement> {
  time: string;
}

const Tracker = ({ time, ...props }: TrackerProps) => (
  <div
    id={"marquee-list-tracker"}
    css={css`
      @keyframes marquee {
        0% {
          transform: translate3d(0, 0, 0);
        }
        100% {
          transform: translate3d(-100%, 0, 0);
        }
      }
      height: 100%;
      display: flex;
      row-gap: 10px;
      align-items: center;
      width: fit-content;
      white-space: nowrap;
      animation: marquee ${time} linear infinite;

      &:hover {
        animation-play-state: paused;
      }

      & > * {
        white-space: nowrap;
      }
    `}
    {...props}
  />
);

interface Props {
  width?: string;
  height?: string;
  time?: string;
}

const Marquee = forwardRef(function (
  {
    width = "100%",
    height = "24px",
    time = "10s",
    children,
  }: PropsWithChildren<Props>,
  marqueeRef?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      css={css`
        overflow: hidden;
        width: ${width};
        height: ${height};
      `}
      id={"marquee-list-container"}
      ref={marqueeRef}
    >
      <Tracker time={time}>{children}</Tracker>
    </div>
  );
});

export default Marquee;

Marquee.displayName = "Marquee"
