import * as React from 'react';
import { useEffect } from 'react';
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
import { increment, decrement, buzzer1 } from './index';
import { fetchPosts } from './index';
import CircularProgress from '@mui/material/CircularProgress';
import { primary } from './index';
import { buzzerone } from './index';
import { buzzertwo } from './index';
import { useState } from 'react';

const Mui2 = () => {
    const [data, setData] = useState({
        items: [

            {
                profileImage: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
                studentName: "Prakash",
                rollNo: "8765439867",
                buzzer1: false,
                buzzer2: true,
                primary: true,
                status: true
            },
            {
                profileImage: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
                studentName: "Raj",
                rollNo: "8765439867",
                buzzer1: true,
                buzzer2: true,
                primary: false,
                status: true
            },
            {
                profileImage: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
                studentName: "Selva",
                rollNo: "8765439867",
                buzzer1: true,
                buzzer2: true,
                primary: true,
                status: true
            },
            {
                profileImage: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
                studentName: "Hema",
                rollNo: "8765439867",
                buzzer1: false,
                buzzer2: false,
                primary: true,
                status: true
            },
            {
                profileImage: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg',
                studentName: "Vicky",
                rollNo: "8765439867",
                buzzer1: true,
                buzzer2: true,
                primary: false,
                status: true
            }
        ],
        status: [true, true, true, true, false]
    })
    const [primaryValue, setPrimaryValue] = useState(false)
    const [buzzerone, setBuzzerone] = useState(false)
    const [buzzertwo, setBuzzertwo] = useState(false)
    const [status, setStatus] = useState({ first: true })
    const handleCheckBox = (index) => {
        if (data.status[index]) {
            return <Switch defaultChecked color="success" />
        } else {
            return <Switch defaultChecked color="warning" />
        }
    }

    const primary = data.items.map((item) => { return item.primary })
    const buzzer1 = data.items.map((item) => { return item.buzzer1 })
    const buzzer2 = data.items.map((item) => { return item.buzzer2 })

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
    useEffect(() => {
        handleCheckBox1(buzzerone,buzzertwo,primaryValue)
    }, [data])

    return (
        <TableContainer>
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
                            <Switch onClick={() => setStatus({ ...status, first: false })} defaultChecked color="warning" />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.items.map((value, index) => {
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
    )
}

export default Mui2
