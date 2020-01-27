export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const checkSignUpValidity = ( name,email,password,confirmPassword ) => {

    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(name.trim()==='' || email.trim()==='' || password.trim()==='' || confirmPassword.trim()==='') {
        return 'Please fill the fields'
    } else if(password!==confirmPassword) {
        return 'Password doesn\'t match!!';
    } else if(!pattern.test( email )) {
        return 'Email Pattern is not correct!!';
    }

    return null;
};
