interface InstagramIconProps {
  fillColor?: string;
  classStyle?: string;
  linkURL?: string;
}

export function InstagramIcon({ fillColor, classStyle, linkURL }: InstagramIconProps) {
  return (
    <>
      <div className={classStyle}>
        <a href={linkURL} target="_blank">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 800 800"
          >
            <path
              fill={fillColor ? fillColor : "var(--accent-color)"}
              d="M628.6,0H171.4C76.8,0,0,76.8,0,171.4v457.1C0,723.2,76.8,800,171.4,800h457.1c94.7,0,171.4-76.8,171.4-171.4V171.4
	C800,76.8,723.2,0,628.6,0z M685.7,411.4c0,96,0,144-18.7,180.7c-16.4,32.3-42.7,58.5-74.9,74.9c-36.7,18.7-84.7,18.7-180.7,18.7
	h-22.9c-96,0-144,0-180.7-18.7c-32.3-16.4-58.5-42.7-74.9-74.9c-18.7-36.7-18.7-84.7-18.7-180.7v-22.9c0-96,0-144,18.7-180.7
	c16.4-32.3,42.7-58.5,74.9-74.9c36.7-18.7,84.7-18.7,180.7-18.7h22.9c96,0,144,0,180.7,18.7c32.3,16.4,58.5,42.7,74.9,74.9
	c18.7,36.7,18.7,84.7,18.7,180.7V411.4z M485.7,400c0,47.3-38.4,85.7-85.7,85.7s-85.7-38.4-85.7-85.7s38.4-85.7,85.7-85.7
	S485.7,352.7,485.7,400z M616.1,233.8c-11-21.5-28.4-39-49.9-49.9c-8.9-4.6-21.7-8.3-46.8-10.3c-25.7-2.1-59-2.1-107.9-2.1h-22.9
	c-48.9,0-82.2,0-107.9,2.1c-25.1,2-37.9,5.8-46.8,10.3c-21.5,11-39,28.4-49.9,49.9c-4.6,8.9-8.3,21.7-10.3,46.8
	c-2.1,25.7-2.1,59-2.1,107.9v22.9c0,48.9,0,82.2,2.1,107.9c2,25.1,5.8,37.9,10.3,46.8c11,21.5,28.4,39,49.9,49.9
	c8.9,4.6,21.7,8.3,46.8,10.3c25.7,2.1,59,2.1,107.9,2.1h22.9c48.9,0,82.2,0,107.9-2.1c25.1-2,37.9-5.8,46.8-10.3
	c21.5-11,39-28.4,49.9-49.9c4.6-8.9,8.3-21.7,10.3-46.8c2.1-25.7,2.1-59,2.1-107.9v-22.9c0-48.9,0-82.2-2.1-107.9
	C624.4,255.6,620.7,242.8,616.1,233.8z M400,542.9c-78.9,0-142.9-64-142.9-142.9s64-142.9,142.9-142.9s142.9,64,142.9,142.9
	S478.9,542.9,400,542.9z M557.1,285.7c-23.7,0-42.9-19.2-42.9-42.9c0-23.7,19.2-42.9,42.9-42.9s42.9,19.2,42.9,42.9
	C600,266.5,580.8,285.7,557.1,285.7z"
            />
          </svg>
        </a>
      </div>
    </>
  );
}