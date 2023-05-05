import Svg, { G, Path } from 'react-native-svg';

type SvgProps = {
  fill?: string,
  stroke?: string,
  viewBox?: string
};

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
      <Path fill="none" d="M0 0h24v24H0z" />
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

const SVGIcons = {
  SvgAccount, SvgCart, SvgHome, SvgNotifications, SvgShops
}
export default SVGIcons;