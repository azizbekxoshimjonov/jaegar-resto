import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import Payment from '../Payment/Payment';
const ModalComponent = ({open, setOpen}) => {
    return(
        <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(setOpen)}
        PaperProps={{
            sx: {
                backgroundColor: '#1F1D2B',
                width: "500px"

            }
        }}
      >
        <Payment setOpen={setOpen}/>
      </Drawer>
    )
}
export default ModalComponent