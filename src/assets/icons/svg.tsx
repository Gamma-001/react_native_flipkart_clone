import Svg, { G, Path } from 'react-native-svg';

type SvgProps = {
  fill?: string,
  stroke?: string,
  viewBox?: string,
  strokeWidth?: number
};

// ---------- main navigation

export function SvgHome(props: SvgProps): JSX.Element {
  return (
    <Svg viewBox = '2 2 20 20' {...props} fill = 'none'>
      <Path d="M0 0H24V24H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill = { props.fill || '#fff' }
        d="M13.993 3.434a3 3 0 00-3.986 0l-7.671 6.819a1 1 0 101.328 1.494L4 11.45v5.617c0 .886 0 1.65.082 2.262.088.655.287 1.284.797 1.793.51.51 1.138.709 1.793.797C7.284 22 8.048 22 8.934 22h6.132c.886 0 1.65 0 2.262-.082.655-.088 1.284-.287 1.793-.797.51-.51.709-1.138.797-1.793.082-.612.082-1.376.082-2.262v-5.617l.336.298a1 1 0 001.328-1.494l-7.67-6.82zM12 16a1 1 0 00-1 1v2a1 1 0 11-2 0v-2a3 3 0 116 0v2a1 1 0 11-2 0v-2a1 1 0 00-1-1z"
      />
    </Svg>
  );
}

export function SvgShops(props: SvgProps) {
  return (
    <Svg viewBox = '0 0 64 64' {...props}>
      <G>
        <Path d="M17 28a4 4 0 004-4V0h-8v24a4 4 0 004 4zM53 24a4 4 0 004 4h4c1.312 0 2-.687 2-2V4c0-2.211-1.789-4-4-4h-6v24zM27 28a4 4 0 004-4V0h-8v24a4 4 0 004 4zM7 28a4 4 0 004-4V0H5C2.789 0 1 1.789 1 4v22c0 1.313.812 2 2 2h4zM37 28a4 4 0 004-4V0h-8v24a4 4 0 004 4zM47 28a4 4 0 004-4V0h-8v24a4 4 0 004 4zM12 64h12V50h-1a1 1 0 110-2h1V38H12v26zM30 56h22V38H30v18zm17.293-15.707a.999.999 0 011.414 0l1 1a.999.999 0 11-1.414 1.414l-1-1a.999.999 0 010-1.414zm-5 0a.999.999 0 011.414 0l6 6a.999.999 0 11-1.414 1.414l-6-6a.999.999 0 010-1.414z" />
        <Path d="M57 30a5.99 5.99 0 01-5-2.687C50.926 28.932 49.088 30 47 30s-3.926-1.068-5-2.687C40.926 28.932 39.088 30 37 30s-3.926-1.068-5-2.687C30.926 28.932 29.088 30 27 30s-3.926-1.068-5-2.687C20.926 28.932 19.088 30 17 30s-3.926-1.068-5-2.687A5.99 5.99 0 017 30H4v30c0 2.211 1.789 4 4 4h2V37a1 1 0 011-1h14a1 1 0 011 1v27h30c2.211 0 4-1.789 4-4V30h-3zm-3 27a1 1 0 01-1 1H29a1 1 0 01-1-1V37a1 1 0 011-1h24a1 1 0 011 1v20z" />
      </G>
    </Svg>
  );
}

export function SvgNotifications(props: SvgProps) {
  return (
    <Svg viewBox = '2 2 20 20' {...props} fill = 'none'>
      <Path
        d="M3 18a1 1 0 01-.894-1.447L4 12.763V10a8 8 0 1116 0v2.764l1.894 3.789A1 1 0 0121 18H3zm9 4a4.002 4.002 0 01-3.874-3h7.748A4.002 4.002 0 0112 22z"
        fill = { props.fill || '#000' }
      />
    </Svg>
  );
}

export function SvgAccount(props: SvgProps) {
  return (
    <Svg viewBox = '2 2 20 20' {...props}>
      <Path fill = 'none' d="M0 0h24v24H0z" />
      <Path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0012.16 13a8.968 8.968 0 00-6.137 2.416zM12 11a3 3 0 100-6 3 3 0 000 6z" />
    </Svg>
  );
}

export function SvgCart(props: SvgProps) {
  return (
    <Svg viewBox = '4 2 18 18' {...props} fill = 'none'>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 19.5a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM16.5 19.5a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM3 4a.5.5 0 01.5-.5h2a.5.5 0 01.476.348L9.37 14.5H17a.5.5 0 010 1H9.004a.5.5 0 01-.476-.348L5.135 4.5H3.5A.5.5 0 013 4z"
        fill = { props.fill || '#000' }
      />
      <Path
        d="M8.5 13L6 6h13.337a.5.5 0 01.48.637l-1.713 6a.5.5 0 01-.481.363H8.5z"
        fill = { props.fill || '#000' }
      />
    </Svg>
  );
}

// ---------- account screen navigation

