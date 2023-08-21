"use client"
import { TextField, FormControlLabel, Checkbox, Box } from '@mui/material'
import Stack from "@mui/material/Stack";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
export default function ReseveForm({ step, formik }) {

    const [filename, setFilename] = useState('')

    if (step === 0)
    {
        return <Stack direction={'column'} spacing={2}>
            <TextField name="firstName" id="outlined-basic" label="firstName"
                variant="outlined"
                {...formik.getFieldProps('firstName')}
            />
            {formik.errors.firstName && formik.touched.firstName ? (
                <div>{formik.errors.firstName}</div>
            ) : null}
            <TextField name="email" id="outlined-basic" label="email"
                variant="outlined"
                {...formik.getFieldProps('email')}
            />
            {formik.errors.email && formik.touched.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <FormControlLabel name='isAccept'   {...formik.getFieldProps('isAccept')} control={<Checkbox />} label="please agree to go forward" />
            {formik.errors.isAccept && formik.touched.isAccept ? (
                <div>{formik.errors.isAccept}</div>
            ) : null}
        </Stack>
    } else if (step === 1)
    {
        return <Stack direction={'column'} spacing={2}>
            <TextField name="lastName" id="outlined-basic" label="lastName"
                variant="outlined"
                {...formik.getFieldProps('lastName')}
            />
            {formik.errors.lastName && formik.touched.lastName ? (
                <div>{formik.errors.lastName}</div>
            ) : null}
            <TextField name="phoneNumber" id="outlined-basic"
                label="phoneNumber" variant="outlined"
                {...formik.getFieldProps('phoneNumber')}
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                <div>{formik.errors.phoneNumber}</div>
            ) : null}
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name='age'
                label="Age"
                {...formik.getFieldProps('age')}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            {formik.errors.age && formik.touched.age ? (
                <div>{formik.errors.age}</div>
            ) : null}
        </Stack>

    } else if (step === 2)
    {
        return <Stack direction={'column'} spacing={2}>
            <TextField name="address" id="outlined-basic"
                onChange={formik.handleChange}
                value={formik.values.address} label="address" variant="outlined" />
            {formik.errors.address && formik.touched.address ? (
                <div>{formik.errors.address}</div>
            ) : null}
            <TextField name="pincode" id="outlined-basic"
                onChange={formik.handleChange}
                value={formik.values.pincode}
                label="pincode" variant="outlined" />
            {formik.errors.pincode && formik.touched.pincode ? (
                <div>{formik.errors.pincode}</div>
            ) : null}
            <Box htmlFor='image' sx={{ p: 3, border: '1px dashed grey', cursor: 'pointer' }}

                onDragEnter={(e) => e.preventDefault()}
                onDragOver={(e) => e.preventDefault()}
                onDragLeave={(e) => e.preventDefault()}
                onDrop={(e) => {
                    e.preventDefault()
                    const file = e.dataTransfer.files[0]
                    formik.setFieldValue('image', file);
                    setFilename(file.name)
                }} component={'label'}>
                {formik.values.image ? formik.values.image.name : 'please drag and drop or click here to load the file'}
            </Box>
            <input
                id='image'
                type="file"
                accept="image/*"
                onChange={(event) => {
                    const file = event.currentTarget.files[0]
                    formik.setFieldValue('image', file);
                    setFilename(file.name)
                }}
                style={{ display: 'none' }}
            />

            {formik.errors.image && formik.touched.image ? (
                <div>{formik.errors.image}</div>
            ) : null}
        </Stack>
    }

}