import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Grid, Stack, Table, TableContainer, TableHead, TableRow, TableCell, Checkbox, FormControlLabel, Switch, TableBody, Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './index';
import { fetchPosts } from './index';
import CircularProgress from '@mui/material/CircularProgress';

const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Mui() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Absent');
    const [data, setData] = useState({

        items: [

            {
                profileImage: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
                studentName: "Prakash",
                rollNo: "8765439867",
                buzzer1: false,
                buzzer2: true,
                primary: true,
                status: true,
                isStatusChecked: false,
                isStatus: "Absent",
                status2: false
            },
            {
                profileImage: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
                studentName: "Raj",
                rollNo: "8765439867",
                buzzer1: true,
                buzzer2: true,
                primary: false,
                status: true,
                isStatusChecked: false,
                isStatus: "Absent",
                status2: false
            },
            {
                profileImage: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
                studentName: "Selva",
                rollNo: "8765439867",
                buzzer1: true,
                buzzer2: true,
                primary: true,
                status: true,
                isStatusChecked: false,
                isStatus: "Absent",
                status2: false
            },
            {
                profileImage: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
                studentName: "Hema",
                rollNo: "8765439867",
                buzzer1: false,
                buzzer2: false,
                primary: true,
                status: true,
                isStatusChecked: false,
                isStatus: "Absent",
                status2: false
            }
        ]
    })
    console.log(data);
    const [primaryValue, setPrimaryValue] = useState(true)
    const [buzzerone, setBuzzerone] = useState(true)
    const [buzzertwo, setBuzzertwo] = useState(true)
    const primary = data.items.map((item) => { return item.primary })
    const buzzer1 = data.items.map((item) => { return item.buzzer1 })
    const buzzer2 = data.items.map((item) => { return item.buzzer2 })



    const handlePresentStudent = () => {

        setData({
            ...data, items: data.items.filter((value, index) => {
                if (value.isStatusChecked) {
                    if (value.isStatus === "Present") {
                        value.isStatus = 'Absent'
                        value.isStatusChecked = false
                        return value
                    }
                    if (value.isStatus === "Absent") {
                        value.isStatus = 'Present'
                        value.isStatusChecked = false
                        return value
                    }
                }
                return value
            })
        })
    }


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleDrawer = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };

    const handleSuffle = () => {
        let suffleArray = [true, false, true, false]
        suffleArray.sort(() => (Math.random() > .5) ? -1 : 1)
    }



    const handleStatusChange = (index) => {
        setData({
            ...data, items: data.items.map((value, lastsindex) => {
                if (index === lastsindex) {
                    value.isStatusChecked = !value.isStatusChecked
                    //value.status2 = !value.status2
                }
                return value
            })
        })
    }



    const handleWholeStatus = (value) => {

        // setData(status.map((item, index) => {
        //     if (item === value) {
        //         return !item
        //     }
        //     return item
        // }))

        setData({
            ...data, items: data.items.map((item) => {
                if (item.isStatusChecked === value) {
                    return !item.isStatusChecked
                }
                return item.isStatusChecked
            })
        })

    }




    const handleCheckBox = (index) => {
        if (data.items[index].isStatusChecked) {
            return <Switch checked={data.items[index].isStatusChecked} onClick={() => handleStatusChange(index)} color="success" />
        } else {
            return <Switch checked={data.items[index].isStatusChecked} onClick={() => handleStatusChange(index)} color="warning" />
        }
    }



    const handleCheckBox1 = (box1, box2, box3) => {
        const result = primary.map((item, index) => { return (item || !box3) && (buzzer1[index] || !box2) && (buzzer2[index] || !box1) })
        setData({ ...data, status: result })
    }

    const handleChangePrimary = () => {
        if (primaryValue) {
            setPrimaryValue(false)
        } else {
            setPrimaryValue(true)
        }
    }
    const handleChangeBuzzer1 = () => {
        if (buzzerone) {
            setBuzzerone(false)
        } else {
            setBuzzerone(true)
        }
    }
    const handleChangeBuzzer2 = () => {
        if (buzzertwo) {
            setBuzzertwo(false)
        } else {
            setBuzzertwo(true)
        }
    }

    const handleAttendanceChange = (index, name) => {
        setData({ ...data, items: data.items.map((item, mindex) => { if (index === mindex) { item[`${name}`] = !item[`${name}`] } return item }) })
    }

    const handleSuffleAttendance = () => {
        let sufflePrimary = primary.sort(() => (Math.random() > .5) ? 1 : -1)
        let sufflebuzzerone = buzzer1.sort(() => (Math.random() > .5) ? 1 : -1)
        let sufflebuzzertwo = buzzer2.sort(() => (Math.random() > .5) ? 1 : -1)

        setData({
            ...data, items: data.items.map((value, index) => {
                data.items[index].primary = sufflePrimary[index]
                data.items[index].buzzer1 = sufflebuzzerone[index]
                data.items[index].buzzer2 = sufflebuzzertwo[index]
                return value
            })
        })
    }
    //data.items.filter((value) => { return value.primary === true && value.buzzer1 === true && value.buzzer2 === true })
    useEffect(() => {
        handleCheckBox1(buzzerone, buzzertwo, primaryValue)
    }, [])

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawer}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        position: 'absolute',
                        top: "22rem",
                        left: open ? '0rem' : '4rem',
                        color: "#1e90ff",
                    }}
                >
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Toolbar>
                    {open ? "" : <InboxIcon />}
                    <Typography sx={{ px: 3 }} > <img src="https://digi-val.com/assets/img/logo.svg" width={100} /></Typography>
                </Toolbar>
                <List>
                    {['Apps', 'Files', 'Calender', 'Help'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    py: 3.3
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Grid container >
                    <Grid item xs={8}>
                        <Box mx={10}>
                            <Typography variant='h5'>
                                Attendance Report
                            </Typography>
                            <Typography>
                                Summary 90/107 Students Present
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box mx={10}>
                            {/* <Button variant='outlined' sx={{ mx: 3 }}>Close</Button> */}
                            <Button variant='contained' onClick={() => handlePresentStudent()}>Done</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box mt={4} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} >
                                <Tab label="ABSENT" value="Absent" />
                                <Tab label="PRESENT" value="Present" />
                                <Tab label="LEAVE" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="Absent">
                            {/* <Button onClick={() => {
                                handleSuffle()
                                handleSuffleAttendance()
                            }} variant="contained">Suffile</Button> */}
                            <TableComp data={data} tab={value} handleWholeStatus={handleWholeStatus} buzzertwo={buzzertwo} buzzerone={buzzerone} primaryValue={primaryValue} handleChangeBuzzer2={handleChangeBuzzer2} handleChangeBuzzer1={handleChangeBuzzer1} handleChangePrimary={handleChangePrimary} handleAttendanceChange={handleAttendanceChange} handleCheckBox={handleCheckBox} />
                        </TabPanel>
                        <TabPanel value="Present">
                            {/* <Button onClick={() => {
                                handleSuffle()
                                handleSuffleAttendance()
                            }} variant="contained">Suffile</Button> */}
                            <TableComp data={data} tab={value} handleWholeStatus={handleWholeStatus} buzzertwo={buzzertwo} buzzerone={buzzerone} primaryValue={primaryValue} handleChangeBuzzer2={handleChangeBuzzer2} handleChangeBuzzer1={handleChangeBuzzer1} handleChangePrimary={handleChangePrimary} handleAttendanceChange={handleAttendanceChange} handleCheckBox={handleCheckBox} />

                        </TabPanel>
                        <TabPanel value="3">
                            Tab 3
                        </TabPanel>
                    </TabContext>
                </Box>
                <Typography paragraph>
                </Typography>
            </Box>
        </Box>
    );
}

