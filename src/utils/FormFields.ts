import { API_ROUTES } from "./constants";

export const PERSONAL_INFO = [
    {
        id: 1,
        name: "fullName",
        type: "text",
        className: "form-control",
        placeholder: "Full Name",
        errorMessage: "Full Name shouldn't include any special character!",
        label: "Full Name",
        column: 6,
        pattern: "^[A-Za-z, ]*$",
        required: true
    }, {
        id: 2,
        name: "gender",
        type: "select",
        values: [{ text: "Select Gender", value: "" }, { text: 'Male', value: 'MALE' }, { text: 'Female', value: 'FEMALE' }],
        className: "form-control",
        placeholder: "Gender",
        errorMessage: "Please Select a Gender!",
        label: "Gender",
        column: 3,
    }, {
        id: 3,
        name: "dateOfBirth",
        type: "date",
        className: "form-control",
        placeholder: "Date of Birth",
        label: "Date of Birth",
        column: 3,
    }, {
        id: 4,
        name: "age",
        type: "number",
        className: "form-control",
        placeholder: "Age",
        disabled: true,
        errorMessage: "Age Not Valid!",
        label: "Age",
        column: 3,
        pattern: "^[0-9]+$"
    }, {
        id: 5,
        name: "maritalStatus",
        type: "select",
        values: [{ text: 'Single', value: 'UNMARRIED' }, { text: 'Married', value: 'MARRIED' }],
        className: "form-control",
        placeholder: "Marital Status",
        errorMessage: "Please Select a Marital Status!",
        label: "Marital Status",
        column: 3,
    }, {
        id: 6,
        name: "nationality",
        type: "select",
        values: [{ text: 'Bangladeshi', value: 'BANGLADESHI' }],
        className: "form-control",
        placeholder: "Nationality",
        errorMessage: "Please Select a Nationality!",
        label: "Nationality",
        column: 3
    }, {
        id: 7,
        name: "religion",
        type: "select",
        values: [{ text: "Select Nationality", value: "" }, { text: 'Muslim', value: 'MUSLIM' }, {
            text: 'Hindu',
            value: 'HINDU'
        }, { text: 'Buddhist', value: 'BUDDHIST' }, { text: 'Christian', value: 'CHRISTIAN' }, {
            text: 'Others',
            value: 'OTHERS'
        }],
        className: "form-control",
        placeholder: "Religion",
        errorMessage: "Please Select a Religion!",
        label: "Religion",
        column: 3
    }, {
        id: 8,
        name: "fathersName",
        type: "text",
        className: "form-control",
        placeholder: "Father's Name",
        errorMessage: "Invalid Father's Name!",
        label: "Father's Name",
        column: 6,
        pattern: "^[A-Za-z ]*$"
    }, {
        id: 9,
        name: "mothersName",
        type: "text",
        className: "form-control",
        placeholder: "Mother's Name",
        errorMessage: "Invalid Mother's Name!",
        label: "Mother's Name",
        column: 6,
        pattern: "^[A-Za-z ]*$"
    }, {
        id: 10,
        name: "profession",
        type: "text",
        className: "form-control",
        placeholder: "Profession",
        errorMessage: "Invalid Profession!",
        label: "Profession",
        column: 3,
        pattern: "^[A-Za-z]*$"
    }
];

// malaysia entry personal info
export const MALAYSIA_PERSONAL_INFO = [
    {
        id: 1,
        name: "fullName",
        type: "text",
        className: "form-control",
        placeholder: "Full Name",
        errorMessage: "Full Name shouldn't include any special character!",
        label: "Full Name",
        column: 6,
        pattern: "^[A-Za-z, ]*$",
        required: true
    }, {
        id: 2,
        name: "gender",
        type: "select",
        values: [{ text: "Select Gender", value: "" }, { text: 'Male', value: 'MALE' }, { text: 'Female', value: 'FEMALE' }],
        className: "form-control",
        placeholder: "Gender",
        errorMessage: "Please Select a Gender!",
        label: "Gender",
        column: 3,
    }, {
        id: 3,
        name: "dateOfBirth",
        type: "date",
        className: "form-control",
        placeholder: "Date of Birth",
        label: "Date of Birth",
        column: 3,
    }, {
        id: 4,
        name: "age",
        type: "number",
        className: "form-control",
        placeholder: "Age",
        disabled: false,
        errorMessage: "Age Not Valid!",
        label: "Age",
        column: 3,
        pattern: "^[0-9]+$"
    }, {
        id: 5,
        name: "maritalStatus",
        type: "select",
        values: [{ text: 'Single', value: 'UNMARRIED' }, { text: 'Married', value: 'MARRIED' }],
        className: "form-control",
        placeholder: "Marital Status",
        errorMessage: "Please Select a Marital Status!",
        label: "Marital Status",
        column: 3,
    }, {
        id: 6,
        name: "nationality",
        type: "select",
        values: [{ text: 'Bangladeshi', value: 'BANGLADESHI' }],
        className: "form-control",
        placeholder: "Nationality",
        errorMessage: "Please Select a Nationality!",
        label: "Nationality",
        column: 3
    }, {
        id: 7,
        name: "religion",
        type: "select",
        values: [{ text: "Select Religion", value: "" }, { text: 'Muslim', value: 'MUSLIM' }, {
            text: 'Hindu',
            value: 'HINDU'
        }, { text: 'Buddhist', value: 'BUDDHIST' }, { text: 'Christian', value: 'CHRISTIAN' }, {
            text: 'Others',
            value: 'OTHERS'
        }],
        className: "form-control",
        placeholder: "Religion",
        errorMessage: "Please Select a Religion!",
        label: "Religion",
        column: 3
    }, {
        id: 8,
        name: "fathersName",
        type: "text",
        className: "form-control",
        placeholder: "Father's Name",
        errorMessage: "Invalid Father's Name!",
        label: "Father's Name",
        column: 6,
        pattern: "^[A-Za-z ]*$"
    }, {
        id: 9,
        name: "mothersName",
        type: "text",
        className: "form-control",
        placeholder: "Mother's Name",
        errorMessage: "Invalid Mother's Name!",
        label: "Mother's Name",
        column: 6,
        pattern: "^[A-Za-z ]*$"
    },
    // {
    //     id: 10,
    //     name: "profession",
    //     type: "text",
    //     className: "form-control",
    //     placeholder: "Profession",
    //     errorMessage: "Invalid Profession!",
    //     label: "Profession",
    //     column: 3,
    //     pattern: "^[A-Za-z]*$"
    // }
];

