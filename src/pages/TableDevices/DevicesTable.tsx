import * as React from 'react'
import {styled} from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, {tableCellClasses} from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../bll/store'
import {DeviceType} from '../../api/device-api'
import {useEffect} from 'react'
import {fetchDevices} from '../../bll/device-reducer'
import Button from '@mui/material/Button'

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}))


export const DevicesTable = () => {

    const dispatch = useDispatch()
    const devices = useSelector<RootState, Array<DeviceType>>(state => state.device.rows)

    useEffect(() => {
        dispatch(fetchDevices())
    }, [dispatch])


    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Device</StyledTableCell>
                            <StyledTableCell align="right">Rating</StyledTableCell>
                            <StyledTableCell align="right">Price &#36;</StyledTableCell>
                            <StyledTableCell align="right">Image</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {devices.map((d) => (
                            <StyledTableRow key={d.id}>
                                <StyledTableCell component="th" scope="row">{d.name}</StyledTableCell>
                                <StyledTableCell align="right">{d.rating}</StyledTableCell>
                                <StyledTableCell align="right">{d.price}</StyledTableCell>
                                <StyledTableCell align="right">{d.img}<Button style={{marginLeft:'40px'}}>Купить</Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}