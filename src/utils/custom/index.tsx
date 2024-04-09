import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { webColors } from '../../assets/constant';
import Switch, { SwitchProps } from '@mui/material/Switch';

export const PrimaryButton = styled(Button)({
    backgroundColor: webColors["primary"],
    color : "white",
    fontWeight: "500",
    fontSize: "14px",
    borderRadius:'8px',
    height :"48px",
    '&:hover': {
        background: webColors["primary"],
        color : 'white'
     },
});

export const LightButton = styled(Button)({
  backgroundColor: webColors["primary-light"],
  color : webColors['text'],
  fontWeight: "500",
  fontSize: "14px",
  borderRadius:'8px',
  height :"38px",
  padding : "11px 18px",
  '&:hover': {
      background: webColors["primary"],
      color : 'white'
   },
});

// export const PrimaryOutlineButton = styled(Button)({
//    border: `1px solid ${webColors.primary[500]}`,
//    color : webColors.primary[500],
//    fontWeight: "500",
//    fontSize: "14px",
//    borderRadius:'6px',
//    height :"36px",
//    background: 'transparent',
//    '&:hover': {
//       color : 'white',
//        background: webColors.primary[500],
       
//     },
// });

// export const GrayOutlineButton = styled(Button)({
//     border: `1px solid ${webColors.grey[200]}`,
//     color : webColors.grey[500],
//     fontWeight: "500",
//     fontSize: "14px",
//     borderRadius:'6px',
//     height :"36px",
//     background: 'transparent',
//     boxShadow : 'none',
//     '&:hover': {
//         background: webColors.grey[100],
        
//      },
// });

// export const IOSSwitch = styled((props: SwitchProps) => (
//   <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
// ))(({ theme }) => ({
//   width: 42,
//   height: 26,
//   padding: 0,
//   '& .MuiSwitch-switchBase': {
//     padding: 0,
//     margin: 2,
//     transitionDuration: '300ms',
//     '&.Mui-checked': {
//       transform: 'translateX(16px)',
//       color: '#fff',
//       '& + .MuiSwitch-track': {
//         backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : webColors.success[500],
//         opacity: 1,
//         border: 0,
//       },
//       '&.Mui-disabled + .MuiSwitch-track': {
//         opacity: 0.5,
//       },
//     },
//     '&.Mui-focusVisible .MuiSwitch-thumb': {
//       color: '#33cf4d',
//       border: '6px solid #fff',
//     },
//     '&.Mui-disabled .MuiSwitch-thumb': {
//       color:
//         theme.palette.mode === 'light'
//           ? theme.palette.grey[100]
//           : theme.palette.grey[600],
//     },
//     '&.Mui-disabled + .MuiSwitch-track': {
//       opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
//     },
//   },
//   '& .MuiSwitch-thumb': {
//     boxSizing: 'border-box',
//     width: 22,
//     height: 22,
//   },
//   '& .MuiSwitch-track': {
//     borderRadius: 26 / 2,
//     backgroundColor: theme.palette.mode === 'light' ? webColors.grey[500] : '#39393D',
//     opacity: 1,
//     transition: theme.transitions.create(['background-color'], {
//       duration: 500,
//     }),
//   },
// }));


// export const ErrorOutlineButton = styled(Button)({
//    border: `1px solid ${webColors.error[500]}`,
//    color : webColors.error[500],
//    fontWeight: "500",
//    fontSize: "14px",
//    borderRadius:'6px',
//    height :"48px",
//    background: 'transparent',
//    '&:hover': {
//       color : 'white',
//        background: webColors.error[500],
       
//     },
// });