export const PASSPORT_INFO = [
    {
        id: 1,
        name: "passportNo",
        type: "text",
        className: "form-control",
        placeholder: "Passport No",
        errorMessage: "Passport No shouldn't include any special character!",
        label: "Passport No",
        column: 6,
        pattern: "^[A-Za-z-0-9]*$",
        required: true
    }, {
        id: 2,
        name: "issueDate",
        type: "date",
        className: "form-control",
        placeholder: "Issue Date",
        label: "Issue Date",
        column: 3
    }, {
        id: 3,
        name: "expiredDate",
        type: "date",
        className: "form-control",
        placeholder: "Expired Date",
        label: "Expired Date",
        column: 3
    }, {
        id: 4,
        name: "nidNumber",
        type: "text",
        className: "form-control",
        placeholder: "NID Number",
        errorMessage: "Invalid NID Number!",
        label: "NID Number",
        column: 3,
        pattern: "^[A-Za-z,0-9]*$"
    }, {
        id: 5,
        name: "travelingTo",
        type: "text",
        className: "form-control",
        placeholder: "Traveling To",
        errorMessage: "Invalid Input!",
        label: "Traveling To",
        column: 3,
        pattern: "^[a-zA-Z]+$",
    }, {
        id: 6,
        name: "visaNo",
        type: "text",
        className: "form-control",
        placeholder: "Visa No",
        errorMessage: "Visa No shouldn't include any special character!",
        label: "Visa No",
        column: 6,
        pattern: "^[A-Za-z-0-9]*$"
    }, {
        id: 7,
        name: "visaDate",
        type: "date",
        className: "form-control",
        placeholder: "Visa Date",
        label: "Visa Date",
        column: 3
    }
];

export const CONTACT_INFO = [
    {
        id: 1,
        name: "mobile",
        type: "tel",
        className: "form-control",
        placeholder: "Mobile Number",
        errorMessage: "Invalid Mobile Number!",
        label: "Mobile Number",
        column: 6,
        pattern: "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$"
    }, {
        id: 2,
        name: "email",
        type: "email",
        className: "form-control",
        placeholder: "Email",
        errorMessage: "Invalid Email Address!",
        label: "Email",
        column: 6,
        pattern: "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
    }, {
        id: 3,
        name: "presentAddress",
        type: "text",
        className: "form-control",
        placeholder: "Present Address",
        errorMessage: "Invalid Present Address!",
        label: "Present Address",
        column: 12,
        pattern: "^[a-zA-Z0-9, /.:;-]+$"
    }, {
        id: 4,
        name: "permanentAddress",
        type: "text",
        className: "form-control",
        placeholder: "Permanent Address",
        errorMessage: "Invalid Permanent Address!",
        label: "Permanent Address",
        column: 12,
        pattern: "^[a-zA-Z0-9, /.:;-]+$"
    }
];

export const SERVICE_BILLING_INFO = [
    {
        id: 1,
        name: "testOrPackageId",
        type: "select",
        className: "form-control",
        placeholder: "Package/Test Name",
        errorMessage: "Please Select a Package or Agency!",
        label: "Package/Test Name",
        column: 3,
        required: true,
        ajax: true,
        mapping: { path: API_ROUTES.PACKAGE_AND_TEST_ALL, value: "id", text: "name" }
    }, {
        id: 2,
        name: "agentOrAgencyId",
        type: "select",
        className: "form-control",
        placeholder: "Agent/Agency Name",
        label: "Agent/Agency Name",
        column: 3,
        ajax: true,
        required: true,
        mapping: { path: API_ROUTES.AGENT_AND_AGENCY_ALL, value: "id", text: "fullName" }
    }, {
        id: 3,
        name: "deliveryDate",
        type: "date",
        className: "form-control",
        placeholder: "Delivery Date",
        label: "Delivery Date",
        column: 3,
    }, {
        id: 4,
        name: "specialNote",
        type: "textarea",
        className: "form-control",
        placeholder: "Special Note",
        errorMessage: "Invalid Special Note!",
        label: "Special Note",
        column: 12
    }
];

export const AGENT = [
    {
        id: 1,
        name: "fullName",
        type: "text",
        className: "form-control",
        placeholder: "Full Name",
        errorMessage: "Full Name shouldn't include any special character!",
        label: "Full Name",
        column: 6,
        pattern: "^[A-Za-z, ]*$",
        required: true,
    }, {
        id: 2,
        name: "mobile",
        type: "tel",
        className: "form-control",
        placeholder: "Mobile Number",
        errorMessage: "Invalid Mobile Number!",
        label: "Mobile Number",
        column: 3,
        pattern: "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$",
        required: true,
    }, {
        id: 3,
        name: "email",
        type: "email",
        className: "form-control",
        placeholder: "Email",
        errorMessage: "Invalid Email Address!",
        label: "Email",
        column: 3,
        pattern: "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
        required: true,
    }, {
        id: 4,
        name: "address",
        type: "text",
        className: "form-control",
        placeholder: "Address",
        errorMessage: "Invalid Address!",
        label: "Address",
        column: 12,
        pattern: "^[a-zA-Z0-9, /.:;-]+$",
        required: true,
    }, {
        id: 5,
        name: "commissionRate",
        type: "text",
        className: "form-control",
        placeholder: "Commission Rate",
        errorMessage: "Invalid Commission Rate!",
        label: "Commission Rate",
        column: 6,
        pattern: "^[0-9.]+$",
    }, {
        id: 6,
        name: "commissionAmount",
        type: "text",
        className: "form-control",
        placeholder: "Commission Amount",
        errorMessage: "Invalid Commission Amount!",
        label: "Commission Amount",
        column: 6,
        pattern: "^[0-9]+$",
    }
];