const TableComp = ({ data, tab, handleWholeStatus, buzzertwo, buzzerone, primaryValue, handleChangeBuzzer2, handleChangeBuzzer1, handleChangePrimary, handleAttendanceChange, handleCheckBox, status }) => {

    return <TableContainer> 
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell sx={{ fontSize: '10px' }}>FINAL ATTENDANCE REPORT WILL GENERATED BASED ON THE SELECTION</TableCell>
                    <TableCell>
                        <FormControlLabel
                            control={<Checkbox defaultChecked={buzzertwo} onChange={() => {
                                handleChangeBuzzer2()
                            }} />}
                            label="Buzzer 2"
                        />
                        <Typography sx={{ fontSize: '12px' }}>
                            Latest  10:45 AM
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <FormControlLabel
                            control={<Checkbox defaultChecked={buzzerone} onChange={() => {
                                handleChangeBuzzer1()
                            }} />}
                            label="Buzzer 1"
                        />
                        <Typography sx={{ fontSize: '12px' }}>
                            10:15 AM
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <FormControlLabel
                            control={<Checkbox defaultChecked={primaryValue} onChange={() => {
                                handleChangePrimary()
                            }} />}
                            label="Primary"
                        />
                        <Typography sx={{ fontSize: '12px' }}>
                            10:00 AM
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography>
                            Status
                        </Typography>
                        <Switch onClick={() => handleWholeStatus(data.items.every((item) => item.isStatusChecked))} checked={data.items.every((item) => item.isStatusChecked)} color="warning" />
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.items.filter((value) => { return value.isStatus === tab }).map((value, index) => {
                        return <TableRow key={index}>
                            <TableCell>
                                <Stack spacing={2} direction="row">
                                    <Avatar src={value.profileImage} />
                                    <Typography>
                                        {value.studentName} <br />
                                        <span sx={{ fontSize: '2px' }}>{value.rollNo}</span>
                                    </Typography>
                                </Stack>
                            </TableCell>
                            <TableCell>{value.buzzer1 ? <CheckCircleIcon sx={{ color: 'green' }} onClick={() => handleAttendanceChange(index, 'buzzer1')} /> : <CancelIcon sx={{ color: 'red' }} onClick={() => handleAttendanceChange(index, 'buzzer1')} />}</TableCell>
                            <TableCell>{value.buzzer2 ? <CheckCircleIcon sx={{ color: 'green' }} onClick={() => handleAttendanceChange(index, 'buzzer2')} /> : <CancelIcon sx={{ color: 'red' }} onClick={() => handleAttendanceChange(index, 'buzzer2')} />}</TableCell>
                            <TableCell>{value.primary ? <CheckCircleIcon sx={{ color: 'green' }} onClick={() => handleAttendanceChange(index, 'primary')} /> : <CancelIcon sx={{ color: 'red' }} onClick={() => handleAttendanceChange(index, 'primary')} />}</TableCell>
                            <TableCell>{handleCheckBox(index)}</TableCell>
                        </TableRow>
                    })
                }
            </TableBody>
        </Table>
    </TableContainer>
}