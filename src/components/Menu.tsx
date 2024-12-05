import { MegaMenu } from 'primereact/megamenu';
// import { MenuItem } from 'primereact/menuitem';
export default function MenuItem() {
  const items = [
    {
      label: 'Users',
      icon: 'pi pi-user',
      url: '/users'
    },
    {
      label: 'Devices',
      icon: 'pi pi-mobile',
      url: '/devices'
    },
    {
      label: 'Videos',
      icon: 'pi pi-youtube',
      url: '/videos'
    },
    {
      label: 'Campaigns',
      icon: 'pi pi-megaphone',
      url: '/campaigns'
    }
  ];
  // const start = <svg xmlns="http://www.w3.org/2000/svg" width="149.092" height="30" viewBox="0 0 149.092 30"><g id="Group_8" data-name="Group 8" transform="translate(-113 -25)"><path id="Path_36" data-name="Path 36" d="M525.018,653.709l-5.4,19.964h-6.762l-3.148-12.951-3.256,12.951h-6.726l-5.438-19.964h2.753a4.1,4.1,0,0,1,4.018,3.3l2.173,10.974,2.619-11.118a4.1,4.1,0,0,1,3.987-3.157h0a4.1,4.1,0,0,1,3.984,3.143l2.647,11.06,2.141-10.9a4.1,4.1,0,0,1,4.02-3.307Z" transform="translate(-381.285 -618.959)" fill="#08374f"></path><path id="Path_37" data-name="Path 37" d="M699.439,592.8h2.836v3.12a3.282,3.282,0,0,1-3.282,3.282h-2.836v-3.12A3.282,3.282,0,0,1,699.439,592.8Z" transform="translate(-550.844 -567.797)" fill="#f25e67"></path><rect id="Rectangle_45" data-name="Rectangle 45" width="6.118" height="19.964" transform="translate(145.313 34.75)" fill="#08374f"></rect><path id="Path_38" data-name="Path 38" d="M748.795,671.562a7.941,7.941,0,0,1-3.22-2.451,6.443,6.443,0,0,1-1.324-3.488H747.4a4.947,4.947,0,0,1,3.548,1.408,2.729,2.729,0,0,0,.313.273,3.416,3.416,0,0,0,2.111.644,3.011,3.011,0,0,0,1.771-.447,1.369,1.369,0,0,0,.626-1.163,1.342,1.342,0,0,0-.894-1.27,18.173,18.173,0,0,0-2.9-.912A27.1,27.1,0,0,1,748.4,663.1a6.173,6.173,0,0,1-2.469-1.753,4.776,4.776,0,0,1-1.038-3.238,5.5,5.5,0,0,1,.948-3.13,6.383,6.383,0,0,1,2.791-2.236,10.687,10.687,0,0,1,4.383-.823,8.788,8.788,0,0,1,5.921,1.86,7.241,7.241,0,0,1,2.486,4.937h-3.4a3.857,3.857,0,0,1-2.857-1.354,2.49,2.49,0,0,0-.311-.292,3.167,3.167,0,0,0-2.021-.608,2.8,2.8,0,0,0-1.646.411A1.313,1.313,0,0,0,750.62,658a1.376,1.376,0,0,0,.912,1.288,14.618,14.618,0,0,0,2.844.859,31.179,31.179,0,0,1,3.614,1.127,6.239,6.239,0,0,1,2.451,1.789,5.065,5.065,0,0,1,1.091,3.309,5.252,5.252,0,0,1-.984,3.13,6.5,6.5,0,0,1-2.826,2.165,10.817,10.817,0,0,1-4.275.787A11.47,11.47,0,0,1,748.795,671.562Z" transform="translate(-591.239 -617.456)" fill="#08374f"></path><path id="Path_39" data-name="Path 39" d="M879.862,604.6a8.911,8.911,0,0,1,2.075,6.243v11.663h-6.082V611.67a4.384,4.384,0,0,0-1.038-3.113,4.066,4.066,0,0,0-5.581,0,4.38,4.38,0,0,0-1.038,3.113v10.841h-6.118V592.8h0a6.118,6.118,0,0,1,6.118,6.118v6.315a6.541,6.541,0,0,1,2.54-2.111,8.12,8.12,0,0,1,3.613-.787A7.1,7.1,0,0,1,879.862,604.6Z" transform="translate(-690.208 -567.797)" fill="#08374f"></path><path id="Path_40" data-name="Path 40" d="M1006.956,617.323v5.188h-3.113a7.616,7.616,0,0,1-5.187-1.628q-1.861-1.628-1.86-5.313v-7.943h-2.433v-5.08H996.8V592.8h0a6.118,6.118,0,0,1,6.118,6.118v3.632h4.007v5.08h-4.007v8.014a1.676,1.676,0,0,0,.429,1.288,2.093,2.093,0,0,0,1.431.393Z" transform="translate(-801.316 -567.797)" fill="#08374f"></path><path id="Path_41" data-name="Path 41" d="M1094.92,653.316a6.92,6.92,0,0,1,3.578-.948v6.476h-1.682a5.156,5.156,0,0,0-3.435.984,4.37,4.37,0,0,0-1.145,3.453v9.266h-6.118V652.583h2.791a3.327,3.327,0,0,1,3.327,3.327h0A8.075,8.075,0,0,1,1094.92,653.316Z" transform="translate(-878.385 -617.833)" fill="#08374f"></path><path id="Path_42" data-name="Path 42" d="M1188.564,663.655h-13.846a4.158,4.158,0,0,0,1.2,2.844,3.659,3.659,0,0,0,2.594.984,3.6,3.6,0,0,0,2.052-.554,8.188,8.188,0,0,1,4.564-1.378h3.079a8.941,8.941,0,0,1-1.807,3.542,9.046,9.046,0,0,1-3.274,2.469,10.512,10.512,0,0,1-4.4.894,10.7,10.7,0,0,1-5.224-1.252,8.9,8.9,0,0,1-3.578-3.578,11.045,11.045,0,0,1-1.288-5.438,11.172,11.172,0,0,1,1.27-5.438,8.793,8.793,0,0,1,3.56-3.578,11.594,11.594,0,0,1,10.411-.036,8.735,8.735,0,0,1,3.524,3.47,10.537,10.537,0,0,1,1.27,5.259A15.567,15.567,0,0,1,1188.564,663.655Zm-6.154-3.4a3.146,3.146,0,0,0-1.073-2.5,3.951,3.951,0,0,0-2.683-.93,3.876,3.876,0,0,0-2.594.894,3.97,3.97,0,0,0-1.306,2.54Z" transform="translate(-947.694 -617.456)" fill="#08374f"></path><path id="Path_43" data-name="Path 43" d="M1320.477,663.655h-13.846a4.156,4.156,0,0,0,1.2,2.844,3.659,3.659,0,0,0,2.594.984,3.6,3.6,0,0,0,2.052-.554,8.188,8.188,0,0,1,4.564-1.378h3.079a8.941,8.941,0,0,1-1.807,3.542,9.045,9.045,0,0,1-3.274,2.469,10.512,10.512,0,0,1-4.4.894,10.7,10.7,0,0,1-5.224-1.252,8.9,8.9,0,0,1-3.578-3.578,11.047,11.047,0,0,1-1.288-5.438,11.171,11.171,0,0,1,1.27-5.438,8.792,8.792,0,0,1,3.56-3.578,11.594,11.594,0,0,1,10.411-.036,8.736,8.736,0,0,1,3.524,3.47,10.539,10.539,0,0,1,1.27,5.259A15.568,15.568,0,0,1,1320.477,663.655Zm-6.153-3.4a3.146,3.146,0,0,0-1.073-2.5,3.951,3.951,0,0,0-2.683-.93,3.876,3.876,0,0,0-2.594.894,3.97,3.97,0,0,0-1.306,2.54Z" transform="translate(-1058.492 -617.456)" fill="#08374f"></path></g></svg>
const start = <svg width="175" height="87" viewBox="0 0 300 87" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 39.9654H10.9015C10.9015 43.4005 12.5793 44.8949 16.4628 44.8949C19.8568 44.8949 22.2792 43.5722 22.2792 40.5974C22.2792 37.6309 15.7549 36.7133 10.9858 35.4355C5.2714 33.9043 3.82342 28.9533 3.82342 25.6198C3.82342 18.3974 10.5239 13.0751 20.2546 13.0751C29.941 13.0751 34.7583 17.3589 34.7583 25.367H24.5362C24.5362 22.9012 22.9585 20.88 19.749 20.88C16.1093 20.88 14.4721 22.4029 14.4721 24.577C14.4721 26.9974 17.5614 27.652 23.3622 29.2064C29.9001 30.9582 32.7992 34.8277 32.7992 39.7759C32.7992 47.2476 25.0613 53.0789 16.368 53.0789C6.60808 53.0789 0 47.9846 0 39.9654Z" fill="black"/>
<path d="M32.6969 51.7487L40.6356 14.0247L50.6523 14.0231L47.5557 28.2424C50.7047 25.0934 53.8398 24.2208 56.9405 24.2208C60.9899 24.2208 64.9665 26.0707 64.9665 31.0547C64.9665 37.4786 63.438 44.5285 61.1746 51.7487H51.4107L54.8865 35.8464C55.4516 33.7376 54.2967 31.6131 51.1579 31.5919C48.2874 31.5919 46.7093 33.3656 45.881 36.9004L42.8159 51.7487H32.6969Z" fill="black"/>
<path d="M161.217 0V67.4088Z" fill="#B04949"/>
<path d="M161.217 0V67.4088" stroke="black" stroke-width="1.53824" stroke-linejoin="round"/>
<path d="M171.205 56.1237V7.64372L178.089 9.22938L195.759 35.2044V11.7536L202.988 13.2287V51.2296L198.382 51.7478L179.612 27.1624V54.6842L171.205 56.1237Z" fill="black"/>
<path d="M172.645 57.5056L180.878 56.1237V30.7897" stroke="black" stroke-width="1.02549" stroke-linejoin="round"/>
<path d="M198.958 53.6479L204.6 52.957V13.5166" stroke="black" stroke-width="1.02549" stroke-linejoin="round"/>
<path d="M210.761 13.8621V50.0781L216.4 49.739V14.1557L210.761 13.8621Z" fill="black"/>
<path d="M217.988 14.6442V51.4311H212.459" stroke="black" stroke-width="1.02549" stroke-linejoin="round"/>
<path d="M223.688 48.6397V14.956L228.264 15.4166L243.119 34.7625V16.3378L249.222 17.2591V46.5659L244.271 47.6598L229.992 28.8321L229.673 48.5176L223.688 48.6397Z" fill="black"/>
<path d="M223.973 50.5533H231.383L231.22 32.4359" stroke="black" stroke-width="1.02549" stroke-linejoin="round"/>
<path d="M245.877 49.2097L250.681 48.314V17.8198" stroke="black" stroke-width="1.02549" stroke-linejoin="round"/>
<path d="M251.169 63.5815C264.762 57.9137 262.072 46.1522 262.447 18.0641L256.666 17.3313C256.666 44.2072 257.277 50.0781 251.169 63.5815Z" fill="black"/>
<path d="M251.554 65.7391C262.538 59.5559 264.279 54.321 264.279 38.0902V18.227" stroke="black" stroke-width="1.02549" stroke-linejoin="round"/>
<path d="M267.244 45.2416L278.644 18.227H285.669L296.752 45.2704H290.332L288.087 40.549H276.111L274.528 45.3856L267.244 45.2416Z" fill="black"/>
<path d="M267.244 47.5447H275.42L277.378 41.983" stroke="black" stroke-width="1.02549" stroke-linejoin="round"/>
<path d="M290.793 47.5447H299.487L287.454 18.227" stroke="black" stroke-width="1.02549" stroke-linejoin="round"/>
<path d="M127.216 14.0247L119.213 51.7487H128.944L130.671 44.09L133.147 41.8445L137.177 51.7487H148.52L141.495 35.6262L153.702 24.8017L141.783 24.8035L133.204 32.8896L137.408 14.0247H127.216Z" fill="black"/>
<path d="M68.8907 32.0564H78.794C79.6177 30.4094 80.3697 28.9473 82.8532 28.9473C85.3835 28.9473 86.2502 30.3292 86.2502 32.2004C86.2858 34.4023 83.482 35.6838 80.9531 35.6838C79.0158 35.6838 76.2451 35.4082 70.215 37.3535C67.9084 37.9716 65.4937 41.3006 65.4937 45.0113C65.4937 49.7463 68.6889 52.5539 73.9575 52.5539C78.1504 52.5539 81.1079 51.007 83.5729 49.0705V51.316H92.6989C93.0794 44.4867 95.6698 42.4364 96.2149 31.1738C95.6089 26.2282 92.0295 23.9618 86.3236 23.9618C77.7439 23.9618 72.2782 24.975 68.8907 32.0564Z" fill="black"/>
<path d="M102.113 24.5375L96.2149 51.7486L106.719 51.7476L110.058 36.9505C111.694 31.7241 116.336 32.2223 120.48 33.3231L122.848 24.485C117.625 22.9411 114.667 25.3963 110.922 28.4003L111.757 24.6002L102.113 24.5375Z" fill="black"/>
<path d="M277.723 35.3096L282.56 24.9168L286.59 35.5686L277.723 35.3096Z" fill="white"/>
<path d="M280.4 33.5534L281.998 29.6094Z" fill="#B04949"/>
<path d="M280.4 33.5534L281.998 29.6094" stroke="black" stroke-width="1.02549" stroke-linejoin="round"/>
<path d="M85.1261 39.1071C84.4996 43.3405 82.9092 46.6116 79.441 46.6448C76.9831 46.6448 75.899 45.7223 75.899 43.7134C75.9013 40.7938 78.3416 39.7403 83.0097 40.1319C83.6853 40.0888 84.3745 39.9101 85.1261 39.1071Z" fill="white"/>
<path d="M1.064 84V74.2H4.704C5.39467 74.2 6.006 74.34 6.538 74.62C7.07 74.8907 7.48533 75.2733 7.784 75.768C8.08267 76.2533 8.232 76.818 8.232 77.462C8.232 78.0967 8.08733 78.6613 7.798 79.156C7.50867 79.6507 7.112 80.0427 6.608 80.332C6.104 80.612 5.52067 80.752 4.858 80.752H2.982V84H1.064ZM2.982 78.988H4.816C5.24533 78.988 5.59533 78.848 5.866 78.568C6.146 78.2787 6.286 77.91 6.286 77.462C6.286 77.014 6.132 76.65 5.824 76.37C5.52533 76.09 5.138 75.95 4.662 75.95H2.982V78.988ZM12.3868 84.168C11.6775 84.168 11.0428 84.014 10.4828 83.706C9.93216 83.3887 9.49816 82.9547 9.18083 82.404C8.87283 81.8533 8.71883 81.2187 8.71883 80.5C8.71883 79.7813 8.87283 79.1467 9.18083 78.596C9.48883 78.0453 9.91816 77.616 10.4688 77.308C11.0195 76.9907 11.6495 76.832 12.3588 76.832C13.0775 76.832 13.7122 76.9907 14.2628 77.308C14.8135 77.616 15.2428 78.0453 15.5508 78.596C15.8588 79.1467 16.0128 79.7813 16.0128 80.5C16.0128 81.2187 15.8588 81.8533 15.5508 82.404C15.2428 82.9547 14.8135 83.3887 14.2628 83.706C13.7215 84.014 13.0962 84.168 12.3868 84.168ZM12.3868 82.46C12.7322 82.46 13.0355 82.376 13.2968 82.208C13.5582 82.04 13.7588 81.8113 13.8988 81.522C14.0482 81.2233 14.1228 80.8827 14.1228 80.5C14.1228 80.1173 14.0482 79.7813 13.8988 79.492C13.7495 79.1933 13.5395 78.96 13.2688 78.792C13.0075 78.624 12.7042 78.54 12.3588 78.54C12.0228 78.54 11.7195 78.624 11.4488 78.792C11.1875 78.96 10.9822 79.1933 10.8328 79.492C10.6835 79.7813 10.6088 80.1173 10.6088 80.5C10.6088 80.8827 10.6835 81.2233 10.8328 81.522C10.9822 81.8113 11.1922 82.04 11.4628 82.208C11.7335 82.376 12.0415 82.46 12.3868 82.46ZM23.4828 84L25.8068 77H27.6828L25.3028 84H23.4828ZM18.8348 84L21.0748 77H22.6848L20.4728 84H18.8348ZM18.6528 84L16.2728 77H18.1488L20.3748 84H18.6528ZM23.4828 84L21.2988 77H22.8948L25.1208 84H23.4828ZM31.5655 84.168C30.8748 84.168 30.2635 84.014 29.7315 83.706C29.1995 83.3887 28.7795 82.9547 28.4715 82.404C28.1728 81.8533 28.0235 81.2187 28.0235 80.5C28.0235 79.7813 28.1775 79.1467 28.4855 78.596C28.8028 78.0453 29.2322 77.616 29.7735 77.308C30.3242 76.9907 30.9542 76.832 31.6635 76.832C32.2795 76.832 32.8442 76.9953 33.3575 77.322C33.8802 77.6393 34.2955 78.1107 34.6035 78.736C34.9208 79.352 35.0795 80.1033 35.0795 80.99H29.7735L29.9415 80.822C29.9415 81.1673 30.0255 81.4707 30.1935 81.732C30.3708 81.984 30.5948 82.18 30.8655 82.32C31.1455 82.4507 31.4442 82.516 31.7615 82.516C32.1442 82.516 32.4568 82.4367 32.6995 82.278C32.9422 82.11 33.1288 81.8953 33.2595 81.634L34.9115 82.278C34.7155 82.67 34.4588 83.0107 34.1415 83.3C33.8335 83.58 33.4648 83.7947 33.0355 83.944C32.6062 84.0933 32.1162 84.168 31.5655 84.168ZM30.0395 79.786L29.8715 79.618H33.2455L33.0915 79.786C33.0915 79.45 33.0122 79.184 32.8535 78.988C32.6948 78.7827 32.4988 78.6333 32.2655 78.54C32.0415 78.4467 31.8222 78.4 31.6075 78.4C31.3928 78.4 31.1642 78.4467 30.9215 78.54C30.6788 78.6333 30.4688 78.7827 30.2915 78.988C30.1235 79.184 30.0395 79.45 30.0395 79.786ZM37.4555 80.318C37.4555 79.562 37.6001 78.9367 37.8895 78.442C38.1881 77.9473 38.5661 77.5787 39.0235 77.336C39.4901 77.0933 39.9755 76.972 40.4795 76.972V78.764C40.0501 78.764 39.6441 78.8153 39.2615 78.918C38.8881 79.0207 38.5848 79.1887 38.3515 79.422C38.1181 79.6553 38.0015 79.954 38.0015 80.318H37.4555ZM36.1535 84V77H38.0015V84H36.1535ZM44.6222 84.168C43.9315 84.168 43.3202 84.014 42.7882 83.706C42.2562 83.3887 41.8362 82.9547 41.5282 82.404C41.2295 81.8533 41.0802 81.2187 41.0802 80.5C41.0802 79.7813 41.2342 79.1467 41.5422 78.596C41.8595 78.0453 42.2888 77.616 42.8302 77.308C43.3808 76.9907 44.0108 76.832 44.7202 76.832C45.3362 76.832 45.9008 76.9953 46.4142 77.322C46.9368 77.6393 47.3522 78.1107 47.6602 78.736C47.9775 79.352 48.1362 80.1033 48.1362 80.99H42.8302L42.9982 80.822C42.9982 81.1673 43.0822 81.4707 43.2502 81.732C43.4275 81.984 43.6515 82.18 43.9222 82.32C44.2022 82.4507 44.5008 82.516 44.8182 82.516C45.2008 82.516 45.5135 82.4367 45.7562 82.278C45.9988 82.11 46.1855 81.8953 46.3162 81.634L47.9682 82.278C47.7722 82.67 47.5155 83.0107 47.1982 83.3C46.8902 83.58 46.5215 83.7947 46.0922 83.944C45.6628 84.0933 45.1728 84.168 44.6222 84.168ZM43.0962 79.786L42.9282 79.618H46.3022L46.1482 79.786C46.1482 79.45 46.0688 79.184 45.9102 78.988C45.7515 78.7827 45.5555 78.6333 45.3222 78.54C45.0982 78.4467 44.8788 78.4 44.6642 78.4C44.4495 78.4 44.2208 78.4467 43.9782 78.54C43.7355 78.6333 43.5255 78.7827 43.3482 78.988C43.1802 79.184 43.0962 79.45 43.0962 79.786ZM54.1941 84L54.0961 82.698V74.2H55.9441V84H54.1941ZM51.9961 84.168C51.3521 84.168 50.7921 84.0187 50.3161 83.72C49.8494 83.4213 49.4854 82.9967 49.2241 82.446C48.9628 81.8953 48.8321 81.2467 48.8321 80.5C48.8321 79.744 48.9628 79.0953 49.2241 78.554C49.4854 78.0033 49.8494 77.5787 50.3161 77.28C50.7921 76.9813 51.3521 76.832 51.9961 76.832C52.5841 76.832 53.0788 76.9813 53.4801 77.28C53.8908 77.5787 54.2034 78.0033 54.4181 78.554C54.6328 79.0953 54.7401 79.744 54.7401 80.5C54.7401 81.2467 54.6328 81.8953 54.4181 82.446C54.2034 82.9967 53.8908 83.4213 53.4801 83.72C53.0788 84.0187 52.5841 84.168 51.9961 84.168ZM52.4721 82.474C52.7894 82.474 53.0694 82.39 53.3121 82.222C53.5641 82.054 53.7601 81.8207 53.9001 81.522C54.0401 81.2233 54.1101 80.8827 54.1101 80.5C54.1101 80.1173 54.0401 79.7767 53.9001 79.478C53.7601 79.1793 53.5641 78.9507 53.3121 78.792C53.0694 78.624 52.7848 78.54 52.4581 78.54C52.1221 78.54 51.8281 78.624 51.5761 78.792C51.3241 78.9507 51.1234 79.1793 50.9741 79.478C50.8248 79.7767 50.7501 80.1173 50.7501 80.5C50.7501 80.8827 50.8248 81.2233 50.9741 81.522C51.1234 81.8207 51.3241 82.054 51.5761 82.222C51.8374 82.39 52.1361 82.474 52.4721 82.474ZM60.8722 84V74.2H62.7202V82.698L62.6222 84H60.8722ZM64.8342 84.168C64.2462 84.168 63.7469 84.0187 63.3362 83.72C62.9349 83.4213 62.6269 82.9967 62.4122 82.446C62.1976 81.8953 62.0902 81.2467 62.0902 80.5C62.0902 79.744 62.1976 79.0953 62.4122 78.554C62.6269 78.0033 62.9349 77.5787 63.3362 77.28C63.7469 76.9813 64.2462 76.832 64.8342 76.832C65.4782 76.832 66.0336 76.9813 66.5002 77.28C66.9762 77.5787 67.3449 78.0033 67.6062 78.554C67.8676 79.0953 67.9982 79.744 67.9982 80.5C67.9982 81.2467 67.8676 81.8953 67.6062 82.446C67.3449 82.9967 66.9762 83.4213 66.5002 83.72C66.0336 84.0187 65.4782 84.168 64.8342 84.168ZM64.3582 82.474C64.6942 82.474 64.9882 82.39 65.2402 82.222C65.5016 82.054 65.7069 81.8207 65.8562 81.522C66.0056 81.2233 66.0802 80.8827 66.0802 80.5C66.0802 80.1173 66.0056 79.7767 65.8562 79.478C65.7162 79.1793 65.5156 78.9507 65.2542 78.792C65.0022 78.624 64.7082 78.54 64.3722 78.54C64.0549 78.54 63.7702 78.624 63.5182 78.792C63.2662 78.96 63.0702 79.1933 62.9302 79.492C62.7902 79.7813 62.7202 80.1173 62.7202 80.5C62.7202 80.8827 62.7902 81.2233 62.9302 81.522C63.0702 81.8207 63.2616 82.054 63.5042 82.222C63.7562 82.39 64.0409 82.474 64.3582 82.474ZM70.3113 86.968C70.0593 86.968 69.7793 86.9167 69.4713 86.814C69.1726 86.7207 68.9066 86.6087 68.6733 86.478L69.3593 84.98C69.5179 85.064 69.6626 85.1293 69.7933 85.176C69.9333 85.232 70.0546 85.26 70.1573 85.26C70.3533 85.26 70.5259 85.204 70.6753 85.092C70.8246 84.9893 70.9459 84.8353 71.0393 84.63L71.8653 82.684L74.0913 77H76.1213L72.9433 84.602C72.7473 85.0687 72.5419 85.4793 72.3273 85.834C72.1126 86.198 71.8466 86.478 71.5293 86.674C71.2213 86.87 70.8153 86.968 70.3113 86.968ZM71.3753 84L68.1693 77H70.1993L72.5373 82.684L73.1393 84H71.3753Z" fill="#646464"/>
<path d="M97.3901 72.5676L94.3055 83.9714H90.443L88.6448 76.5736L86.7849 83.9714H82.9429L79.8366 72.5676H81.4092C81.9507 72.568 82.4753 72.7561 82.8938 73.0998C83.3122 73.4435 83.5987 73.9215 83.7043 74.4526L84.9456 80.7211L86.4416 74.3704C86.5629 73.8573 86.8536 73.4002 87.2669 73.0729C87.6802 72.7457 88.1919 72.5675 88.719 72.5671C89.2448 72.5674 89.7552 72.7447 90.168 73.0704C90.5808 73.396 90.872 73.8511 90.9948 74.3624L92.5067 80.68L93.7297 74.4538C93.8346 73.9218 94.1209 73.4426 94.5396 73.0981C94.9584 72.7536 95.4837 72.5651 96.026 72.5648L97.3901 72.5676Z" fill="#08374F"/>
<path d="M100.167 67H101.787V68.7822C101.787 69.2794 101.59 69.7562 101.238 70.1078C100.887 70.4594 100.41 70.6569 99.9126 70.6569H98.2926V68.8747C98.2926 68.3775 98.4901 67.9007 98.8417 67.5491C99.1933 67.1975 99.6701 67 100.167 67Z" fill="#F25E67"/>
<path d="M101.787 72.5676H98.2926V83.9714H101.787V72.5676Z" fill="#08374F"/>
<path d="M105.286 83.6241C104.562 83.3241 103.929 82.8417 103.447 82.224C103.004 81.649 102.74 80.9558 102.69 80.2316H104.489C104.863 80.2248 105.235 80.2924 105.583 80.4304C105.931 80.5685 106.248 80.7743 106.516 81.0359C106.571 81.0924 106.631 81.1445 106.695 81.1919C107.045 81.4445 107.469 81.5739 107.9 81.5597C108.256 81.5814 108.609 81.4922 108.912 81.3044C109.023 81.2328 109.114 81.1344 109.176 81.0182C109.239 80.902 109.271 80.772 109.27 80.6401C109.27 80.4811 109.221 80.3259 109.13 80.196C109.038 80.066 108.909 79.9677 108.759 79.9146C108.222 79.695 107.668 79.5207 107.102 79.3937C106.409 79.2397 105.726 79.0381 105.06 78.7904C104.514 78.5789 104.03 78.2348 103.65 77.7891C103.232 77.2662 103.021 76.6079 103.057 75.9395C103.052 75.3024 103.241 74.6789 103.599 74.1516C103.997 73.5827 104.551 73.1395 105.193 72.8744C105.985 72.5434 106.838 72.3832 107.697 72.4043C108.916 72.3353 110.118 72.713 111.079 73.4668C111.906 74.182 112.417 75.196 112.499 76.2868H110.557C110.245 76.2805 109.939 76.2083 109.658 76.075C109.376 75.9417 109.127 75.7503 108.925 75.5134C108.87 75.4528 108.811 75.397 108.747 75.3466C108.413 75.1022 108.006 74.9797 107.593 74.9993C107.262 74.9785 106.934 75.0605 106.652 75.2341C106.549 75.3055 106.465 75.4019 106.408 75.5143C106.352 75.6267 106.324 75.7515 106.328 75.8773C106.329 76.0385 106.38 76.1956 106.473 76.3272C106.566 76.4588 106.698 76.5586 106.849 76.613C107.373 76.8313 107.917 76.9957 108.474 77.1036C109.174 77.2762 109.864 77.4912 110.538 77.7474C111.082 77.9676 111.563 78.3187 111.938 78.7693C112.363 79.3058 112.584 79.9756 112.562 80.6595C112.57 81.3002 112.373 81.9267 111.999 82.4474C111.587 83.0018 111.028 83.4301 110.385 83.6841C109.61 83.9976 108.779 84.1505 107.943 84.1336C107.032 84.1505 106.127 83.977 105.286 83.6241Z" fill="#08374F"/>
<path d="M123.621 73.7403C124.456 74.7343 124.88 76.0101 124.806 77.3064V83.9685H121.332V77.7788C121.372 77.1317 121.159 76.4943 120.739 76.0006C120.308 75.5939 119.738 75.3673 119.145 75.3673C118.552 75.3673 117.982 75.5939 117.551 76.0006C117.131 76.4941 116.918 77.1317 116.958 77.7788V83.9714H113.464V67C114.39 67 115.279 67.3682 115.935 68.0236C116.59 68.679 116.958 69.5679 116.958 70.4947V74.1019C117.331 73.5825 117.83 73.1673 118.409 72.8961C119.053 72.5895 119.76 72.4357 120.473 72.4466C121.06 72.4213 121.646 72.5239 122.189 72.7473C122.733 72.9707 123.221 73.3095 123.621 73.7403Z" fill="#08374F"/>
<path d="M132.752 81.0079V83.9714H130.974C129.906 84.0364 128.851 83.7054 128.011 83.0414C127.303 82.4215 126.948 81.4099 126.949 80.0066V75.4694H125.559V72.5676H126.951V67C127.878 67 128.767 67.3682 129.422 68.0236C130.078 68.679 130.446 69.5679 130.446 70.4947V72.5693H132.735V75.4711H130.446V80.0488C130.433 80.1818 130.448 80.3159 130.49 80.4426C130.533 80.5693 130.601 80.6858 130.691 80.7846C130.927 80.9567 131.217 81.0366 131.508 81.0091L132.752 81.0079Z" fill="#08374F"/>
<path d="M138.976 72.9863C139.595 72.6236 140.302 72.4364 141.019 72.4448V76.144H140.059C139.359 76.0915 138.663 76.2908 138.097 76.7061C137.852 76.9686 137.667 77.2806 137.555 77.621C137.442 77.9614 137.403 78.322 137.442 78.6785V83.9714H133.948V72.5676H135.542C136.046 72.5676 136.53 72.7678 136.886 73.1242C137.242 73.4806 137.442 73.964 137.442 74.4681C137.831 73.8612 138.356 73.3537 138.976 72.9863Z" fill="#08374F"/>
<path d="M152.876 79.1075H144.967C144.979 79.7169 145.224 80.2985 145.653 80.732C146.054 81.1066 146.586 81.3085 147.134 81.2941C147.548 81.309 147.956 81.1987 148.306 80.9777C149.078 80.4625 149.986 80.1885 150.913 80.1905H152.672C152.484 80.9339 152.132 81.6254 151.64 82.2138C151.133 82.8208 150.493 83.3033 149.77 83.6241C148.979 83.9733 148.121 84.1475 147.257 84.1347C146.217 84.154 145.19 83.9078 144.272 83.4196C143.408 82.9504 142.698 82.2404 142.229 81.3758C141.721 80.4205 141.468 79.3509 141.493 78.2695C141.468 77.1894 141.718 76.1206 142.218 75.1632C142.682 74.2979 143.389 73.5873 144.252 73.1194C145.173 72.6526 146.19 72.4077 147.223 72.4041C148.256 72.4005 149.275 72.6385 150.199 73.0989C151.047 73.5519 151.746 74.2402 152.212 75.081C152.711 76.0021 152.961 77.0376 152.937 78.085C152.937 78.4267 152.916 78.7681 152.876 79.1075ZM149.361 77.1654C149.372 76.8966 149.323 76.6288 149.217 76.3816C149.111 76.1345 148.951 75.9143 148.748 75.7373C148.321 75.3764 147.774 75.1871 147.215 75.2061C146.676 75.19 146.149 75.3716 145.734 75.7167C145.314 76.0911 145.048 76.6082 144.988 77.1676L149.361 77.1654Z" fill="#08374F"/>
<path d="M164.937 79.1075H157.028C157.04 79.7169 157.285 80.2986 157.714 80.732C158.115 81.1066 158.647 81.3085 159.196 81.2941C159.609 81.309 160.018 81.1987 160.368 80.9777C161.139 80.4625 162.047 80.1885 162.975 80.1905H164.733C164.546 80.9339 164.193 81.6254 163.701 82.2138C163.194 82.8208 162.554 83.3033 161.831 83.6241C161.04 83.9733 160.183 84.1475 159.318 84.1347C158.278 84.154 157.251 83.9078 156.334 83.4196C155.469 82.9504 154.759 82.2404 154.29 81.3758C153.783 80.4205 153.529 79.3509 153.554 78.2695C153.529 77.1894 153.779 76.1206 154.28 75.1632C154.743 74.2979 155.45 73.5873 156.313 73.1194C157.234 72.6526 158.252 72.4077 159.284 72.4041C160.317 72.4005 161.336 72.6385 162.26 73.0989C163.108 73.5519 163.807 74.2402 164.273 75.081C164.772 76.0022 165.022 77.0376 164.998 78.085C164.998 78.4267 164.977 78.7681 164.937 79.1075ZM161.423 77.1654C161.434 76.8966 161.385 76.6288 161.279 76.3816C161.172 76.1345 161.012 75.9143 160.81 75.7373C160.382 75.3764 159.836 75.1871 159.277 75.2061C158.738 75.19 158.211 75.3716 157.795 75.7167C157.375 76.0911 157.109 76.6082 157.049 77.1676L161.423 77.1654Z" fill="#08374F"/>
</svg>

  return (
    <div className="card">
      <MegaMenu model={items} start={start} orientation="vertical" breakpoint="960px" />
    </div>
  )
}