export const AGENCY = [
    {
        id: 1,
        name: "fullName",
        type: "text",
        className: "form-control",
        placeholder: "Agency Name",
        errorMessage: "Agency Name shouldn't include any special character!",
        label: "Agency Name",
        column: 6,
        pattern: "^[A-Za-z, ]*$",
        required: true,
    }, {
        id: 2,
        name: "mobile",
        type: "tel",
        className: "form-control",
        placeholder: "Mobile Number",
        errorMessage: "Invalid Mobile Number!",
        label: "Mobile Number",
        column: 3,
        pattern: "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$",
        required: true,
    }, {
        id: 3,
        name: "email",
        type: "email",
        className: "form-control",
        placeholder: "Email",
        errorMessage: "Invalid Email Address!",
        label: "Email",
        column: 3,
        pattern: "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
        required: true,
    }, {
        id: 4,
        name: "address",
        type: "text",
        className: "form-control",
        placeholder: "Address",
        errorMessage: "Invalid Address!",
        label: "Address",
        column: 12,
        pattern: "^[a-zA-Z0-9, /.:;-]+$",
        required: true,
    }, {
        id: 5,
        name: "commissionRate",
        type: "text",
        className: "form-control",
        placeholder: "Commission Rate",
        errorMessage: "Invalid Commission Rate!",
        label: "Commission Rate",
        column: 6,
        pattern: "^[0-9.]+$",
    }, {
        id: 6,
        name: "commissionAmount",
        type: "text",
        className: "form-control",
        placeholder: "Commission Amount",
        errorMessage: "Invalid Commission Amount!",
        label: "Commission Amount",
        column: 6,
        pattern: "^[0-9]+$",
    }
];

export const PACKAGE = [
    {
        id: 1,
        name: "name",
        type: "text",
        className: "form-control",
        placeholder: "Package Name",
        errorMessage: "Package Name shouldn't include any special character!",
        label: "Package Name",
        column: 6,
        pattern: "^[A-Za-z,0-9, ]*$",
        required: true,
    },
    {
        id: 2,
        name: "price",
        type: "number",
        className: "form-control",
        placeholder: "Price",
        errorMessage: "Invalid Price!",
        label: "Price",
        column: 6,
        required: true,
    }, {
        id: 3,
        name: "description",
        type: "textarea",
        className: "form-control",
        placeholder: "Description",
        errorMessage: "Description shouldn't include any special character!",
        label: "Description",
        column: 12,
        pattern: "^[a-zA-Z0-9, ]+$"
    }, {
        id: 4,
        name: "abbreviation",
        type: "text",
        className: "form-control",
        placeholder: "Abbreviation",
        errorMessage: "Abbreviation shouldn't include any special characters and not allowed lowercase letters!",
        label: "Abbreviation",
        column: 3,
        pattern: "^[A-Z,0-9]*$",
    }, {
        id: 4,
        name: "activeStatus",
        type: "select",
        values: [{ text: "Select Status", value: "" }, { text: "Active", value: "ACTIVE" }, {
            text: "Inactive",
            value: "INACTIVE"
        }],
        className: "form-control",
        label: "Active Status",
        column: 3,
        required: true,
    }
];

export const TEST = [
    {
        id: 1,
        name: "department",
        type: "select",
        values: [{ text: "Select Department", value: "" }, {
            text: "Laboratory Investigation",
            value: "Laboratory Investigation"
        }, { text: "Medical Examination", value: "Medical Examination" }],
        className: "form-control",
        label: "Department",
        column: 3,
        required: true,
    },
    {
        id: 2,
        name: "name",
        type: "text",
        className: "form-control",
        placeholder: "Test Name",
        errorMessage: "Test Name shouldn't include any special character!",
        label: "Test Name",
        column: 6,
        pattern: "^[A-Za-z,0-9, ]*$",
        required: true,
    },
    {
        id: 3,
        name: "price",
        type: "number",
        className: "form-control",
        placeholder: "Price",
        errorMessage: "Invalid Price!",
        label: "Price",
        column: 3,
        required: true,
    }, {
        id: 4,
        name: "method",
        type: "text",
        className: "form-control",
        placeholder: "Method",
        errorMessage: "Method shouldn't include any special character!",
        label: "Method",
        column: 6,
        pattern: "^[A-Za-z,0-9, ]*$",
    }, {
        id: 5,
        name: "sample",
        type: "select",
        values: [{ text: "Select Sample", value: "" }, { text: "Blood", value: "Blood" }, {
            text: "Urine",
            value: "Urine"
        }, { text: "Stool", value: "Stool" }, { text: "Physician", value: "Physician" }, { text: "X-RAY", value: "X-RAY" }],
        className: "form-control",
        label: "Sample",
        column: 6,
    }, {
        id: 6,
        name: "description",
        type: "textarea",
        className: "form-control",
        placeholder: "Description",
        errorMessage: "Description shouldn't include any special character!",
        label: "Description",
        column: 12,
        pattern: "^[a-zA-Z0-9, ]+$",
    }, {
        id: 4,
        name: "abbreviation",
        type: "text",
        className: "form-control",
        placeholder: "Abbreviation",
        errorMessage: "Abbreviation shouldn't include any special characters and not allowed lowercase letters!",
        label: "Abbreviation",
        column: 3,
        pattern: "^[A-Z,0-9]*$",
    }, {
        id: 7,
        name: "activeStatus",
        type: "select",
        values: [{ text: "Select Status", value: "" }, { text: "Active", value: "ACTIVE" }, {
            text: "Inactive",
            value: "INACTIVE"
        }],
        className: "form-control",
        label: "Active Status",
        column: 3,
        required: true,
    }
];

export const TEST_REPORT = [
    {
        id: 1,
        name: "testId",
        type: "select",
        className: "form-control",
        placeholder: "Test Name",
        errorMessage: "Please Select a Test!",
        label: "Test Name",
        column: 6,
        ajax: true,
        mapping: { path: API_ROUTES.TEST_ALL, value: "id", text: "name" },
        required: true,
    },
    {
        id: 2,
        name: "patientId",
        type: "select",
        className: "form-control",
        placeholder: "Patient Name",
        errorMessage: "Please Select a Patient!",
        label: "Patient Name",
        column: 6,
        ajax: true,
        mapping: { path: API_ROUTES.PATIENT_ALL, value: "id", text: "fullName" },
        required: true,
    },
    {
        id: 3,
        name: "description",
        type: "textarea",
        className: "form-control",
        placeholder: "Description",
        errorMessage: "Description shouldn't include any special character!",
        label: "Description",
        column: 12,
        pattern: "^[a-zA-Z0-9, ]+$",
    }
];

