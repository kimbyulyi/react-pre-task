import * as React from "react";

function SvgPageArrowR(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M3.13 11.002h10.913l-1.827 1.828 1.414 1.414 4.242-4.243L13.63 5.76l-1.414 1.414L14.043 9H3.13v2z"
        fill="#434343"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgPageArrowR;
