// validationSchemas.js
import * as Yup from "yup";

export const StepOneSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  isAccept: Yup.boolean()
    .oneOf([true], "Should accept to go forward")
    .required("Should accept to go forward"),
  // ... other fields for step one
});

export const StepTwoSchema = Yup.object().shape({
  lastName: Yup.string().required("Last Name is required"),
  phoneNumber: Yup.string().matches(/^\d{10}$/, "Invalid phone number"),
  age: Yup.number()
    .required("Please provide your age")
    .min(18, "Age must be greater than or equal to 18")
});

export const StepThreeSchema = Yup.object().shape({
  address: Yup.string().required("address is required"),
    pincode: Yup.string().matches(/^\d{6}$/, "invalid pincode"),
    image: Yup.mixed()
    .required('Please select an image')
    .test('fileSize', 'Image size is too large', (value) => {
      if (!value) return false;
      return value.size <= 2000000; // Adjust the file size limit as needed
    })
    .test('fileFormat', 'Unsupported file format', (value) => {
      if (!value) return false;
      return ['image/jpeg', 'image/png'].includes(value.type);
    }),
  // ... other fields for step two
});

// You can create more schemas for additional steps if needed.
