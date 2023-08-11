

const Validation = (data) => {
    let errors ={};
    if(!data.name)
    {
        errors.name="*Name is required"
    }
    if(!data.email)
    {
        errors.email="*Email is required"
    }
    if(!data.message)
    {
        errors.message="*Please provide your comments"
    }
    return errors
}

export default Validation
