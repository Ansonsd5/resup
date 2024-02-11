import allTextConstants from "./textConstants";


  const formDataConfig = {
    fullName: {
        id: 'fullname',
        inputType: allTextConstants.INPUT_TYPE.TEXTBOX,
        label: 'Enter full name',
        maxLength: 50,
        isError: true,
        type: 'text',
        errormsg: 'Enter a valid Name',
        placeholder : 'Enter full name',
        value: '',
        visible : true,
        error : false,
        isMandatory: true,
       

    },
    targetRole: {
        id: 'targetrole',
        inputType: allTextConstants.INPUT_TYPE.TEXTBOX,
        label: 'Role you are looking for',
        maxLength: 50,
        isError: true,
        type: 'text',
        value: '',
        errormsg: 'Enter a valid target role',
        placeholder : 'ex: Frontend Developer',
        visible : true,
        isMandatory: true,
    },
    targetCompany: {
        id: 'targetcompany',
        inputType: allTextConstants.INPUT_TYPE.TEXTBOX,
        label: 'Target company name',
        maxLength: 50,
        isError: true,
        value: '',
        type: 'text',
        errormsg: 'Enter a valid Name',
        placeholder : 'ex: Google',
        visible : true,
        isMandatory: true,


    },
    workExperience: {
        id: 'workexperience',
        inputType: allTextConstants.INPUT_TYPE.TEXTBOX,
        label: 'Work experience in years',
        maxLength: 2,
        isError: true,
        // type: 'number',
        value: '',
        errormsg: 'Enter a valid years',
        placeholder : 'ex: 4',
        visible : true,
        isMandatory: true,
        isyears: true,
    },
    mobileNumber: {
        id: 'mobilenumber',
        inputType: allTextConstants.INPUT_TYPE.TEXTBOX,
        label: 'Enter valid mobilenumber',
        maxLength: 10,
        value: '',
        isError: true,
        // type: 'number',
        errormsg: 'Enter valid mobile number',
        placeholder  : '9148292452',
        visible : true,
        isMandatory: true,

    },
    skills: {
        id: 'skills',
        inputType: allTextConstants.INPUT_TYPE.TEXTBOX,
        label: 'Add skills',
        maxLength: 100,
        isError: true,
        value: '',
        type: 'text',
        errormsg: 'Enter a skills',
        placeholder  : 'Search and add skills',
        visible : true,
        isMandatory: true,
    }
  }




  export  {
    formDataConfig,
   
  }