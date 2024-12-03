import { MegaMenu } from 'primereact/megamenu';
// import { MenuItem } from 'primereact/menuitem';

export default function MenuItem() {
  const items = [
    {
      label: 'Users',
      icon: 'pi pi-box',
      url: '/users'
    },
    {
      label: 'Devices',
      icon: 'pi pi-mobile',
      url: '/devices'
    },
    {
      label: 'Videos',
      icon: 'pi pi-clock',
      url: '/videos'
    },
    {
      label: 'Campaigns',
      icon: 'pi pi-clock',
      url: '/campaigns'
    }
  ];
  const start = <svg xmlns="http://www.w3.org/2000/svg" width="149.092" height="30" viewBox="0 0 149.092 30"><g id="Group_8" data-name="Group 8" transform="translate(-113 -25)"><path id="Path_36" data-name="Path 36" d="M525.018,653.709l-5.4,19.964h-6.762l-3.148-12.951-3.256,12.951h-6.726l-5.438-19.964h2.753a4.1,4.1,0,0,1,4.018,3.3l2.173,10.974,2.619-11.118a4.1,4.1,0,0,1,3.987-3.157h0a4.1,4.1,0,0,1,3.984,3.143l2.647,11.06,2.141-10.9a4.1,4.1,0,0,1,4.02-3.307Z" transform="translate(-381.285 -618.959)" fill="#08374f"></path><path id="Path_37" data-name="Path 37" d="M699.439,592.8h2.836v3.12a3.282,3.282,0,0,1-3.282,3.282h-2.836v-3.12A3.282,3.282,0,0,1,699.439,592.8Z" transform="translate(-550.844 -567.797)" fill="#f25e67"></path><rect id="Rectangle_45" data-name="Rectangle 45" width="6.118" height="19.964" transform="translate(145.313 34.75)" fill="#08374f"></rect><path id="Path_38" data-name="Path 38" d="M748.795,671.562a7.941,7.941,0,0,1-3.22-2.451,6.443,6.443,0,0,1-1.324-3.488H747.4a4.947,4.947,0,0,1,3.548,1.408,2.729,2.729,0,0,0,.313.273,3.416,3.416,0,0,0,2.111.644,3.011,3.011,0,0,0,1.771-.447,1.369,1.369,0,0,0,.626-1.163,1.342,1.342,0,0,0-.894-1.27,18.173,18.173,0,0,0-2.9-.912A27.1,27.1,0,0,1,748.4,663.1a6.173,6.173,0,0,1-2.469-1.753,4.776,4.776,0,0,1-1.038-3.238,5.5,5.5,0,0,1,.948-3.13,6.383,6.383,0,0,1,2.791-2.236,10.687,10.687,0,0,1,4.383-.823,8.788,8.788,0,0,1,5.921,1.86,7.241,7.241,0,0,1,2.486,4.937h-3.4a3.857,3.857,0,0,1-2.857-1.354,2.49,2.49,0,0,0-.311-.292,3.167,3.167,0,0,0-2.021-.608,2.8,2.8,0,0,0-1.646.411A1.313,1.313,0,0,0,750.62,658a1.376,1.376,0,0,0,.912,1.288,14.618,14.618,0,0,0,2.844.859,31.179,31.179,0,0,1,3.614,1.127,6.239,6.239,0,0,1,2.451,1.789,5.065,5.065,0,0,1,1.091,3.309,5.252,5.252,0,0,1-.984,3.13,6.5,6.5,0,0,1-2.826,2.165,10.817,10.817,0,0,1-4.275.787A11.47,11.47,0,0,1,748.795,671.562Z" transform="translate(-591.239 -617.456)" fill="#08374f"></path><path id="Path_39" data-name="Path 39" d="M879.862,604.6a8.911,8.911,0,0,1,2.075,6.243v11.663h-6.082V611.67a4.384,4.384,0,0,0-1.038-3.113,4.066,4.066,0,0,0-5.581,0,4.38,4.38,0,0,0-1.038,3.113v10.841h-6.118V592.8h0a6.118,6.118,0,0,1,6.118,6.118v6.315a6.541,6.541,0,0,1,2.54-2.111,8.12,8.12,0,0,1,3.613-.787A7.1,7.1,0,0,1,879.862,604.6Z" transform="translate(-690.208 -567.797)" fill="#08374f"></path><path id="Path_40" data-name="Path 40" d="M1006.956,617.323v5.188h-3.113a7.616,7.616,0,0,1-5.187-1.628q-1.861-1.628-1.86-5.313v-7.943h-2.433v-5.08H996.8V592.8h0a6.118,6.118,0,0,1,6.118,6.118v3.632h4.007v5.08h-4.007v8.014a1.676,1.676,0,0,0,.429,1.288,2.093,2.093,0,0,0,1.431.393Z" transform="translate(-801.316 -567.797)" fill="#08374f"></path><path id="Path_41" data-name="Path 41" d="M1094.92,653.316a6.92,6.92,0,0,1,3.578-.948v6.476h-1.682a5.156,5.156,0,0,0-3.435.984,4.37,4.37,0,0,0-1.145,3.453v9.266h-6.118V652.583h2.791a3.327,3.327,0,0,1,3.327,3.327h0A8.075,8.075,0,0,1,1094.92,653.316Z" transform="translate(-878.385 -617.833)" fill="#08374f"></path><path id="Path_42" data-name="Path 42" d="M1188.564,663.655h-13.846a4.158,4.158,0,0,0,1.2,2.844,3.659,3.659,0,0,0,2.594.984,3.6,3.6,0,0,0,2.052-.554,8.188,8.188,0,0,1,4.564-1.378h3.079a8.941,8.941,0,0,1-1.807,3.542,9.046,9.046,0,0,1-3.274,2.469,10.512,10.512,0,0,1-4.4.894,10.7,10.7,0,0,1-5.224-1.252,8.9,8.9,0,0,1-3.578-3.578,11.045,11.045,0,0,1-1.288-5.438,11.172,11.172,0,0,1,1.27-5.438,8.793,8.793,0,0,1,3.56-3.578,11.594,11.594,0,0,1,10.411-.036,8.735,8.735,0,0,1,3.524,3.47,10.537,10.537,0,0,1,1.27,5.259A15.567,15.567,0,0,1,1188.564,663.655Zm-6.154-3.4a3.146,3.146,0,0,0-1.073-2.5,3.951,3.951,0,0,0-2.683-.93,3.876,3.876,0,0,0-2.594.894,3.97,3.97,0,0,0-1.306,2.54Z" transform="translate(-947.694 -617.456)" fill="#08374f"></path><path id="Path_43" data-name="Path 43" d="M1320.477,663.655h-13.846a4.156,4.156,0,0,0,1.2,2.844,3.659,3.659,0,0,0,2.594.984,3.6,3.6,0,0,0,2.052-.554,8.188,8.188,0,0,1,4.564-1.378h3.079a8.941,8.941,0,0,1-1.807,3.542,9.045,9.045,0,0,1-3.274,2.469,10.512,10.512,0,0,1-4.4.894,10.7,10.7,0,0,1-5.224-1.252,8.9,8.9,0,0,1-3.578-3.578,11.047,11.047,0,0,1-1.288-5.438,11.171,11.171,0,0,1,1.27-5.438,8.792,8.792,0,0,1,3.56-3.578,11.594,11.594,0,0,1,10.411-.036,8.736,8.736,0,0,1,3.524,3.47,10.539,10.539,0,0,1,1.27,5.259A15.568,15.568,0,0,1,1320.477,663.655Zm-6.153-3.4a3.146,3.146,0,0,0-1.073-2.5,3.951,3.951,0,0,0-2.683-.93,3.876,3.876,0,0,0-2.594.894,3.97,3.97,0,0,0-1.306,2.54Z" transform="translate(-1058.492 -617.456)" fill="#08374f"></path></g></svg>

  return (
    <div className="card">
      <MegaMenu model={items} start={start} orientation="vertical" breakpoint="960px" />
    </div>
  )
}
