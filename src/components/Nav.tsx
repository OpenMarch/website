import { Button } from "./ui/Button.tsx";
import { LogoTextMark } from "./LogoTextMark.tsx";
import React, { useState } from "react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className="sticky top-0 z-[99] flex h-[4rem] w-full flex-col">
            <nav className="flex w-full items-center justify-between border-b border-stroke bg-modal px-64 py-16 shadow-modal backdrop-blur-md max-[750px]:px-24">
                <a href="/">
                    <LogoTextMark />
                </a>
                <div className="flex items-center gap-16 max-[675px]:hidden">
                    <a
                        href="/"
                        className="text-body text-text duration-150 ease-out hover:text-accent"
                    >
                        Home
                    </a>
                    <a
                        href="/guides"
                        className="text-body text-text duration-150 ease-out hover:text-accent"
                    >
                        Guides
                    </a>
                    <a
                        href="/blog"
                        className="text-body text-text duration-150 ease-out hover:text-accent"
                    >
                        Blog
                    </a>
                    <a
                        href="/about"
                        className="text-body text-text duration-150 ease-out hover:text-accent"
                    >
                        About
                    </a>
                    <a href="https://github.com/OpenMarch/OpenMarch">
                        <Button
                            variant="secondary"
                            size="compact"
                            className="items-center gap-6"
                        >
                            <LogoGitHub />
                            Star
                        </Button>
                    </a>
                    <a href="https://discord.gg/eTsQ98uZzq">
                        <Button
                            variant="secondary"
                            size="compact"
                            className="items-center gap-6"
                        >
                            <LogoDiscord />
                            Discord
                        </Button>
                    </a>
                    <a href="https://www.patreon.com/openmarch">
                        <Button
                            variant="secondary"
                            size="compact"
                            className="items-center gap-6"
                        >
                            <LogoPatreon />
                            Donate
                        </Button>
                    </a>
                    <a href="/download">
                        <Button variant="primary" size="compact">
                            Download
                        </Button>
                    </a>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="h-fit min-[675px]:hidden"
                >
                    {isOpen ? (
                        <i className="ph ph-x text-[1.5rem]"></i>
                    ) : (
                        <i className="ph ph-list text-[1.5rem]"></i>
                    )}
                </button>
            </nav>
            <div
                id="mobile"
                className={`${isOpen ? "flex" : "hidden"} z-[99] m-12 animate-scale-in flex-col items-center gap-32 rounded-6 border border-stroke bg-modal p-32 backdrop-blur-32`}
            >
                <a href="/" className="text-h4 text-text">
                    Home
                </a>
                <a href="/guides" className="text-h4 text-text">
                    Guides
                </a>
                <a href="/blog" className="text-h4 text-text">
                    Blog
                </a>
                <a
                    href="https://github.com/OpenMarch/OpenMarch"
                    className="flex items-center gap-8 text-h4 text-text"
                >
                    <LogoGitHub />
                    Star
                </a>
                <a
                    href="https://discord.gg/eTsQ98uZzq"
                    className="flex items-center gap-8 text-h4 text-text"
                >
                    <LogoDiscord />
                    Discord
                </a>
                <a
                    href="https://www.patreon.com/openmarch"
                    className="flex items-center gap-8 text-h4 text-text"
                >
                    <LogoPatreon />
                    Donate
                </a>
                <a href="/download" className="text-h4 text-text">
                    Download
                </a>
            </div>
        </nav>
    );
}

function LogoGitHub() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-black dark:fill-white"
        >
            <g clipPath="url(#clip0_285_2792)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 0C4.0275 0 0 4.0275 0 9C0 12.9825 2.57625 16.3463 6.15375 17.5388C6.60375 17.6175 6.7725 17.3475 6.7725 17.1113C6.7725 16.8975 6.76125 16.1888 6.76125 15.435C4.5 15.8513 3.915 14.8837 3.735 14.3775C3.63375 14.1187 3.195 13.32 2.8125 13.1062C2.4975 12.9375 2.0475 12.5212 2.80125 12.51C3.51 12.4987 4.01625 13.1625 4.185 13.4325C4.995 14.7937 6.28875 14.4113 6.80625 14.175C6.885 13.59 7.12125 13.1962 7.38 12.9712C5.3775 12.7462 3.285 11.97 3.285 8.5275C3.285 7.54875 3.63375 6.73875 4.2075 6.10875C4.1175 5.88375 3.8025 4.96125 4.2975 3.72375C4.2975 3.72375 5.05125 3.4875 6.7725 4.64625C7.4925 4.44375 8.2575 4.3425 9.0225 4.3425C9.7875 4.3425 10.5525 4.44375 11.2725 4.64625C12.9938 3.47625 13.7475 3.72375 13.7475 3.72375C14.2425 4.96125 13.9275 5.88375 13.8375 6.10875C14.4113 6.73875 14.76 7.5375 14.76 8.5275C14.76 11.9812 12.6563 12.7462 10.6538 12.9712C10.98 13.2525 11.2613 13.7925 11.2613 14.6363C11.2613 15.84 11.25 16.8075 11.25 17.1113C11.25 17.3475 11.4188 17.6288 11.8688 17.5388C15.4238 16.3463 18 12.9712 18 9C18 4.0275 13.9725 0 9 0Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_285_2792">
                    <rect width="18" height="18" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

