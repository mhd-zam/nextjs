"use client";
import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import { Typography, Button, TextField, Card, Paper } from '@mui/material'
import { StepOneSchema, StepTwoSchema, StepThreeSchema } from './validation'

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { useFormik } from "formik";
import ReseveForm from "./ReseveForm";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      display: "none"
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      display: "none"
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    display: "none"
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 100,
  height: 100,
  display: "flex",
  borderRadius: "10%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor:
      "blue",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor:
      "blue",
  }),
}));




// const steps = [
//   "Select campaign settings",
//   "Create an ad group",
//   "Create an ad",
// ];

const steps = [
  { label: 'Step 1', schema: StepOneSchema },
  { label: 'Step 2', schema: StepTwoSchema },
  { label: 'Step 3', schema: StepThreeSchema }
];

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <><SettingsIcon /><Typography  >Select campaign settings</Typography></>,
    2: <><GroupAddIcon /><Typography  >Create an ad group</Typography></>,
    3: <><VideoLabelIcon /><Typography  >Create an ad</Typography></>,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      <Stack direction={'column'} justifyContent={'center'} textAlign={'center'} alignItems={'center'}>
        {icons[String(props.icon)]}
      </Stack>
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};



export default function CustomizedSteppers() {
  const [step, setStep] = React.useState(0)
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      isAccept: false,
      lastName: '',
      phoneNumber: '',
      age:null,
      address: '',
      pincode: '',
      image:null
    },
 // Initial schema for the first step
    onSubmit: (values) => {

      if (step >= 2)
      {
        console.log(values)
      } else
      {
        setStep(prev => prev + 1)
      }
    },
  });
  return (
    <Stack height={'95vh'} alignItems={'center'} justifyContent={'center'} >
      <Card sx={{ width: '80%' }} >
        <Stack spacing={4} padding={4} >
          <Stepper
            alternativeLabel
            activeStep={step}
            connector={<ColorlibConnector />}
            orientation="horizontal"
          >
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel
                  StepIconComponent={ColorlibStepIcon}
                />
              </Step>
            ))}
          </Stepper>
          <form>
            <Stack direction={'column'} >
              <ReseveForm formik={formik} step={step} />
              <Stack direction={'row'} justifyContent={'flex-end'}>
                <Button color="primary" onClick={() => { setStep(prev => prev - 1) }} >Back</Button>
                <Button color="primary" onClick={() => { formik.handleSubmit() }} >Next</Button>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Card>
    </Stack>
  );
}
