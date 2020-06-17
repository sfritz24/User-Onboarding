import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstName: yup
    .string()
    .min(4, "Must be at least 4 characters long")
    .required("Must inclued first name"),
    lastName: yup
    .string()
    .min(4, "Must be at least 4 characters long")
    .required("Must inclued last name"),
    email: yup
    .string()
    .email("Must be a valid email address")
    .required("Must include email address"),
    password: yup
    .string()
    .min(8, "Must be at least 8 characters long")
    .required("Must include password"),
    termsOfUse: yup
    .boolean()
    .oneOf([true], "Must accept Terms and Conditions"),
})