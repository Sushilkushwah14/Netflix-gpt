

export const checkvalidadata=(email,password,name)=>{

    const isEmailValid= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordlValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
   const isNdameValid=/^[a-zA-Z ]{2,30}$/.test(name)

    if(!isEmailValid) return "Email ID is not valid"
    if(!isPasswordlValid ) return "Password is not valid"
    if(!isNdameValid ) return "Incorrect name"

    return null;
}