interface WarningsProps {
  fillColor?: string;
}

export default function Warnings({ fillColor }: WarningsProps) {
  return (
    <>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 400 400"
      >
        <path
          fill={fillColor ? fillColor : "var(--accent-color)"}
          className="p01"
          d="M62.55,270.24c0.8-3.03,1.17-6.27,2.48-9.06
	c3.19-6.79,6.66-13.46,10.32-20.01c5.8-10.39,11.85-20.65,17.8-30.96c6.04-10.45,12.1-20.9,18.13-31.35
	c5.95-10.31,11.87-20.64,17.84-30.94c6.93-11.95,13.88-23.89,20.86-35.81c3.6-6.14,6.92-12.49,11-18.3
	c6.52-9.25,15.52-15.28,26.6-17.87c3.8-0.89,7.77-1.67,11.63-1.55c11.78,0.36,22.61,3.46,31.94,11.31
	c7.05,5.93,11.33,13.67,15.81,21.36c7.08,12.16,14.05,24.38,21.07,36.57c5.94,10.31,11.89,20.63,17.85,30.93
	c6.83,11.81,13.69,23.6,20.51,35.41c5.87,10.15,11.71,20.32,17.57,30.48c2.21,3.83,4.49,7.63,6.66,11.49
	c2.78,4.95,4.77,10.2,5.76,15.82c0.15,0.86,0.69,1.65,1.04,2.48c0,4.3,0,8.59,0,12.89c-0.53,1.28-1.29,2.52-1.56,3.86
	c-2.56,12.37-9.36,22-19.37,29.36c-8.24,6.05-17.68,9-27.92,9.29c-0.62-0.03-1.25-0.08-1.87-0.08c-57.82,0-115.63,0-173.45,0
	c-0.62,0-1.25,0.06-1.87,0.09c-3.65-0.39-7.41-0.37-10.94-1.23c-16.92-4.14-28.52-14.48-34.72-30.76c-1.3-3.41-2.14-7-3.2-10.51
	C62.55,278.83,62.55,274.53,62.55,270.24z M198.71,303.38c29.53,0,59.05,0.05,88.58-0.03c8.85-0.02,16.32-3.21,21.87-10.42
	c6.58-8.55,7.84-19.77,2.66-29.16c-5.84-10.56-11.96-20.98-18.01-31.42c-7.62-13.15-15.33-26.25-22.93-39.42
	c-7.82-13.54-15.52-27.15-23.33-40.7c-7.73-13.4-15.64-26.69-23.27-40.15c-5.72-10.09-13.74-15.76-25.73-15.33
	c-9.35,0.33-16.42,4.33-21.15,12.25c-7.21,12.09-14.24,24.29-21.32,36.47c-5.97,10.28-11.9,20.59-17.84,30.9
	c-5.9,10.24-11.78,20.48-17.67,30.72c-6.28,10.92-12.53,21.85-18.85,32.74c-4.31,7.45-8.8,14.79-13.04,22.28
	c-3.69,6.51-5.45,13.53-3.36,20.92c3.4,12.06,13.03,20.46,26.95,20.39C141.09,303.28,169.9,303.39,198.71,303.38z M195.04,152.18
	c-6.58,2.68-9.57,7.88-9.48,14.76c0.07,4.93,0.74,9.84,1,14.77c0.27,5.14,0.36,10.28,0.56,15.43c0.14,3.45,0.31,6.9,0.54,10.34
	c0.51,7.56,0.98,15.13,1.66,22.68c0.19,2.09,0.73,4.28,1.66,6.15c1.84,3.71,7.25,5.88,11.05,4.79c4.86-1.39,8.05-5.46,8.21-9.96
	c0.2-5.65,0.7-11.28,1.03-16.92c0.56-9.44,1.12-18.88,1.62-28.32c0.25-4.87,0.36-9.75,0.54-14.62c0.02-0.43,0.1-0.87,0.18-1.3
	c1.93-9.31-4.02-18.9-14.24-18.64C197.92,151.61,196.37,151.64,195.04,152.18z M199.49,251.01c-8.58,0.19-13.38,6.09-13.87,13.92
	c-0.45,7.11,6.9,14.53,13.74,14.38c6.89-0.15,14.99-5.99,14.06-14.16C214.01,256.61,207.25,250.84,199.49,251.01z"
        />
      </svg>
    </>
  );
}
