import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useState } from "react";

export default function SearchButton(props) {
  const [searched, setSearched] = useState(props.clicked);
  return (
    <Button 
    variant="contained"
    onClick={()=>{props.onClicked()
    setSearched(!searched)}}
    setValue={setSearched}
    value={searched}
    >Contained</Button>
  );
}


// export default function SearchButton(props) {
//     const [searched, setSearched] = useState(props.clicked);
//     return (
//       <div className={classes.reactButton}>
          
//           <Checkbox
//             icon={<FavoriteBorder sx={{ color: "#ff8a00" }} />}
//             checkedIcon={<Favorite sx={{ color: "#ff8a00" }} />}
//             onClick={()=>{props.onClicked()
//             setChecked(!checked)}} 
//             checked={checked}
//           />
//         <div className={classes.number}>{props.numLikes}</div>
//       </div>
//     );
//   }