export const USER = [
    {
        id: 1,
        name: "firstName",
        type: "text",
        className: "form-control",
        placeholder: "First Name",
        errorMessage: "First Name shouldn't include any special character!",
        label: "First Name",
        column: 6,
        pattern: "^[A-Za-z]*$",
        required: true,
    },
    {
        id: 2,
        name: "lastName",
        type: "text",
        className: "form-control",
        placeholder: "Last Name",
        errorMessage: "Last Name shouldn't include any special character!",
        label: "Last Name",
        column: 6,
        pattern: "^[A-Za-z]*$",
        required: true,
    },
    {
        id: 3,
        name: "email",
        type: "email",
        className: "form-control",
        placeholder: "Email",
        errorMessage: "Invalid Email Address!",
        label: "Email",
        column: 6,
        pattern: "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
        required: true,
    },
    {
        id: 4,
        name: "password",
        type: "password",
        className: "form-control",
        placeholder: "Password",
        errorMessage: "Shouldn't include Minimum 8 characters, at least one letter, one number and one special character!",
        label: "Password",
        column: 6,
        // pattern: "^(?=.[A-Za-z])(?=.\\d)(?=.[@$!%#?&])[A-Za-z\\d@$!%*#?&]{8,}$",
        required: true,
    },
    {
        id: 5,
        name: "roleId",
        type: "select",
        className: "form-control",
        placeholder: "Role Name",
        errorMessage: "Please Select a Role!",
        label: "Role Name",
        column: 3,
        ajax: true,
        mapping: { path: API_ROUTES.ROLE_ALL, value: "id", text: "name" },
        required: true,
    },
    {
        id: 6,
        name: "status",
        type: "select",
        values: [{ text: "Select Status", value: "" }, { text: 'Active', value: true }, { text: 'Inactive', value: false }],
        className: "form-control",
        label: "Active Status",
        column: 3,
        required: true,
    }
];

export const USER_EDIT = [
    {
        id: 1,
        name: "firstName",
        type: "text",
        className: "form-control",
        placeholder: "First Name",
        errorMessage: "First Name shouldn't include any special character!",
        label: "First Name",
        column: 6,
        pattern: "^[A-Za-z]*$",
        required: true,
    },
    {
        id: 2,
        name: "lastName",
        type: "text",
        className: "form-control",
        placeholder: "Last Name",
        errorMessage: "Last Name shouldn't include any special character!",
        label: "Last Name",
        column: 6,
        pattern: "^[A-Za-z]*$",
        required: true,
    },
    {
        id: 3,
        name: "password",
        type: "password",
        className: "form-control",
        placeholder: "Password",
        errorMessage: "Shouldn't include Minimum 8 characters, at least one letter, one number and one special character!",
        label: "Password",
        column: 6,
        // pattern: "^(?=.[A-Za-z])(?=.\\d)(?=.[@$!%#?&])[A-Za-z\\d@$!%*#?&]{8,}$",
    },
    {
        id: 4,
        name: "roleId",
        type: "select",
        className: "form-control",
        placeholder: "Role Name",
        errorMessage: "Please Select a Role!",
        label: "Role Name",
        column: 3,
        ajax: true,
        mapping: { path: API_ROUTES.ROLE_ALL, value: "id", text: "name" },
        required: true,
    },
    {
        id: 5,
        name: "enabled",
        type: "select",
        values: [{ text: "Select Status", value: "" }, { text: 'Active', value: true }, { text: 'Inactive', value: false }],
        className: "form-control",
        label: "Active Status",
        column: 3,
        required: true,
    }
];

export const VISUAL_ACUITY = [
    {
        id: 1,
        name: "eyeVisualAcuityLeft",
        type: "text",
        className: "form-control",
        placeholder: "Eye Visual Acuity Left",
        label: "Eye Visual Acuity Left",
        column: 3,
    },
    {
        id: 2,
        name: "eyeVisualAcuityRight",
        type: "text",
        className: "form-control",
        placeholder: "Eye Visual Acuity Right",
        label: "Eye Visual Acuity Right",
        column: 3,
    }
];

export const HEARING_TEST = [
    {
        id: 1,
        name: "earLeft",
        type: "text",
        className: "form-control",
        placeholder: "Hearing Acuity Left",
        label: "Hearing Acuity Left",
        column: 3,
    },
    {
        id: 2,
        name: "earRight",
        type: "text",
        className: "form-control",
        placeholder: "Hearing Acuity Right",
        label: "Hearing Acuity Right",
        column: 3,
    }
];

export const SYSTEMIC_EXAM = [
    {
        id: 1,
        name: "bloodPressure",
        type: "text",
        className: "form-control",
        placeholder: "Blood Pressure",
        label: "Blood Pressure",
        column: 3,
    },
    {
        id: 2,
        name: "heart",
        type: "text",
        className: "form-control",
        placeholder: "Heart",
        label: "Heart",
        column: 3,
    }
];

export const RESPIRATORY_EXAM = [
    {
        id: 1,
        name: "lungs",
        type: "text",
        className: "form-control",
        placeholder: "Lungs",
        label: "Lungs",
        column: 3,
    },
    {
        id: 2,
        name: "gastrointestinalAbdomen",
        type: "text",
        className: "form-control",
        placeholder: "Gastrointestinal Abdomen",
        label: "Gastrointestinal Abdomen",
        column: 3,
    }
];

export const OTHERS = [
    {
        id: 1,
        name: "height",
        type: "text",
        className: "form-control",
        placeholder: "Height",
        label: "Height (cm)",
        column: 3,
    },
    {
        id: 2,
        name: "weight",
        type: "text",
        className: "form-control",
        placeholder: "Weight",
        label: "Weight (kg)",
        column: 3,
    },
    {
        id: 3,
        name: "hernia",
        type: "text",
        className: "form-control",
        placeholder: "Hernia",
        label: "Hernia",
        column: 3,
    },
    {
        id: 4,
        name: "varicoseVeins",
        type: "text",
        className: "form-control",
        placeholder: "Varicose Veins",
        label: "Varicose Veins",
        column: 3,
    },
    {
        id: 5,
        name: "deformities",
        type: "text",
        className: "form-control",
        placeholder: "Deformities",
        label: "Deformities",
        column: 3,
    },
    {
        id: 6,
        name: "skin",
        type: "text",
        className: "form-control",
        placeholder: "Skin",
        label: "Skin",
        column: 3,
    },
    {
        id: 7,
        name: "cns",
        type: "text",
        className: "form-control",
        placeholder: "C.N.S.",
        label: "C.N.S.",
        column: 3,
    },
    {
        id: 8,
        name: "extremities",
        type: "text",
        className: "form-control",
        placeholder: "Extremities",
        label: "Extremities",
        column: 3,
    },
    {
        id: 9,
        name: "psychiatry",
        type: "text",
        className: "form-control",
        placeholder: "Psychiatry",
        label: "Psychiatry",
        column: 3,
    }
];

