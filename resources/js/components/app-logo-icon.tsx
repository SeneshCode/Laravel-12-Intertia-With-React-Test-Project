import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <>
            {/* <svg  viewBox="0 0 40 42" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.2 5.63325L8.6 0.855469L0 5.63325V32.1434L16.2 41.1434L32.4 32.1434V23.699L40 19.4767V9.85547L31.4 5.07769L22.8 9.85547V18.2999L17.2 21.411V5.63325ZM38 18.2999L32.4 21.411V15.2545L38 12.1434V18.2999ZM36.9409 10.4439L31.4 13.5221L25.8591 10.4439L31.4 7.36561L36.9409 10.4439ZM24.8 18.2999V12.1434L30.4 15.2545V21.411L24.8 18.2999ZM23.8 20.0323L29.3409 23.1105L16.2 30.411L10.6591 27.3328L23.8 20.0323ZM7.6 27.9212L15.2 32.1434V38.2999L2 30.9666V7.92116L7.6 11.0323V27.9212ZM8.6 9.29991L3.05913 6.22165L8.6 3.14339L14.1409 6.22165L8.6 9.29991ZM30.4 24.8101L17.2 32.1434V38.2999L30.4 30.9666V24.8101ZM9.6 11.0323L15.2 7.92117V22.5221L9.6 25.6333V11.0323Z"
                />
            </svg> */}

            <svg {...props} viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.00421 16.5252C4.24379 16.5252 5.35994 15.7511 5.79983 14.5736C7.64904 9.62372 12.3591 6.1056 17.8783 6.1056C23.3975 6.1056 28.1076 9.62372 29.9568 14.5736C30.3967 15.7513 31.5128 16.5252 32.7524 16.5252C34.8415 16.5252 36.3023 14.4024 35.5614 12.4174C32.8557 5.16854 25.9596 0.0160675 17.8783 0.0160675C9.79702 0.0160675 2.90088 5.16872 0.195262 12.4174C-0.545645 14.4022 0.91513 16.5252 3.00421 16.5252Z"
                    fill="url(#paint0_linear_1079_1681)"
                />
                <path
                    d="M30.8258 5.23111C27.4426 1.99812 22.8889 0.0160675 17.8783 0.0160675C9.79702 0.0160675 2.90087 5.16872 0.19525 12.4174C-0.545657 14.4024 0.915273 16.5252 3.0042 16.5252C4.24378 16.5252 5.35994 15.7511 5.79983 14.5736C6.07889 13.8264 6.42428 13.1128 6.8266 12.4381L6.82628 12.437C6.82628 12.437 6.83185 12.4276 6.84315 12.4095C8.01699 10.4523 9.6804 8.8321 11.6609 7.72436C15.4598 5.2069 21.6605 3.03701 30.8258 5.23111Z"
                    fill="url(#paint1_linear_1079_1681)"
                />
                <path
                    d="M32.7524 21.4747C31.5128 21.4747 30.3967 22.2487 29.9568 23.4263C28.1076 28.3761 23.3975 31.8943 17.8783 31.8943C12.3591 31.8943 7.64904 28.3761 5.79983 23.4263C5.35994 22.2486 4.24364 21.4747 3.00421 21.4747C0.91513 21.4747 -0.545645 23.5975 0.195262 25.5825C2.90088 32.8311 9.79702 37.9838 17.8783 37.9838C25.9596 37.9838 32.8557 32.8311 35.5614 25.5825C36.3023 23.5975 34.8415 21.4747 32.7524 21.4747Z"
                    fill="url(#paint2_linear_1079_1681)"
                />
                <path
                    d="M4.93082 32.7686C8.31381 36.0017 12.8676 37.9838 17.8783 37.9838C25.9596 37.9838 32.8557 32.8311 35.5613 25.5825C36.3022 23.5975 34.8413 21.4747 32.7524 21.4747C31.5128 21.4747 30.3966 22.2488 29.9567 23.4265C29.6777 24.1736 29.3323 24.8872 28.93 25.5619L28.9303 25.563C28.9303 25.563 28.9247 25.5725 28.9134 25.5905C27.7396 27.5476 26.0762 29.1679 24.0957 30.2757C20.2968 32.793 14.0961 34.9627 4.93082 32.7686Z"
                    fill="url(#paint3_linear_1079_1681)"
                />
                <path
                    d="M23.3309 19.6791L18.6856 27.9072C18.6174 28.0289 18.5188 28.13 18.3999 28.2004C18.2809 28.2708 18.1458 28.3078 18.0082 28.3078C17.8705 28.3078 17.7354 28.2708 17.6165 28.2004C17.4975 28.13 17.3989 28.0289 17.3308 27.9072L12.686 19.6791C12.618 19.5584 12.5822 19.4216 12.5822 19.2824C12.5822 19.1432 12.618 19.0065 12.686 18.8857L14.4438 15.7732L17.7494 9.91732C17.7758 9.87136 17.8136 9.83326 17.859 9.80676C17.9044 9.78029 17.9558 9.76631 18.0082 9.76631C18.0605 9.76631 18.1119 9.78029 18.1573 9.80676C18.2027 9.83326 18.2405 9.87136 18.2669 9.91732L21.5725 15.7732L23.3297 18.8857C23.3983 19.0062 23.4345 19.143 23.4347 19.2822C23.4349 19.4215 23.3991 19.5584 23.3309 19.6791Z"
                    fill="url(#paint4_radial_1079_1681)"
                />
                <defs>
                    <linearGradient id="paint0_linear_1079_1681" x1="17.9272" y1="18.953" x2="17.7897" y2="4.06783" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3E88FF" />
                        <stop offset="0.9948" stopColor="#1C6CB6" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1079_1681" x1="25.5524" y1="-1.43149" x2="-1.844" y2="21.5425" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1990FF" />
                        <stop offset="1" stopColor="#135AFF" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_1079_1681" x1="17.8294" y1="19.0468" x2="17.967" y2="33.932" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0084FF" />
                        <stop offset="0.9649" stopColor="#07419D" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_1079_1681" x1="4.93087" y1="29.7293" x2="35.7567" y2="29.7293" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#006AFF" />
                        <stop offset="1" stopColor="#1381FF" />
                    </linearGradient>
                    <radialGradient
                        id="paint4_radial_1079_1681"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(18.0085 19.0371) rotate(90) scale(9.27073 5.42622)"
                    >
                        <stop stopColor="#375498" />
                        <stop offset="1" stopColor="#1D1D1D" />
                    </radialGradient>
                </defs>
            </svg>
        </>
    );
}