function LogoDiscord() {
    return (
        <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-black dark:fill-white"
        >
            <path
                d="M15.2477 1.32141C14.0651 0.77998 12.8166 0.39587 11.5342 0.178894C11.3587 0.49261 11.1999 0.815381 11.0585 1.14586C9.69243 0.940009 8.30325 0.940009 6.93721 1.14586C6.79571 0.815415 6.63693 0.492648 6.46151 0.178894C5.17825 0.397703 3.92895 0.782724 2.74514 1.32424C0.394983 4.80135 -0.242108 8.19209 0.0764374 11.5347C1.45275 12.5516 2.99324 13.3249 4.63094 13.8212C4.9997 13.3252 5.326 12.799 5.60639 12.2482C5.07383 12.0493 4.55982 11.8039 4.07029 11.5149C4.19913 11.4214 4.32513 11.3252 4.44689 11.2317C5.87128 11.9016 7.42593 12.2489 8.99997 12.2489C10.574 12.2489 12.1287 11.9016 13.5531 11.2317C13.6762 11.3322 13.8022 11.4285 13.9296 11.5149C13.4392 11.8044 12.9242 12.0503 12.3907 12.2497C12.6708 12.8002 12.9971 13.3259 13.3662 13.8212C15.0053 13.3269 16.5469 12.5539 17.9235 11.5361C18.2973 7.65977 17.285 4.30017 15.2477 1.32141ZM6.00988 9.47902C5.1222 9.47902 4.38884 8.67345 4.38884 7.68242C4.38884 6.69139 5.09672 5.87874 6.00705 5.87874C6.91739 5.87874 7.64509 6.69139 7.62951 7.68242C7.61394 8.67345 6.91456 9.47902 6.00988 9.47902ZM11.9901 9.47902C11.101 9.47902 10.3704 8.67345 10.3704 7.68242C10.3704 6.69139 11.0783 5.87874 11.9901 5.87874C12.9018 5.87874 13.6238 6.69139 13.6083 7.68242C13.5927 8.67345 12.8947 9.47902 11.9901 9.47902Z"
                fill="currentColor"
            />
        </svg>
    );
}