export const VENEREAL_DISEASES = [
    {
        id: 1,
        name: "symptoms",
        type: "text",
        className: "form-control",
        placeholder: "Symptoms",
        label: "Symptoms",
        column: 3,
    },
];
export const CARDIO_VASCULAR_SYSTEM
    = [
        {
            id: 1,
            name: "A. HEART SIZE",
            type: "text",
            className: "form-control",
            placeholder: "A. HEART SIZE",
            label: "A. HEART SIZE",
            column: 3,
        },
    ];

export const X_RAY_INVESTIGATION = [
    {
        id: 1,
        name: "chestXray",
        type: "text",
        className: "form-control",
        placeholder: "Chest X-RAY",
        label: "Chest X-RAY",
        column: 3,
    },
    {
        id: 2,
        name: "ecg",
        type: "text",
        className: "form-control",
        placeholder: "ECG",
        label: "ECG",
        column: 3,
    }
];

export const BLOOD_ELISA_SEROLOGY_MEDICAL = [
    {
        id: 1,
        name: "hiv",
        type: "text",
        className: "form-control",
        placeholder: "HIV I & HIV II",
        label: "HIV I & HIV II",
        column: 3,
    },
    {
        id: 2,
        name: "hbsag",
        type: "text",
        className: "form-control",
        placeholder: "HBSAG",
        label: "HBSAG",
        column: 3,
    }
];

export const DRUG_TEST = [
    {
        id: 1,
        name: "thc",
        type: "text",
        className: "form-control",
        placeholder: "THC",
        label: "THC",
        column: 3,
    },
    {
        id: 2,
        name: "mop",
        type: "text",
        className: "form-control",
        placeholder: "MOP",
        label: "MOP",
        column: 3,
    },
    {
        id: 3,
        name: "amp",
        type: "text",
        className: "form-control",
        placeholder: "AMP",
        label: "AMP",
        column: 3,
    }
];

export const URINE = [
    {
        id: 1,
        name: "sugar",
        type: "text",
        className: "form-control",
        placeholder: "Sugar",
        label: "Sugar",
        column: 3,
    },
    {
        id: 2,
        name: "albumin",
        type: "text",
        className: "form-control",
        placeholder: "Albumin",
        label: "Albumin",
        column: 3,
    },
    {
        id: 3,
        name: "urineBilharziasis",
        type: "text",
        className: "form-control",
        placeholder: "Bilharziasis",
        label: "Bilharziasis",
        column: 3,
    },
    {
        id: 4,
        name: "pregnancy",
        type: "text",
        className: "form-control",
        placeholder: "Pregnancy Test",
        label: "Pregnancy Test",
        column: 3,
    },
    {
        id: 5,
        name: "others",
        type: "text",
        className: "form-control",
        placeholder: "Others",
        label: "Others",
        column: 3,
    },
];

export const STOOL = [
    {
        id: 1,
        name: "helminths",
        type: "text",
        className: "form-control",
        placeholder: "Helminths",
        label: "Helminths",
        column: 3,
    },
    {
        id: 2,
        name: "giardia",
        type: "text",
        className: "form-control",
        placeholder: "Giardia",
        label: "Giardia",
        column: 3,
    },
    {
        id: 3,
        name: "culture",
        type: "text",
        className: "form-control",
        placeholder: "Culture",
        label: "Culture",
        column: 3,
    },
    {
        id: 4,
        name: "stoolBilharziasis",
        type: "text",
        className: "form-control",
        placeholder: "Bilharziasis",
        label: "Bilharziasis",
        column: 3,
    }
];

export const BLOOD_CBC_GROUPING = [
    {
        id: 1,
        name: "malaria",
        type: "text",
        className: "form-control",
        placeholder: "Malaria",
        label: "Malaria",
        column: 3,
    },
    {
        id: 2,
        name: "microfilaria",
        type: "text",
        className: "form-control",
        placeholder: "Microfilaria",
        label: "Microfilaria",
        column: 3,
    },
    {
        id: 3,
        name: "bloodGroup",
        type: "text",
        className: "form-control",
        placeholder: "Blood Group",
        label: "Blood Group",
        column: 3,
    },
    {
        id: 4,
        name: "haemoglobin",
        type: "text",
        className: "form-control",
        placeholder: "Haemoglobin",
        label: "Haemoglobin",
        column: 3,
    },
    {
        id: 5,
        name: "esr",
        type: "text",
        className: "form-control",
        placeholder: "ESR",
        label: "ESR",
        column: 3,
    },
];

export const BLOOD_BIOCHEMISTRY = [
    {
        id: 1,
        name: "rbs",
        type: "text",
        className: "form-control",
        placeholder: "R.B.S.",
        label: "R.B.S.",
        column: 3,
    },
    {
        id: 2,
        name: "creatinine",
        type: "text",
        className: "form-control",
        placeholder: "Creatinine",
        label: "Creatinine",
        column: 3,
    },
    {
        id: 3,
        name: "tbil",
        type: "text",
        className: "form-control",
        placeholder: "T.BIL",
        label: "T.BIL",
        column: 3,
    },
    {
        id: 4,
        name: "sgot",
        type: "text",
        className: "form-control",
        placeholder: "SGPT",
        label: "SGPT",
        column: 3,
    },
    {
        id: 5,
        name: "sgpt",
        type: "text",
        className: "form-control",
        placeholder: "SGOT",
        label: "SGOT",
        column: 3,
    },
    {
        id: 6,
        name: "alp",
        type: "text",
        className: "form-control",
        placeholder: "ALP",
        label: "ALP",
        column: 3,
    },
    {
        id: 7,
        name: "urea",
        type: "text",
        className: "form-control",
        placeholder: "UREA",
        label: "UREA",
        column: 3,
    }
];

