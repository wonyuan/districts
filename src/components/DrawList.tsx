import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

interface locList {
    locations: {
        name: string,
        id: { lat: number; lng: number },
    }[];
    onSelectLocation: (index: number) => void;
}

const DrawList = ({ locations, onSelectLocation }: locList) => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleLocationClick = (index: number) => {
        onSelectLocation(index);
        setOpen(false);
    };

    const drawerList = (
        <Box sx={{ width: 280 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {locations.map((location, index) => (
                    <ListItem
                        sx={[
                            {
                                '&:hover': {
                                    color: 'grey-500',
                                    backgroundColor: '#2a2a2a',
                                },
                                borderBottom: '1px solid',
                                borderColor: '#444444',
                            },
                        ]}
                        key={index}
                        disablePadding
                        onClick={() => handleLocationClick(index)}
                    >
                        <ListItemButton>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary={location.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button
                onClick={toggleDrawer(true)}
                sx={{
                    width: '25px',
                    border: 2,
                    borderColor: 'grey.800',
                    color: 'grey.300',
                    backgroundColor: 'grey.1000',
                }}
            >
                <MenuIcon />
            </Button>
            <Drawer
                PaperProps={{
                    sx: {
                        backgroundColor: "#1B1B1B",
                        color: "white",
                    },
                }}
                open={open}
                onClose={toggleDrawer(false)}
            >
                {drawerList}
            </Drawer>
        </div>
    );
};

export default DrawList;