function LogoPatreon() {
    return (
        <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16.9888 5.1264C16.9888 5.2668 16.9982 5.40855 16.987 5.54805C16.9735 5.7105 16.9501 5.87295 16.9199 6.03405C16.8781 6.26249 16.8284 6.48942 16.771 6.71445C16.728 6.88045 16.6741 7.04341 16.6094 7.20225C16.4686 7.5474 16.3124 7.88535 16.1068 8.19675C15.9799 8.3889 15.8503 8.5788 15.718 8.76645C15.667 8.83486 15.6114 8.89966 15.5515 8.9604C15.4502 9.0675 15.3526 9.17775 15.2428 9.27315C15.0817 9.41781 14.913 9.55375 14.7374 9.6804C14.5772 9.7929 14.3972 9.87435 14.2334 9.9837C14.0516 10.1043 13.8437 10.1565 13.6502 10.2479C13.4774 10.3289 13.2925 10.3559 13.1165 10.4189C12.8924 10.4999 12.6571 10.5188 12.4276 10.5678C12.1828 10.6205 11.9339 10.6592 11.6882 10.7096C11.4862 10.7501 11.2859 10.7987 11.0852 10.8437C10.9709 10.8689 10.8557 10.8878 10.745 10.9215C10.6082 10.9634 10.475 11.0178 10.3418 11.0673C10.2514 11.0997 10.1564 11.124 10.07 11.1659C9.94405 11.2289 9.82525 11.3076 9.6997 11.3747C9.49405 11.4836 9.3226 11.6379 9.1669 11.8067C9.0355 11.9507 8.9212 12.1131 8.8069 12.2729C8.6188 12.537 8.4892 12.8327 8.3731 13.1351C8.2588 13.4307 8.15395 13.73 8.04685 14.0288C7.9474 14.31 7.85335 14.5922 7.7521 14.8725C7.66345 15.1169 7.56895 15.3581 7.474 15.5993C7.33709 15.9463 7.16837 16.28 6.97 16.596C6.82105 16.835 6.66175 17.0681 6.4561 17.2611C6.2914 17.4155 6.1321 17.5779 5.9296 17.6859C5.7289 17.7939 5.5219 17.8875 5.2996 17.9366C5.03248 17.993 4.75888 18.0125 4.48645 17.9946C4.3834 17.9892 4.2817 17.9609 4.17865 17.942C4.117 17.9303 4.05445 17.9208 3.9946 17.9019C3.9442 17.8862 3.89785 17.8583 3.8497 17.834C3.7138 17.7678 3.5689 17.7152 3.4447 17.6324C3.2927 17.5262 3.14835 17.4095 3.0127 17.2832C2.7634 17.0618 2.5762 16.7868 2.4088 16.5002C2.29546 16.3083 2.19315 16.1101 2.10235 15.9066C2.01595 15.7104 1.95115 15.5048 1.88095 15.3014C1.82638 15.1431 1.77537 14.9836 1.72795 14.823C1.68655 14.6804 1.6537 14.5346 1.6186 14.3897C1.58575 14.2556 1.5511 14.1224 1.5232 13.9869C1.4728 13.7457 1.42645 13.5041 1.3792 13.2629C1.35826 13.161 1.33831 13.059 1.31935 12.9569C1.29235 12.8039 1.26805 12.6504 1.2424 12.497C1.2226 12.3827 1.201 12.2693 1.1839 12.155C1.1641 12.029 1.1479 11.903 1.1281 11.7774C1.1119 11.6685 1.093 11.5601 1.0777 11.4512C1.0633 11.3495 1.0507 11.2478 1.03765 11.1461C1.02297 11.0366 1.00887 10.9271 0.995349 10.8176C0.981849 10.7114 0.970599 10.6056 0.958449 10.4994C0.944046 10.3767 0.929646 10.254 0.915249 10.1313C0.910299 10.0872 0.904899 10.0445 0.901749 10.0004C0.886449 9.8199 0.871149 9.63855 0.856749 9.45675C0.847749 9.34425 0.838749 9.2313 0.834249 9.11925C0.824799 8.94375 0.815349 8.7696 0.811749 8.59455C0.804549 8.307 0.800499 8.01855 0.800049 7.731C0.800049 7.5609 0.800949 7.39125 0.812199 7.2225C0.823899 7.0461 0.848199 6.8697 0.867099 6.6933C0.882399 6.5529 0.895899 6.4134 0.914349 6.273C0.924699 6.19425 0.943149 6.1164 0.959349 6.039C1.00075 5.8446 1.03855 5.65065 1.0858 5.4576C1.12 5.3181 1.16725 5.1831 1.2055 5.0454C1.27615 4.78845 1.38235 4.5459 1.48585 4.30155C1.53355 4.18905 1.59205 4.08105 1.65145 3.9753C1.73515 3.82725 1.81615 3.6783 1.91065 3.5388C2.0272 3.3687 2.1505 3.204 2.281 3.0447C2.40475 2.8935 2.53615 2.7477 2.67385 2.61045C2.78185 2.50245 2.90425 2.40885 3.02035 2.3112C3.13465 2.2158 3.2458 2.11635 3.36685 2.0304C3.55225 1.8972 3.7426 1.7712 3.9352 1.64835C4.04725 1.57725 4.1665 1.51605 4.2835 1.45305C4.46575 1.3545 4.648 1.25505 4.8325 1.16145C4.9495 1.10295 5.06965 1.05165 5.1898 1.00215C5.49715 0.877501 5.8036 0.751501 6.11455 0.634951C6.32155 0.558451 6.53395 0.498601 6.7441 0.431551C6.8521 0.396901 6.95785 0.359101 7.06675 0.328501C7.15675 0.303301 7.24765 0.289801 7.33855 0.268651C7.43755 0.246151 7.53385 0.215101 7.63375 0.196651C7.7683 0.170101 7.9051 0.151651 8.0419 0.130501C8.1949 0.107101 8.34745 0.0832511 8.5009 0.0621011C8.56345 0.0535511 8.62825 0.0531011 8.69215 0.0486011C8.90365 0.0369011 9.11695 0.0243011 9.32845 0.0139511C9.41305 0.00945107 9.50035 -0.00899893 9.5827 0.00540107C9.78205 0.0414011 9.98275 0.0130511 10.1821 0.0279011C10.3747 0.0414011 10.5659 0.0621011 10.7572 0.0850511C10.8949 0.102151 11.0308 0.131401 11.1685 0.152551C11.2891 0.170551 11.4092 0.181801 11.5294 0.200701C11.6261 0.216451 11.7229 0.237151 11.8196 0.258301C12.0266 0.304651 12.2332 0.346501 12.4379 0.400951C12.6197 0.450451 12.7966 0.524701 12.9797 0.567451C13.1908 0.618301 13.3843 0.716851 13.5877 0.783001C13.7956 0.850051 13.9747 0.973801 14.1727 1.0566C14.4044 1.15425 14.6047 1.3023 14.8108 1.4427C14.9669 1.5498 15.119 1.6641 15.2608 1.7892C15.4709 1.9737 15.6748 2.1654 15.871 2.3652C15.9871 2.4822 16.0861 2.619 16.1918 2.7477C16.3628 2.9565 16.4879 3.19455 16.6094 3.43305C16.7062 3.62385 16.7863 3.82635 16.8511 4.0311C16.9051 4.19895 16.9213 4.3794 16.9614 4.5513C17.0055 4.7403 17.0045 4.9311 16.9942 5.1228L16.9888 5.1264Z"
                fill="currentColor"
            />
        </svg>
    );
}