export const BLOOD_ELISA_SEROLOGY_LABORATORY = [
    {
        id: 1,
        name: "antiHcv",
        type: "text",
        className: "form-control",
        placeholder: "Aanti HCV",
        label: "Aanti HCV",
        column: 3,
    },
    {
        id: 2,
        name: "tpha",
        type: "text",
        className: "form-control",
        placeholder: "TPHA",
        label: "TPHA",
        column: 3,
    },
    {
        id: 3,
        name: "vdrl",
        type: "text",
        className: "form-control",
        placeholder: "VDRL",
        label: "VDRL",
        column: 3,
    }
];

export const PATIENT_FORM_EXTRA_FIELDS = [
    {
        id: 1,
        name: "status",
        type: "select",
        values: [{ text: "Select Status", value: "" }, { text: "Fit", value: "FIT" }, { text: "Unfit", value: "UNFIT" }, { text: "Held Up", value: "HELD_UP" }],
        className: "form-control",
        label: "Final Report Status",
        column: 3,
    },
    {
        id: 2,
        name: "expireDate",
        type: "date",
        className: "form-control",
        placeholder: "Report Expiry Date",
        label: "Report Expiry Date",
        column: 3
    },
    {
        id: 3,
        name: "remark",
        type: "textarea",
        className: "form-control",
        placeholder: "Remarks",
        label: "Remarks",
        column: 12,
    }
];

export const BILL = [
    {
        id: 1,
        name: "testId",
        type: "select",
        className: "form-control",
        placeholder: "Test Name",
        errorMessage: "Please Select a Package or Agency!",
        label: "Test Name",
        column: 6,
        required: true,
        ajax: true,
        mapping: { path: API_ROUTES.TEST_ALL, value: "id", text: "nameWithPrice" }
    },
    {
        id: 2,
        name: "amount",
        type: "number",
        className: "form-control",
        placeholder: "Amount",
        label: "Amount",
        column: 6,
    }
];

export const CATEGORY = [
    {
        id: 1,
        name: "name",
        type: "text",
        className: "form-control",
        placeholder: "Name",
        errorMessage: "Name shouldn't include any special character!",
        label: "Name",
        column: 6,
        pattern: "^[A-Za-z, ]*$",
        required: true
    },
    {
        id: 2,
        name: "description",
        type: "textarea",
        className: "form-control",
        placeholder: "Description",
        errorMessage: "Description shouldn't include any special character!",
        label: "Description",
        column: 12
    }
];

export const SUB_CATEGORY = [
    {
        id: 1,
        name: "mainId",
        type: "select",
        className: "form-control",
        placeholder: "Category ID",
        errorMessage: "Please Select a Category ID!",
        label: "Category ID",
        column: 6,
        required: true,
        ajax: true,
        mapping: { path: API_ROUTES.MAIN_CATEGORY_GET, value: "id", text: "name" }
    },
    {
        id: 2,
        name: "name",
        type: "text",
        className: "form-control",
        placeholder: "Name",
        errorMessage: "Name shouldn't include any special character!",
        label: "Name",
        column: 6,
        pattern: "^[A-Za-z, ]*$",
        required: true
    },
    {
        id: 3,
        name: "description",
        type: "textarea",
        className: "form-control",
        placeholder: "Description",
        errorMessage: "Description shouldn't include any special character!",
        label: "Description",
        column: 12
    }
];

export const ACCOUNT = [
    {
        id: 1,
        name: "name",
        type: "text",
        className: "form-control",
        placeholder: "Name",
        errorMessage: "Name shouldn't include any special character!",
        label: "Name",
        column: 6,
        pattern: "^[A-Za-z0-9, -()]*$",
        required: true
    },
    {
        id: 2,
        name: "description",
        type: "textarea",
        className: "form-control",
        placeholder: "Description",
        errorMessage: "Description shouldn't include any special character!",
        label: "Description",
        column: 12
    }
];

export const BUSINESS_SETTINGS = [
    {
        id: 1,
        name: "businessName",
        type: "text",
        className: "form-control",
        placeholder: "Business Name",
        errorMessage: "Business Name shouldn't include any special character!",
        label: "Business Name",
        column: 4,
        pattern: "^[A-Za-z, ]*$",
        required: true
    },
    {
        id: 2,
        name: "currency",
        type: "select",
        values: [{ text: "Select Currency", value: "" }, { text: "Bangladesh-Taka", value: "BDT" }],
        className: "form-control",
        label: "Currency",
        column: 4,
    },
    {
        id: 3,
        name: "dateFormat",
        type: "select",
        values: [{ text: "Select Date Format", value: "" }, { text: "dd-mm-yyyy", value: "FORMAT1" }, {
            text: "mm-dd-yyyy",
            value: "FORMAT2"
        }, { text: "dd/mm/yyyy", value: "FORMAT3" }, { text: "mm/dd/yyyy", value: "FORMAT4" }],
        className: "form-control",
        label: "Date Format",
        column: 4,
    }
];

export const REPORT_SETTINGS = [
    {
        id: 1,
        name: "reportAddress",
        type: "text",
        className: "form-control",
        placeholder: "Address",
        errorMessage: "Invalid Address!",
        label: "Address",
        column: 12,
        pattern: "^[a-zA-Z0-9, /.:;()-]+$"
    },
    {
        id: 2,
        name: "reportContactNumber",
        type: "tel",
        className: "form-control",
        placeholder: "Mobile Number",
        errorMessage: "Invalid Mobile Number!",
        label: "Mobile Number",
        column: 6,
        pattern: "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$"
    },
    {
        id: 3,
        name: "reportEmail",
        type: "email",
        className: "form-control",
        placeholder: "Email",
        errorMessage: "Invalid Email Address!",
        label: "Email",
        column: 6,
        pattern: "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
    }
];

