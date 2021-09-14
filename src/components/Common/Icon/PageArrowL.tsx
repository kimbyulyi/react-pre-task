import * as React from "react";

function SvgPageArrowL(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M16.872 11.002L5.959 11l1.827 1.828-1.414 1.415L2.13 10l4.243-4.243 1.414 1.415L5.958 9h10.914v2.002z"
        fill="#434343"
        fillRule="evenodd"
        opacity={0.3}
      />
    </svg>
  );
}

export default SvgPageArrowL;