export function SvgOrders(props: SvgProps) {
  return (
    <Svg viewBox='2 2 20 20' {...props} fill='none' >
      <Path
        d="M20.387 7.157L12 12 3.61 7.15M12 12v9"
        stroke = { props.stroke || '#000' }
        strokeWidth = { props.strokeWidth || 2 }
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 2.577a2 2 0 012 0l6.66 3.846a2 2 0 011 1.732v7.69a2 2 0 01-1 1.732L13 21.423a2 2 0 01-2 0l-6.66-3.846a2 2 0 01-1-1.732v-7.69a2 2 0 011-1.732L11 2.577zM8.5 4.5L16 9"
        stroke = { props.stroke || '#000' }
        strokeWidth = { props.strokeWidth || 2 }
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function SvgWishlist(props: SvgProps) {
  return (
    <Svg viewBox = '2 2 20 20' {...props} fill='none' >
      <Path
        d="M12 7.694C10 3 3 3.5 3 9.5s9 11 9 11 9-5 9-11-7-6.5-9-1.806z"
        stroke = { props.stroke || '#000' }
        strokeWidth = { props.strokeWidth || 2 }
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function SvgGift(props: SvgProps) {
  return (
    <Svg viewBox='60 60 400 400' {...props} >
      <Path d="M408 160h-64c15.55-.021 28.483-12.719 28.504-28.269.021-15.55-12.568-28.139-28.118-28.118.023-17.486-15.9-31.228-34.048-27.504C297.124 78.82 288 91.085 288 104.575v5.667c-4.256-3.838-9.831-6.242-16-6.242h-32c-6.169 0-11.744 2.404-16 6.242v-5.667c0-13.491-9.124-25.755-22.339-28.467-18.148-3.724-34.071 10.018-34.048 27.504-15.549-.021-28.138 12.568-28.118 28.118.022 15.551 12.955 28.249 28.505 28.27h-64c-17.673 0-32 14.327-32 32v8c0 17.673 14.327 32 32 32h96v16H96v161.28c0 16.966 13.754 30.72 30.72 30.72H200c8.837 0 16-7.163 16-16V168h80v256c0 8.837 7.163 16 16 16h73.28c16.966 0 30.72-13.754 30.72-30.72V248H312v-16h96c17.673 0 32-14.327 32-32v-8c0-17.673-14.327-32-32-32zm-176-8v-24c0-4.41 3.586-8 8-8h32c4.414 0 8 3.59 8 8v24h-48z" />
    </Svg>
  )
}

export function SvgHeadset(props: SvgProps) {
  return (
    <Svg viewBox = '1 1 22 22' {...props} fill = 'none'>
      <Path
        d="M20 19h-2a2 2 0 01-2-2v-2a2 2 0 012-2h2m0 6v-6m0 6v0a3 3 0 01-3 3h-6m-7-9v4a2 2 0 002 2v0a2 2 0 002-2v-2a2 2 0 00-2-2H4zm0 0v-3a8 8 0 018-8v0a8 8 0 018 8v3"
        stroke = { props.stroke || '#000' }
        strokeWidth = { props.strokeWidth || 2 }
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

// ---------- home screen navigation

export function SvgSearch(props: SvgProps) {
  return (
    <Svg viewBox='2 2 16 16' {...props} fill='none'>
      <Path
        fill = { props.fill || '#000' }
        fillRule="evenodd"
        d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
      />
    </Svg>
  )
}

export function SvgMicrophone(props: SvgProps) {
  return (
    <Svg viewBox = '0 0 32 32' {...props}>
      <Path 
        stroke = { props.stroke || '#000' }
        strokeWidth = { props.strokeWidth || 1 } 
        d="M15.965 22h.238C18.983 22 21 19.95 21 17.126V5.207C21 2.287 18.892 0 16.202 0h-.237C13.227 0 11 2.336 11 5.207v11.919C11 19.905 13.135 22 15.965 22zM13 5.207C13 3.439 14.33 2 15.965 2h.238C17.798 2 19 3.379 19 5.207v11.919C19 18.844 17.876 20 16.202 20h-.237C14.219 20 13 18.819 13 17.126zM25 11a1 1 0 00-1 1v4.159c0 5.95-2.124 8.842-6.492 8.842h-2.973C8.822 25.001 8 20.193 8 16.16v-4.159a1 1 0 00-2 0v4.159c0 6.89 2.872 10.841 8.535 10.841H15v3h-5a1 1 0 000 2h12a1 1 0 000-2h-5v-3h.508c3.874 0 8.492-1.881 8.492-10.842V12a1 1 0 00-1-1z" />
    </Svg>
  )
}

export function SvgCamera(props: SvgProps) {
  return (
    <Svg
      viewBox = '2 2 20 20' {...props} fill='none'
    >
      <Path
        d="M21 13c0-2.667-.5-5-1-5.333-.32-.214-1.873-.428-4-.553C14.808 7.043 17 5 12 5S9.192 7.043 8 7.114c-2.127.125-3.68.339-4 .553C3.5 8 3 10.333 3 13c0 2.667.5 5 1 5.333.5.334 4 .667 8 .667s7.5-.333 8-.667c.5-.333 1-2.666 1-5.333z"
        stroke = { props.stroke || '#000' }
        strokeWidth = { props.strokeWidth || 1.5 }
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 16a3 3 0 100-6 3 3 0 000 6z"
        stroke = { props.stroke || '#000' }
        strokeWidth = { props.strokeWidth || 1.5 }
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

const SVGIcons = {
  SvgAccount, SvgCart, SvgHome, SvgNotifications, SvgShops
}
export default SVGIcons;