export const EMAIL_SETTINGS = [
    {
        id: 1,
        name: "mailDriver",
        type: "select",
        values: [{ text: "Select Mail Driver", value: "" }, { text: "SMTP", value: "SMTP" }],
        className: "form-control",
        label: "Mail Driver",
        column: 4,
    },
    {
        id: 2,
        name: "mailHost",
        type: "text",
        className: "form-control",
        placeholder: "Host Name",
        errorMessage: "Host Name shouldn't include any special character!",
        label: "Host Name",
        column: 4,
        pattern: "^[A-Za-z0-9/:.-_\\]*$"
    },
    {
        id: 3,
        name: "mailPort",
        type: "text",
        className: "form-control",
        placeholder: "Port",
        errorMessage: "Port shouldn't include any special character or letter!",
        label: "Port",
        column: 4,
        pattern: "^[0-9]*$"
    },
    {
        id: 4,
        name: "mailUsername",
        type: "text",
        className: "form-control",
        placeholder: "User Name",
        errorMessage: "User Name shouldn't include any special character!",
        label: "User Name",
        column: 4,
        pattern: "^[A-Za-z ]*$"
    },
    {
        id: 5,
        name: "mailPassword",
        type: "password",
        className: "form-control",
        placeholder: "Password",
        errorMessage: "Shouldn't include Minimum 8 characters, at least one letter, one number and one special character!",
        label: "Password",
        column: 4,
        // pattern: "^(?=.[A-Za-z])(?=.\\d)(?=.[@$!%#?&])[A-Za-z\\d@$!%*#?&]{8,}$",
    },
    {
        id: 6,
        name: "mailEncryption",
        type: "text",
        className: "form-control",
        placeholder: "tls / ssl",
        errorMessage: "Encryption shouldn't include any special character, number or uppercase!",
        label: "Encryption",
        column: 4,
        pattern: "^[a-z]*$"
    },
    {
        id: 7,
        name: "mailFromAddress",
        type: "text",
        className: "form-control",
        placeholder: "From Address",
        errorMessage: "Invalid From Address!",
        label: "From Address",
        column: 12,
        pattern: "^[a-zA-Z0-9, /.:;-]+$"
    },
    {
        id: 8,
        name: "mailFromName",
        type: "text",
        className: "form-control",
        placeholder: "From Name",
        errorMessage: "From Name shouldn't include any special character!",
        label: "From Name",
        column: 4,
        pattern: "^[A-Za-z, ]*$",
    }
];

export const INVOICE_SETTINGS = [
    {
        id: 0,
        name: "invoiceAddress",
        type: "text",
        className: "form-control",
        placeholder: "Address",
        label: "Address",
        column: 8,
    }, {
        id: 1,
        name: "invoiceContactNumber",
        type: "tel",
        className: "form-control",
        placeholder: "Contact Number",
        label: "Contact Number",
        column: 4,
    }, {
        id: 2,
        name: "invoiceEmail",
        type: "email",
        className: "form-control",
        placeholder: "Email",
        label: "Email",
        column: 4,
    },
    {
        id: 3,
        name: "invoiceLogo",
        type: "file",
        className: "form-control",
        placeholder: "Invoice Logo",
        label: "Invoice Logo",
        column: 4,
        required: false
    },
    {
        id: 4,
        name: "invoiceSeal",
        type: "file",
        className: "form-control",
        placeholder: "Invoice Seal",
        label: "Invoice Seal",
        column: 4,
        required: false
    }, {
        id: 8,
        name: "websiteUrl",
        type: "text",
        className: "form-control",
        placeholder: "Website URL",
        label: "Website URL",
        column: 6,
    }, {
        id: 8,
        name: "reportUrl",
        type: "text",
        className: "form-control",
        placeholder: "Report URL",
        label: "Report URL",
        column: 6,
    }
];

export const ROLE = [
    {
        id: 2,
        name: "name",
        type: "text",
        className: "form-control",
        placeholder: "Name",
        errorMessage: "Name should be uppercase and only contain underscore!",
        label: "Name",
        column: 12,
        pattern: "^[A-Z]+(?:_[A-Z]+)*$",
        required: true
    },
    {
        id: 3,
        name: "description",
        type: "textarea",
        className: "form-control",
        placeholder: "Description",
        errorMessage: "Description shouldn't include any special character!",
        label: "Description",
        column: 12
    }
];

export const ACCOUNT_TRANSFER = [
    {
        id: 1,
        name: "fromId",
        type: "select",
        className: "form-control",
        placeholder: "Transfer From",
        errorMessage: "Please Select a Category ID!",
        label: "Transfer From",
        column: 6,
        required: true,
        ajax: true,
        mapping: { path: API_ROUTES.ACCOUNT_ALL, value: "id", text: "name" }
    },
    {
        id: 1,
        name: "toId",
        type: "select",
        className: "form-control",
        placeholder: "Transfer TO",
        errorMessage: "Please Select a Category ID!",
        label: "Transfer To",
        column: 6,
        required: true,
        ajax: true,
        mapping: { path: API_ROUTES.ACCOUNT_ALL, value: "id", text: "name" }
    },
    {
        id: 2,
        name: "amount",
        type: "number",
        className: "form-control",
        placeholder: "Amount",
        errorMessage: "Please use numbers only!",
        label: "Amount",
        column: 12,
        pattern: "^[0-9]*$",
        required: true
    },
    {
        id: 3,
        name: "description",
        type: "textarea",
        className: "form-control",
        placeholder: "Description",
        errorMessage: "Description shouldn't include any special character!",
        label: "Description",
        column: 12
    }
];

export const SUPPLIER = [
    {
        id: 1,
        name: "name",
        type: "text",
        className: "form-control",
        placeholder: "Name",
        errorMessage: "Name shouldn't include any special character!",
        label: "Name",
        column: 6,
        pattern: "^[A-Za-z0-9, ]*$",
        required: true
    }, {
        id: 3,
        name: "company",
        type: "text",
        className: "form-control",
        placeholder: "Company Name",
        errorMessage: "Company Name shouldn't include any special character!",
        label: "Company Name",
        column: 12,
        required: true
    }, {
        id: 4,
        name: "contactNo",
        type: "text",
        className: "form-control",
        placeholder: "Contact Number",
        errorMessage: "Contact Number shouldn't include any special character!",
        label: "Contact Number",
        column: 6
    }, {
        id: 2,
        name: "email",
        type: "email",
        className: "form-control",
        placeholder: "Email",
        errorMessage: "Invalid Email Address!",
        label: "Email",
        column: 6,
        pattern: "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
    }
];

