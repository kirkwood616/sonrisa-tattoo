interface FacebookIconProps {
  fillColor?: string;
  classStyle?: string;
  linkURL?: string;
}

export function FacebookIcon({ fillColor, classStyle, linkURL }: FacebookIconProps) {
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
              className="Icons"
              d="M427.3,800H44.2C19.8,800,0,780.2,0,755.8V44.2C0,19.8,19.8,0,44.2,0h711.7C780.2,0,800,19.8,800,44.2v711.7
	c0,24.4-19.8,44.2-44.2,44.2H552V490.2h104l15.6-120.7H552v-77.1c0-35,9.7-58.8,59.8-58.8l63.9,0v-108c-11.1-1.5-49-4.8-93.2-4.8
	c-92.2,0-155.3,56.3-155.3,159.6v89H323.1v120.7h104.3V800L427.3,800z"
            />
          </svg>
        </a>
      </div>
    </>
  );
}
