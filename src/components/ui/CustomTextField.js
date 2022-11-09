import {styled, TextField} from "@mui/material";

const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'var(--primary-red)',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'var(--primary-red)',
    },
});

export default CustomTextField