export const REPORT = {
    id: null,
    xrayImage: "",
    eyeVisualAcuityLeft: "",
    eyeVisualAcuityRight: "",
    earLeft: "",
    earRight: "",
    bloodPressure: "",
    heart: "",
    lungs: "",
    gastrointestinalAbdomen: "",
    height: "",
    weight: "",
    hernia: "",
    varicoseVeins: "",
    deformities: "",
    skin: "",
    cns: "",
    extremities: "",
    psychiatry: "",
    symptoms: "",
    chestXray: "",
    ecg: "",
    hiv: "",
    hbsag: "",
    thc: "",
    mop: "",
    amp: "",
    status: "",
    sugar: "",
    albumin: "",
    urineBilharziasis: "",
    pregnancy: "",
    others: "",
    helminths: "",
    giardia: "",
    bilharziasis: "",
    culture: "",
    stoolBilharziasis: "",
    malaria: "",
    microfilaria: "",
    bloodGroup: "",
    haemoglobin: "",
    esr: "",
    rbs: "",
    creatinine: "",
    tbil: "",
    sgot: "",
    sgpt: "",
    alp: "",
    urea: "",
    antiHcv: "",
    tpha: "",
    vdrl: "",
    remark: "",
    createdDate: "",
    modifiedDate: "",
    qr: "",
    pulse: "",
    distantAidedRight: "",
    distantAidedLeft: "",
    distantUnaidedRight: "",
    distantUnaidedLeft: "",
    nearAidedRight: "",
    nearAidedLeft: "",
    nearUnaidedRight: "",
    nearUnaidedLeft: "",
    clearVision: "",
}

export const PATIENT = {
    createdDate: "",
    modifiedDate: "",
    id: null,
    photo: "",
    fingerPrint: "",
    fullName: "",
    passportNo: "",
    issueDate: "",
    expiredDate: "",
    visaNo: "",
    visaDate: "",
    travelingTo: "",
    presentAddress: "n",
    permanentAddress: null,
    mobile: "",
    email: "",
    group: " ",
    testOrPackageId: null,
    agentOrAgencyId: null,
    deliveryDate: "",
    gender: "",
    maritalStatus: "",
    dateOfBirth: null,
    fathersName: "",
    mothersName: "",
    nationality: "",
    religion: "",
    profession: "",
    nidNumber: "",
    specialNote: "",
    status: "",
    report: REPORT,
    regNo: "",
    testOrPackageName: "",
    agentOrAgencyName: " ",
    reportUrl: "",
    qr: "",
}

export const REF_VALUE = {
    id: null,
    eyeVisualAcuityLeft: "",
    eyeVisualAcuityRight: "",
    earLeft: "",
    earRight: "",
    bloodPressure: "",
    heart: "",
    lungs: "",
    gastrointestinalAbdomen: "",
    height: "",
    weight: "",
    hernia: "",
    varicoseVeins: "",
    deformities: "",
    skin: "",
    cns: "",
    extremities: "",
    psychiatry: "",
    symptoms: "",
    chestXray: "",
    ecg: "",
    hiv: "",
    hbsag: "",
    thc: "",
    mop: "",
    amp: "",
    sugar: "",
    albumin: "",
    urineBilharziasis: "",
    pregnancy: "",
    others: "",
    helminths: "",
    giardia: "",
    bilharziasis: "",
    culture: "",
    stoolBilharziasis: "",
    malaria: "",
    microfilaria: "",
    bloodGroup: "",
    haemoglobin: "",
    esr: "",
    rbs: "",
    creatinine: "",
    tbil: "",
    sgot: "",
    sgpt: "",
    alp: "",
    urea: "",
    antiHcv: "",
    tpha: "",
    vdrl: "",
    pulse: "",
    distantAidedRight: "",
    distantAidedLeft: "",
    distantUnaidedRight: "",
    distantUnaidedLeft: "",
    nearAidedRight: "",
    nearAidedLeft: "",
    nearUnaidedRight: "",
    nearUnaidedLeft: "",
    clearVision: "",
}

export const CONFIGURATION = {
    id: null,
    businessName: "",
    currency: "",
    dateFormat: "",
    logo: null,
    mailDriver: "",
    mailHost: "",
    mailPort: "",
    mailUsername: "",
    mailPassword: "",
    mailEncryption: "",
    mailFromAddress: "",
    mailFromName: "",
    smsService: "",
    smsHeader1key: "",
    smsHeader1value: "",
    smsHeader2key: "",
    smsHeader2value: "",
    smsHeader3key: "",
    smsHeader3value: "",
    smsParameter1key: "",
    smsParameter1value: "",
    smsParameter2key: "",
    smsParameter2value: "",
    smsParameter3key: "",
    smsParameter3value: "",
    smsParameter4key: "",
    smsParameter4value: "",
    smsParameter5key: "",
    smsParameter5value: "",
    reportCompanyLogo: null,
    reportAddress: "",
    reportContactNumber: "",
    reportEmail: "",
    reportDoctorSeal: null
}

export const PATIENT_TEST_REPORT = {
    id: null,
    testId: "",
    patientId: "",
    description: "",
    attachment: "",
    patientName: "",
    testName: ""
}

export const FORM = {
    PERSONAL_INFO,
    MALAYSIA_PERSONAL_INFO,
    PASSPORT_INFO,
    CONTACT_INFO,
    SERVICE_BILLING_INFO,
    AGENT,
    AGENCY,
    PACKAGE,
    TEST,
    TEST_REPORT,
    USER,
    USER_EDIT,
    VISUAL_ACUITY,
    HEARING_TEST,
    SYSTEMIC_EXAM,
    RESPIRATORY_EXAM,
    OTHERS,
    VENEREAL_DISEASES,
    CARDIO_VASCULAR_SYSTEM,
    X_RAY_INVESTIGATION,
    BLOOD_ELISA_SEROLOGY_MEDICAL,
    DRUG_TEST,
    URINE,
    STOOL,
    BLOOD_CBC_GROUPING,
    BLOOD_BIOCHEMISTRY,
    BLOOD_ELISA_SEROLOGY_LABORATORY,
    PATIENT_FORM_EXTRA_FIELDS,
    BILL,
    CATEGORY,
    ACCOUNT,
    SUB_CATEGORY,
    BUSINESS_SETTINGS,
    REPORT_SETTINGS,
    EMAIL_SETTINGS,
    INVOICE_SETTINGS,
    ROLE,
    ACCOUNT_TRANSFER,
    SUPPLIER,
}

export const MODEL = {
    PATIENT,
    REPORT,
    REF_VALUE,
    CONFIGURATION,
    PATIENT_TEST_REPORT,
}
